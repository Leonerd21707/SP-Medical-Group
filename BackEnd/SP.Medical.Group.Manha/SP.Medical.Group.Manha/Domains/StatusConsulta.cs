using System;
using System.Collections.Generic;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class StatusConsulta
    {
        public StatusConsulta()
        {
            Consulta = new HashSet<Consulta>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }

        public ICollection<Consulta> Consulta { get; set; }
    }
}
