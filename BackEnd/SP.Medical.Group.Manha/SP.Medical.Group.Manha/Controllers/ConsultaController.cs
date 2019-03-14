using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SP.Medical.Group.Manha.Domains;
using SP.Medical.Group.Manha.Interfaces;
using SP.Medical.Group.Manha.Repositories;

namespace SP.Medical.Group.Manha.Controllers
{    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultaController : ControllerBase
    {
        private IConsultas ConsultasRepository { get; set; }

        public ConsultaController()
        {
            ConsultasRepository = new ConsultasRepository();
        }
        
        // Lista todas as consultas agendadas
        [Authorize(Roles = "1")]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                using (MedGroupContext ctx = new MedGroupContext())
                {
                    return Ok(ctx.Consulta.ToList());
                }
            }
            catch(Exception XS) 
            {
                return BadRequest(XS.Message);
            }
        }       

        //cadastra uma nova consulta
        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Post(Consulta consulta)
        {
            try
            {
                ConsultasRepository.Cadastrar(consulta);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "1")]
        [HttpPut]
        public IActionResult put(Consulta consulta)
        {
            try
            {
                ConsultasRepository.Update(consulta);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
        [Authorize (Roles ="3")]
        [HttpGet]
        public IActionResult GetConsultaMedico(int IdBuscado)
        {
            try
            {
                return Ok(ConsultasRepository.ConsultaMedico( IdBuscado));
            }
            catch 
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "2")]
        [HttpGet]
        public IActionResult GetConsultaPaciente(int IdBuscado)
        {
            try
            {
                return Ok(ConsultasRepository.ConsultaPaciente(IdBuscado));
            }
            catch 
            {

                return BadRequest();
            }
        }
    }
}