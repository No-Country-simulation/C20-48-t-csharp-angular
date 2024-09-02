using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RendimientoEscolar.Server.DTOs;
using RendimientoEscolar.Server.Interfaces;

namespace RendimientoEscolar.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private IAddUser addUserUC;
        private IObtenerUsuarioPorCredenciales obtenerUsuarioPorCredencialesCU;

        public UserController(IAddUser addUserUC, IObtenerUsuarioPorCredenciales obtenerUsuarioPorCredencialesCU)
        {
            this.addUserUC = addUserUC;
            this.obtenerUsuarioPorCredencialesCU = obtenerUsuarioPorCredencialesCU;
        }

        /// <summary>
        /// Registrar un usuario
        /// </summary>
        /// <param name="user">Objeto de tipo UsuarioDto</param>
        /// <returns></returns>
        [HttpPost()]
        [ProducesResponseType(typeof(UserDto), 200)]
        [ProducesResponseType(typeof(string), 400)]
        [ProducesResponseType(500)]
        public IActionResult Post([FromBody] UserDto user)
        {
            try
            {
                if (user == null) {
                    return BadRequest("Debe ingresar todos los datos");
                }

                UserDto userDto = this.addUserUC.AddUser(user);
                return Created("api/User", userDto);
            }
            catch (Exception ex)
            {
                return BadRequest("Ocurrio un error al agregar el usuario: " + ex.Message);
            }
        }

        //Login
        [HttpGet("{nombre}/{contrasenia}")]
        [ProducesResponseType(typeof(UserDto), 200)]
        [ProducesResponseType(typeof(string), 400)]
        [ProducesResponseType(500)]
        public IActionResult Get(string nombre, string contrasenia)
        {
            try
            {
                UserDto userDto = this.obtenerUsuarioPorCredencialesCU.ObtenerUsuarioPorCredenciales(nombre, contrasenia);
                if (userDto == null)
                {
                    return NotFound("Usuario no encontrado");
                }
                return Ok(userDto);
            }
            catch (Exception ex)
            {
                return BadRequest("Ocurrio un error al buscar el usuario: " + ex.Message);
            }
        }




    }
}
