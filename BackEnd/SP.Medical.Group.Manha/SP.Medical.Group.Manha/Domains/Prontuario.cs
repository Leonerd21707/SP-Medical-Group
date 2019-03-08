using System;
using System.Collections.Generic;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class Prontuario
    {
        public Prontuario()
        {
            Consulta = new HashSet<Consulta>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }
        public string Endereço { get; set; }
        public DateTime? DataNascimento { get; set; }
        public string Telefone { get; set; }
        public int? IdUsuario { get; set; }

        public Usuario IdUsuarioNavigation { get; set; }
        public ICollection<Consulta> Consulta { get; set; }
    }
}
