using RendimientoEscolar.Server.BDD.Context;
using RendimientoEscolar.Server.Logica.Entidades;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;

namespace RendimientoEscolar.Server.BDD.Repositorios
{
    public class RepositorioUser : IRepositorioUser
    {

        private AppDbContext _context;

        public RepositorioUser(AppDbContext context) { 
            _context = new AppDbContext();
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


        public User FindUserByCredentials(string name, string password)
        {
            try
            {
                return _context.Users.Where(u => u.Nombre == name && u.Password == password).FirstOrDefault();
            }
            catch (Exception ex)
            {

                throw new Exception("Error al buscar el usuario: " + ex);
            }

        }


        public IEnumerable<User> FindAll()
        {
            throw new NotImplementedException();
        }

        public User FindByID(int id)
        {
            throw new NotImplementedException();
        }

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(User dato)
        {
            throw new NotImplementedException();
        }
    }
}
