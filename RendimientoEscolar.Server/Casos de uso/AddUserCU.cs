using RendimientoEscolar.Server.DTOs;
using RendimientoEscolar.Server.Interfaces;
using RendimientoEscolar.Server.Logica.Entidades;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;

namespace RendimientoEscolar.Server.Casos_de_uso
{
    public class AddUserCU : IAddUser
    {

        private IRepositorioUser _repositorioUser;

        public AddUserCU(IRepositorioUser repositorioUser)
        {
            _repositorioUser = repositorioUser;
        }
        public UserDto AddUser(UserDto user)
        {
            User aux = new User();
            aux.Nombre = user.Nombre;
            aux.tipousuario = (Logica.Entidades.TipoUsuario)user.tipousuario;
            aux.Password = user.Password;
            aux.Activo = true;
            _repositorioUser.Add(aux);
            user.Id = aux.Id;
            user.Activo = aux.Activo;
            return user;

        }
    }
}
