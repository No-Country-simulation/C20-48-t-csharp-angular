
using Microsoft.AspNetCore.Mvc;
using RendimientoEscolar.Server.DTOs;
using RendimientoEscolar.Server.Services;




namespace RendimientoEscolar.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    
    private readonly AuthenticationService _authenticationService;
    private readonly UserService _userService;

    public AuthController(UserService userService,AuthenticationService authenticationService)
    {
       
        _authenticationService = authenticationService;
        _userService = userService;
    }
   
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] UserDto loginDto)
    {
        if (loginDto == null || string.IsNullOrWhiteSpace(loginDto.Email) ||
                string.IsNullOrWhiteSpace(loginDto.Password) || string.IsNullOrWhiteSpace(loginDto.Role))
        {
            return BadRequest("Datos de inicio de sesión no válidos.");
        }
        var user = _authenticationService.ObtenerPorEmailYRole(loginDto.Email, loginDto.Role);

        if (user == null)
        {
            return Unauthorized("Correo electrónico o rol inválidos.");
        }

        bool isPasswordValid = _authenticationService.VerifyPassword(loginDto.Password, user.Password);

        if (!isPasswordValid)
        {
            return Unauthorized("Contraseña inválida.");
        }

        var userDto = new UserDto
        {
            Email = user.Email,
            Role = user.Role
        };

        return Ok(new { mensaje = "¡Inicio de sesión exitoso!", usuario = userDto });

    }
}



