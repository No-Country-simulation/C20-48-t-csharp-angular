
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

        public async Task<bool> ValidateUserAsync(string username, string password)
        {
            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password))
            {
                throw new ArgumentException("El nombre de usuario y la contraseña no pueden estar vacíos.");
            }

            var user = await _userRepository.GetByUsernameAsync(username);
            if (user == null)
            {
                return false; 
            }

            var passwordHash = ComputeSha256Hash(password);

            return user.Password == passwordHash && user.Activo;
        }

        private string ComputeSha256Hash(string rawData)
        {
            using (var sha256 = SHA256.Create())
            {
                byte[] bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(rawData));
                var builder = new StringBuilder();
                foreach (var b in bytes)
                {
                    builder.Append(b.ToString("x2"));
                }
                return builder.ToString();
            }
        }
    }
}
