using System;
using System.Collections.Generic;

namespace SP.Medical.Group.Manha.Domains
{
    public partial class Clinica
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cnpj { get; set; }
        public string RazaoSocial { get; set; }
        public string Endereco { get; set; }
    }
}
