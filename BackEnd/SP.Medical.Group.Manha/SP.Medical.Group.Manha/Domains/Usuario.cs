using System;
using System.Collections.Generic;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            ConsultaIdMedicosNavigation = new HashSet<Consulta>();
            ConsultaIdProntuariosNavigation = new HashSet<Consulta>();
        }

        public int Id { get; set; }
        public int IdTipo { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public TipoUsuario IdTipoNavigation { get; set; }
        public ICollection<Consulta> ConsultaIdMedicosNavigation { get; set; }
        public ICollection<Consulta> ConsultaIdProntuariosNavigation { get; set; }
    }
}
