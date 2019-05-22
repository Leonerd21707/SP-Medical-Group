using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            Medico = new HashSet<Medico>();
            Prontuario = new HashSet<Prontuario>();
        }

        [Key]
        public int Id { get; set; }
        public int IdTipo { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public TipoUsuario IdTipoNavigation { get; set; }
        public ICollection<Medico> Medico { get; set; }
        public ICollection<Prontuario> Prontuario { get; set; }
    }
}
