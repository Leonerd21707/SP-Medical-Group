﻿using SP.Medical.Group.Manha.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SP.Medical.Group.Manha.Interfaces
{
    interface ITipoUsuario
    {
        List<TipoUsuario> ListarTipoUsuario(int idBuscado);
    }
}
