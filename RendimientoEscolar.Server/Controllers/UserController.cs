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
        private IDeleteUser _deleteUserCU;

        public UserController(IAddUser addUserUC, IDeleteUser deleteUserCU)
        {
            this.addUserUC = addUserUC;
            this._deleteUserCU = deleteUserCU;

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

        [HttpDelete("{id}")]
        [Autorize(Roles = "Admin")]
        public IActionResult DeleteUser(int id)
        {
            try
            {
                deleteUserCU.DeleteUser(id);
                return Ok();
            }
            catch (UserNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error al eliminar el usuario.");
            }
            
        }



    }
}
