using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            catch (System.Exception ex)
            {
                return BadRequest();
            }
        }       

        //cadastra uma nova consulta
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
    }
}