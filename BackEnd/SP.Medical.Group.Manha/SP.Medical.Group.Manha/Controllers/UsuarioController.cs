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
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private IUsuario UsuarioRepository { get; set; }

        public UsuarioController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        //Cadastra um novo Usuario
        [HttpPost]
        public IActionResult Post(Usuario User)
        {
            try
            {
                UsuarioRepository.Cadastrar(User);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}