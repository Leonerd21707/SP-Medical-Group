using SP.Medical.Group.Manha.Domains;
using SP.Medical.Group.Manha.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP.Medical.Group.Manha.Repositories
{
    public class ClinicaRepository : IClinica
    {
        public void Cadastrar(Clinica clinica)
        {
            using (MedGroupContext ctx = new MedGroupContext())
            {
                ctx.Clinica.Add(clinica);
                ctx.SaveChanges();
            }
        }
    }
}
