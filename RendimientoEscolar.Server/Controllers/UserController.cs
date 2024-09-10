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
        /// Registra un nuevo usuario en el sistema.
        /// </summary>
        /// <param name="user">Objeto de tipo <see cref="UserDto"/> que contiene los datos del usuario a registrar.</param>
        /// <returns>Un objeto <see cref="UserDto"/> con la información del usuario registrado.</returns>
        /// <response code="201">Usuario registrado exitosamente.</response>
        /// <response code="400">Solicitud incorrecta. Puede deberse a datos incompletos o inválidos.</response>
        /// <response code="500">Error interno del servidor al procesar la solicitud.</response>
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

        /// <summary>
        /// Obtiene un usuario basado en sus credenciales.
        /// </summary>
        /// <param name="nombre">Nombre de usuario.</param>
        /// <param name="contrasenia">Contraseña del usuario.</param>
        /// <returns>Un objeto <see cref="UserDto"/> con la información del usuario si las credenciales son válidas.</returns>
        /// <response code="200">Usuario encontrado y retornado exitosamente.</response>
        /// <response code="400">Solicitud incorrecta. Puede deberse a datos inválidos.</response>
        /// <response code="404">Usuario no encontrado con las credenciales proporcionadas.</response>
        /// <response code="500">Error interno del servidor al procesar la solicitud.</response>
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
