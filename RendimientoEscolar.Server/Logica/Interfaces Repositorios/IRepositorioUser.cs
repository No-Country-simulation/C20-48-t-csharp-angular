using RendimientoEscolar.Server.Logica.Entidades;

namespace RendimientoEscolar.Server.Logica.Interfaces_Repositorios
{
    public interface IRepositorioUser : IRepositorio<User>
    {

        public User FindUserByCredentials(string name, string password);
    }
}
