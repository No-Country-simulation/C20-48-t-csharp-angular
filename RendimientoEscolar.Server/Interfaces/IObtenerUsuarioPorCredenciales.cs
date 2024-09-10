using RendimientoEscolar.Server.DTOs;

namespace RendimientoEscolar.Server.Interfaces
{
    public interface IObtenerUsuarioPorCredenciales
    {

        public UserDto ObtenerUsuarioPorCredenciales(string nombre, string contrasenia);
    }
}
