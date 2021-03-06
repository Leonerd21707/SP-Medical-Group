﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SP.Medical.Group.Manha.Domains;
using SP.Medical.Group.Manha.Interfaces;
using SP.Medical.Group.Manha.Repositories;
using SP.Medical.Group.Manha.ViewModel;

namespace SP.Medical.Group.Manha.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuario UsuarioRepository { get; set; }

        public LoginController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        //Loga um usuario ja cadastrado 
        [HttpPost]
        public IActionResult Post(LoginViewModel login)
        {
            try
            {
                //busca o usuario por email e senha
                Usuario User = UsuarioRepository.BuscarPorEmailSenha(login.Email, login.Senha);

                if (User == null)
                {
                    return NotFound(new
                    {
                        mensagem = "Usuário não encontrado"
                    });
                }

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, User.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, User.Id.ToString()),
                    new Claim(ClaimTypes.Role, User.IdTipoNavigation.Nome.ToString()),
                    new Claim("Role", User.IdTipoNavigation.Nome.ToString())
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("Medical-Group-chave"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "MedGroup.WebApi",
                    audience: "MedGroup.WebApi",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch(Exception xx)
            {
                return BadRequest(xx.Message);
            }
        }
    }
}