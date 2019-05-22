using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class Prontuario
    {
        public Prontuario()
        {
            Consulta = new HashSet<Consulta>();
        }

        [ForeignKey("Id")]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Rg { get; set; }
        public string Cpf { get; set; }
        public string Endereço { get; set; }
        public DateTime DataNascimento { get; set; }
        public string Telefone { get; set; }

        public virtual Usuario Usuario { get; set; }
        public Medico IdMedicoNavigation { get; set; }
        public Usuario IdUsuarioNavigation { get; set; }
        public ICollection<Consulta> Consulta { get; set; }

    }
}
