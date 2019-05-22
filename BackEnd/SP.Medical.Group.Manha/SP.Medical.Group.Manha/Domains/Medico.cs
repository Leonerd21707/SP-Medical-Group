using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class Medico
    {
        public Medico()
        {
            Consulta = new HashSet<Consulta>();
        }

        [ForeignKey("Id")]
        public int Id { get; set; }
        public string Crm { get; set; }
        public string Nome { get; set; }
        public int IdEspecializacao { get; set; }
        public int IdClinica { get; set; }

        public virtual Usuario Usuario { get; set; }
        public Clinica IdClinicaNavigation { get; set; }
        public Especializacao IdEspecializacaoNavigation { get; set; }
        public Usuario IdUsuarioNavigation { get; set; }
        public ICollection<Consulta> Consulta { get; set; }
    }
}
