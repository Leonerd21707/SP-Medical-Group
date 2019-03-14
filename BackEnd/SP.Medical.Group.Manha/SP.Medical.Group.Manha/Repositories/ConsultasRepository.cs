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

        //Lista as consultas do medico
        public List<Consulta> ConsultaMedico(int IdBuscado )
        {           
                using (MedGroupContext ctx = new MedGroupContext())
                {
                    return ctx.Consulta.Where(c => c.IdMedicoNavigation.Id == IdBuscado).ToList();
                }
        }

        //Lista as consultas do paciente
        public List<Consulta> ConsultaPaciente(int IdBuscado)
        {
            using (MedGroupContext ctx = new MedGroupContext())
            {
                return ctx.Consulta.Where(c => c.IdProntuarioNavigation.Id == IdBuscado).ToList();
            }
        }

        //Atualiza os dados da consulta
        public void Update(Consulta consulta)
        {
            using (MedGroupContext ctx = new MedGroupContext())
            {
                ctx.Consulta.Update(consulta);
                ctx.SaveChanges();
            }
        }
    }
}
