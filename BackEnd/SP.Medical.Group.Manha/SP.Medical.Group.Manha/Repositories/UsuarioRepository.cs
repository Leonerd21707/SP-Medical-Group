using SP.Medical.Group.Manha.Domains;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SP.Medical.Group.Manha.Repositories
{
    public class UsuarioRepository
    {
        private string StringConexao = "Data Source=.\\SqlExpress;Initial Catalog=SP_MEDIC_GROUP_DEV_MANHA;Integrated Security=True";


        public void Cadastrar(Usuario User)
        {
            string QueryInsert = "INSERT INTO USUARIOS(EMAIL, SENHA, ID_TIPO) VALUES(@EMAIL, @SENHA,@ID_TIPO)";

            using (SqlConnection con = new SqlConnection(StringConexao))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand(QueryInsert, con))
                {
                    cmd.Parameters.AddWithValue("@EMAIL", User.Email);
                    cmd.Parameters.AddWithValue("@SENHA", User.Senha);
                    cmd.Parameters.AddWithValue("@TIPO_USUARIO", User.IdTipo);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
