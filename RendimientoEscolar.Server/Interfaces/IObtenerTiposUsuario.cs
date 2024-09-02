using RendimientoEscolar.Server.DTOs;

namespace RendimientoEscolar.Server.Interfaces
{
    public interface IObtenerTiposUsuario
    {

        public IEnumerable<TipoUsuarioDTO> GetTiposUsuario();
    }
}
