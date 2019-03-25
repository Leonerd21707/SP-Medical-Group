using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SP.Medical.Group.Manha.Domains;
using SP.Medical.Group.Manha.Interfaces;
using SP.Medical.Group.Manha.Repositories;

namespace SP.Medical.Group.Manha.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicaController : ControllerBase
    {
        private IClinica ClinicaRepository { get; set; }

        public ClinicaController()
        {
            ClinicaRepository = new ClinicaRepository();
        }
        //cadastra uma nova clinica
        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult Post(Clinica clinica)
        {
            try
            {
                ClinicaRepository.Cadastrar(clinica);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}