using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SP.Medical.Group.Manha.Domains;
using SP.Medical.Group.Manha.Repositories;

namespace SP.Medical.Group.Manha.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TipoUsuarioController : ControllerBase
    {
        public IActionResult Get()
        {
            try
            {
                using (MedGroupContext ctx = new MedGroupContext())
                {
                    return Ok(ctx.TipoUsuario.ToList());
                }
            }
            catch (Exception XS)
            {
                return BadRequest(XS.Message);
            }
        }
    }
}