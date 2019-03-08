using System;
using System.Collections.Generic;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class Especializacao
    {
        public Especializacao()
        {
            Medico = new HashSet<Medico>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }

        public ICollection<Medico> Medico { get; set; }
    }
}
