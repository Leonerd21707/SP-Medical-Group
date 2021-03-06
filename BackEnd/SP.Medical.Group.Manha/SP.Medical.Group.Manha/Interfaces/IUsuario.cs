﻿using SP.Medical.Group.Manha.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP.Medical.Group.Manha.Interfaces
{
    interface IUsuario
    {
        //Cadastra um novo usuario
        void Cadastrar(Usuario User);

        Usuario BuscarPorEmailSenha(string email, string senha);
    }
}
