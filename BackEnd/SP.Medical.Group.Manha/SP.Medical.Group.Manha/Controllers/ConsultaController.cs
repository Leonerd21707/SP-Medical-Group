using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SP.Medical.Group.Manha.Domains;

namespace SP.Medical.Group.Manha.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultaController : ControllerBase
    {
        // SqlConnection (conexao) + SqlCommand (comando select)
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                // dentro do MedGroup, há tudo o que preciso 
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
    }
}