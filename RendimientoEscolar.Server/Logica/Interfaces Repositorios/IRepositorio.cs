namespace RendimientoEscolar.Server.Logica.Interfaces_Repositorios
{
    public interface IRepositorio<T>
    {

        IEnumerable<T> FindAll();
        T FindByID(int id);
        void Add(T unDato);
        void Remove(int id);
        void Update(T dato);
    }
}
