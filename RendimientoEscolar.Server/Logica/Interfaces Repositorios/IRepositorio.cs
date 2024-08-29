namespace RendimientoEscolar.Server.Logica.Interfaces_Repositorios
{
    public interface IRepositorio<T>
    {

        IEnumerable<T> FindAll();
        T FindByID(int UserId);
        void Add(T unDato);
        void Update(T dato);
        void Delete(int userId);
    }
}
