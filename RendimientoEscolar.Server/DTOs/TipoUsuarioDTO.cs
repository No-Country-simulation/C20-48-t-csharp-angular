using RendimientoEscolar.Server.Controllers;
using RendimientoEscolar.Server.Logica.Entidades;

namespace RendimientoEscolar.Server.DTOs
{
    public class TipoUsuarioDTO
    {
        public int TipoUsuarioId { get; set; }
        public string Nombre { get; set; }

        public TipoUsuarioDTO()
        {
        }

        public TipoUsuarioDTO(TipoUsuario T)
        {
            TipoUsuarioId = T.TipoUsuarioId;
            Nombre = T.Nombre;

        }
    }
}
