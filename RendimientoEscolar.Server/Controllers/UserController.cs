using Microsoft.AspNetCore.Mvc;
using RendimientoEscolar.Server.DTOs;
using RendimientoEscolar.Server.Services;

namespace RendimientoEscolar.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly UserService _userService;
        private readonly AuthenticationService _authenticationService;

        public UserController(UserService userService, AuthenticationService authenticationService)
        {
            _userService = userService;
            _authenticationService = authenticationService;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] UserDto userDto)
        {
            if (userDto == null || string.IsNullOrWhiteSpace(userDto.Email) ||
                string.IsNullOrWhiteSpace(userDto.Password) || string.IsNullOrWhiteSpace(userDto.Role))
            {
                return BadRequest("Datos del usuario no válidos.");
            }

            _userService.CreateUser(userDto);
            return Ok("Usuario registrado exitosamente.");
        }

        [HttpGet("list")]
        public IActionResult GetAllUsers()
        {
            var users = _userService.GetAllUsers();
            return Ok(users);
        }

        [HttpPut("update/{userId}")]
        public IActionResult UpdateUser(int userId, [FromBody] UserDto userDto)
        {
            if (userDto == null || string.IsNullOrWhiteSpace(userDto.Email) ||
                string.IsNullOrWhiteSpace(userDto.Password) || string.IsNullOrWhiteSpace(userDto.Role))
            {
                return BadRequest("Datos del usuario no válidos.");
            }

            _userService.UpdateUser(userId, userDto);
            return Ok("Usuario actualizado exitosamente.");
        }

        [HttpDelete("delete/{email}")]
        public IActionResult DeleteUser(string email)
        {
            bool result = _userService.DeleteUser(email);
            if (!result)
            {
                return NotFound("Usuario no encontrado.");
            }

            return Ok("Usuario eliminado exitosamente.");
        }
    }
}
