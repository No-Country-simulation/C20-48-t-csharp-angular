using RendimientoEscolar.Server.Logica.Entidades;

namespace RendimientoEscolar.Server.Logica.Interfaces_Repositorios;

public interface IRepositorioUser 
{
    User ObtenerPorEmail(string email);
    User ObtenerPorEmailYRole(string email, string role);
    List<User> GetAll();
    void Delete(User user);
}