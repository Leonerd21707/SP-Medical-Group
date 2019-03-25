using Microsoft.EntityFrameworkCore;
using SP.Medical.Group.Manha.Domains;
using SP.Medical.Group.Manha.Interfaces;
using System.Data.SqlClient;
using System.Linq;

namespace SP.Medical.Group.Manha.Repositories
{
    public class UsuarioRepository : IUsuario
    {
        public Usuario BuscarPorEmailSenha(string email, string senha)
        {
            using (MedGroupContext ctx = new MedGroupContext())
            {
                return ctx.Usuario.Include(i => i.IdTipoNavigation).First(i => i.Email == email && i.Senha == senha);
             }
        }

        //Cadastra um novo usuario
        public void Cadastrar(Usuario User)
        {
            using (MedGroupContext ctx = new MedGroupContext())
            {
                ctx.Usuario.Add(User);
                ctx.SaveChanges();
            }
        }
    }
}
