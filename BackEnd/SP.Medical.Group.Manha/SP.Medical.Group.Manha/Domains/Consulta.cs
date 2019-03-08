using System;
using System.Collections.Generic;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class Consulta
    {
        public int Id { get; set; }
        public int? IdProntuario { get; set; }
        public int? IdMedico { get; set; }
        public int? IdStatus { get; set; }
        public DateTime? DataConsulta { get; set; }
        public string Descricao { get; set; }

        public Medico IdMedicoNavigation { get; set; }
        public Prontuario IdProntuarioNavigation { get; set; }
        public StatusConsulta IdStatusNavigation { get; set; }
    }
}
