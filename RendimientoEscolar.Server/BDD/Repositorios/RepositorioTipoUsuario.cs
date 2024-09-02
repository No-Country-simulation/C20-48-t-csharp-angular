using RendimientoEscolar.Server.BDD.Context;
using RendimientoEscolar.Server.Logica.Entidades;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;

namespace RendimientoEscolar.Server.BDD.Repositorios
{
    public class RepositorioTipoUsuario:IRepositorioTipoUsuario
    {

        private AppDbContext _context;


        public RepositorioTipoUsuario(AppDbContext context)
        {
            _context = new AppDbContext();
        }

        public void Add(TipoUsuario unDato)
        {
            try
            {
                unDato.Validar();//TODO
                _context.TipoUsuarios.Add(unDato);
                _context.SaveChanges();

            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<TipoUsuario> FindAll()
        {
            throw new NotImplementedException();
        }

        public TipoUsuario FindByID(int id)
        {
            throw new NotImplementedException();
        }

        public TipoUsuario FindByName(string name)
        {
            try
            {

                return _context.TipoUsuarios.Where(TipoUsuario => TipoUsuario.Nombre == name).FirstOrDefault();


            }
            catch (Exception ex)
            {

                throw new Exception("Error al buscar el tipo de usuario: " + ex);
            }
        }

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(TipoUsuario dato)
        {
            throw new NotImplementedException();
        }
    }
}
