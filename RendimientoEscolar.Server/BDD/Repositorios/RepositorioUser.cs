using RendimientoEscolar.Server.BDD.Context;
using RendimientoEscolar.Server.Logica.Entidades;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;

namespace RendimientoEscolar.Server.BDD.Repositorios
{
    public class RepositorioUser : IRepositorioUser
    {

        private AppDbContext _context;

        public RepositorioUser(AppDbContext context)
        {
            _context = context;
        }
       
        public User ObtenerPorEmail(string email)
        {
            return _context.Users.SingleOrDefault(u => u.Email == email);
        }
        public User ObtenerPorEmailYRole(string email, string role)
        {
            return _context.Users.SingleOrDefault(u => u.Email == email && u.Role == role);
        }

        public List<User> GetAll()
        {
            return _context.Users.ToList();
        }

        public void Delete(User user)
        {
            _context.Users.Remove(user);
            _context.SaveChanges();
        }

    }
}

