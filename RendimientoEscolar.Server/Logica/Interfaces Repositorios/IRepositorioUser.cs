using RendimientoEscolar.Server.Logica.Entidades;

namespace RendimientoEscolar.Server.Logica.Interfaces_Repositorios
{
    public interface IRepositorioUser : IRepositorio<User>
    {
        User GetById(int id);
        Task<User> GetByUsernameAsync(string username);

        
    }
}
