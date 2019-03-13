using SP.Medical.Group.Manha.Domains;
using SP.Medical.Group.Manha.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP.Medical.Group.Manha.Repositories
{
    public class ConsultasRepository : IConsultas

        //Cadastra uma nova consulta
    {
        public void Cadastrar(Consulta consulta)
        {
            using (MedGroupContext ctx = new MedGroupContext())
            {
                ctx.Consulta.Add(consulta);
                ctx.SaveChanges();
            } 
        }
    }
}
