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
        [Authorize(Roles = "Administrador")]
        [HttpGet("todos")]
        public IActionResult Get(int IdBuscado)
        {
            try
            {
                using (MedGroupContext ctx = new MedGroupContext())
                {
                    return Ok(ConsultasRepository.Consultas( IdBuscado));

                }
            }
            catch(Exception XS) 
            {
                return BadRequest(XS.Message);
            }
        }       

        //cadastra uma nova consulta
        [Authorize(Roles = "Administrador")]
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

        //Altera os dados da consulta
        [Authorize(Roles = "Administrador")]
        [HttpPut]
        public IActionResult Put(Consulta consulta)
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

        //Lista todas as consultas do medico
        [Authorize (Roles ="Medico")]
        [HttpGet("medico/{IdBuscado}")]
        public IActionResult GetConsultaMedico(int IdBuscado)
        {
            try
            {
                //Todo: Buscar o id do medico a partir do id do usuario
                //Passar como parametro o id do medico no metodo

                return Ok(ConsultasRepository.ConsultaMedico( IdBuscado));
            }
            catch 
            {
                return BadRequest();
            }
        }

        //Lista todas as consultas do paciente
        [Authorize(Roles = "Paciente")]
        [HttpGet("paciente/{IdBuscado}")]
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