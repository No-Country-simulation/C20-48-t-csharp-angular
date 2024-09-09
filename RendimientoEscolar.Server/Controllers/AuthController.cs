using Microsoft.AspNetCore.Mvc;
using RendimientoEscolar.Server.Services;



namespace RendimientoEscolar.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        
        private readonly AuthenticationService _authenticationService;

        public AuthController(AuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (await _authenticationService.ValidateUserAsync(request.Username, request.Password))
            {
                return Ok("Inicio de sesión exitoso.");
            }
            return Unauthorized("Usuario o contraseña incorrectos.");
        }
        public class LoginRequest
        {
            public string Username { get; set; }
            public string Password { get; set; }
        }

        [HttpPost("Docente")]
        public async Task<IActionResult> Docente([FromBody])
        {
            
        }
        
    }

    
}

