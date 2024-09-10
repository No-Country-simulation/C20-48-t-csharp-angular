using RendimientoEscolar.Server.DTOs;
using RendimientoEscolar.Server.Interfaces;
using RendimientoEscolar.Server.Logica.Entidades;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;

namespace RendimientoEscolar.Server.Casos_de_uso
{
    public class ObtenerUsuarioPorCredencialesCU : IObtenerUsuarioPorCredenciales
    {

        private IRepositorioUser _repositorioUser;

        public ObtenerUsuarioPorCredencialesCU(IRepositorioUser repositorioUser)
        {
            _repositorioUser = repositorioUser;
        }
        public UserDto ObtenerUsuarioPorCredenciales(string nombre, string contrasenia)
        {
            User user = this._repositorioUser.FindUserByCredentials(nombre, contrasenia);
            if (user == null)
            {
                return null;
            }
            else
            {
                UserDto userDto = new UserDto(user);
                return userDto;

            }
        }
    }
}
