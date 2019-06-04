using System;
using System.Collections.Generic;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class Consulta
    {
        public int Id { get; set; }
        public int IdProntuarios { get; set; }
        public int IdMedicos { get; set; }
        public int IdStatus { get; set; }
        public DateTime DataConsulta { get; set; }
        public string Descricao { get; set; }

        public Usuario IdMedicosNavigation { get; set; }
        public Usuario IdProntuariosNavigation { get; set; }
        public StatusConsulta IdStatusNavigation { get; set; }
    }
}
