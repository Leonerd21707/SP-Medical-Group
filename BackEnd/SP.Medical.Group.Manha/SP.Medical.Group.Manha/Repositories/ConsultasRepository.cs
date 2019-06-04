using Microsoft.EntityFrameworkCore;
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
                //ctx.Consulta.Include(f => f.IdProntuarioNavigation).Include(m => m.IdMedicoNavigation).Include(s => s.IdStatusNavigation);
                ctx.SaveChanges();
            } 
        }

        //Lista as consultas do medico
        public List<Consulta> ConsultaMedico(int IdMedico)
        {           
                using (MedGroupContext ctx = new MedGroupContext())
                {
                    return ctx.Consulta.Where(c => c.IdMedicosNavigation.Id == IdMedico).Include(c => c.IdMedicosNavigation).Include(c => c.IdProntuariosNavigation).Include(s => s.IdStatusNavigation).ToList();
                }
        }

        //Lista as consultas do paciente
        public List<Consulta> ConsultaPaciente(int IdBuscado)
        {
            using (MedGroupContext ctx = new MedGroupContext())
            {
                return ctx.Consulta.Where(c => c.IdProntuariosNavigation.Id == IdBuscado).ToList();
            }
        }

        public List<Consulta> Consultas(int IdBuscado)
        {
                using (MedGroupContext ctx = new MedGroupContext())
                {
                //return ctx.Consulta.ToList();
                return ctx.Consulta.Include(t => t.IdProntuariosNavigation).Include(m => m.IdMedicosNavigation).Include(s => s.IdStatusNavigation).ToList();
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
