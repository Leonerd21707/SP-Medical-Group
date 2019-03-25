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
    public class UsuarioController : ControllerBase
    {
        private IUsuario UsuarioRepository { get; set; }

        public UsuarioController()
        {
            UsuarioRepository = new UsuarioRepository();
        }
        // Lista todas os usuarios
        [Authorize(Roles = "Administrador")]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                using (MedGroupContext ctx = new MedGroupContext())
                {
                    return Ok(ctx.Usuario.ToList());
                }
            }
            catch (Exception XS)
            {
                return BadRequest(XS.Message);
            }
        }

        //Cadastra um novo Usuario
        [Authorize(Roles = "Administrador")]
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