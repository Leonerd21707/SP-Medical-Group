using SP.Medical.Group.Manha.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP.Medical.Group.Manha.Interfaces
{
    interface IConsultas
    {
        List<Consulta> Consultas(int IdBuscado);

        List<Consulta> ConsultaMedico(int IdBuscado);

        List<Consulta> ConsultaPaciente(int IdBuscado);

        //Cadastra uma nova consulta
        void Cadastrar(Consulta consulta);

        //Atualiza as informações de uma consulta existente
        void Update(Consulta consulta);
    }
}
