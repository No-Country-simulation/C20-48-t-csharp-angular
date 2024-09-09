
using RendimientoEscolar.Server.Logica.Entidades;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;
using System.Security.Cryptography;
using System.Text;


namespace RendimientoEscolar.Server.Services
{
    public class AuthenticationService
    {
        private readonly IRepositorioUser _userRepository;

        public AuthenticationService(IRepositorioUser userRepository)
        {
            _userRepository = userRepository;
        }
        public User ObtenerPorEmailYRole(string email, string role)
        {
            return _userRepository.ObtenerPorEmailYRole(email, role);
        }

        public bool VerifyPassword(string enteredPassword, string storedHashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(enteredPassword, storedHashedPassword);
        }

       

    }
}
