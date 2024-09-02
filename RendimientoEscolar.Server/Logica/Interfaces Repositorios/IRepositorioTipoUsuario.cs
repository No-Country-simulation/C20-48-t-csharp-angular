using Microsoft.EntityFrameworkCore;
using RendimientoEscolar.Server.Logica.Entidades;

namespace RendimientoEscolar.Server.Logica.Interfaces_Repositorios
{
    public interface IRepositorioTipoUsuario : IRepositorio<TipoUsuario>
    {

        public TipoUsuario FindByName(string name);
   

    }
}
