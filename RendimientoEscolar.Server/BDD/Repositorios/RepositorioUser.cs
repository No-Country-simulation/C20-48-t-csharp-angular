using Microsoft.EntityFrameworkCore;
using RendimientoEscolar.Server.BDD.Context;
using RendimientoEscolar.Server.Exceptions;
using RendimientoEscolar.Server.Logica.Entidades;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;


namespace RendimientoEscolar.Server.BDD.Repositorios
{
    public class RepositorioUser : IRepositorioUser
    {

        private readonly AppDbContext _context;

        public RepositorioUser(AppDbContext context) 
        { 
            _context = new AppDbContext();
        }
        public async Task<User> GetByUsernameAsync(string username)
        {
            if (string.IsNullOrWhiteSpace(username))
            {
                throw new ArgumentException("El nombre de usuario no puede ser nulo o vacío.", nameof(username));
            }

            return await _context.Users.SingleOrDefaultAsync(u => u.Nombre == username);
        }

        public User GetById(int userId)
        {
            if (userId <= 0)
            {
                throw new ArgumentException("El ID del usuario debe ser un valor positivo.", nameof(userId));
            }

            return _context.Users.Find(userId);
        }
        public IEnumerable<User> FindAll()
        {
            return _context.Users.ToList();
        }

        public void Add(User unDato)
        {
            try
            {
                unDato.Validar();
                _context.Users.Add(unDato);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {

                throw new Exception("Ocurrio un error al agregar el usuario: " + ex.Message);
            }
        }
        public void Update(User dato)
        {
            if (dato == null)
            {
                throw new ArgumentNullException(nameof(dato), "El usuario no puede ser nulo.");
            }

            try
            {
                _context.Users.Update(dato);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Ocurrió un error al actualizar el usuario: " + ex.Message, ex);
            }
        }

        public void Delete(int userId)
        {
            try
            {
                var user = _context.Users.Find(userId);
                if (user == null)
                {
                    throw new UserNotFoundException(userId);
                }

                _context.Users.Remove(user);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception("Ocurrió un error al eliminar el usuario: " + ex.Message, ex);
            }
        }
        public User FindByID(int id)
        {
            return _context.Users.Find(id);
        }

    }
}
