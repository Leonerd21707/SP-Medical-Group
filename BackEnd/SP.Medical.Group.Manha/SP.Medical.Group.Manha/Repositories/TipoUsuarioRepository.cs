using SP.Medical.Group.Manha.Domains;
using SP.Medical.Group.Manha.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP.Medical.Group.Manha.Repositories
{
    public class TipoUsuarioRepository : ITipoUsuario
    {
        public List<TipoUsuario> ListarTipoUsuario(int idBuscado)
        {
            using (MedGroupContext ctx = new MedGroupContext())
            {
                return ctx.TipoUsuario.Where(c => c.Id == idBuscado).ToList();
            }
        }
    }
}
