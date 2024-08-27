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

        public UserController(IAddUser addUserUC)
        {
            this.addUserUC = addUserUC;
        }


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

      

    }
}
