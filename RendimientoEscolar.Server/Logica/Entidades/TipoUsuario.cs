using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace RendimientoEscolar.Server.Logica.Entidades
{
    [Index(nameof(Nombre), IsUnique = true)]
    public class TipoUsuario
    {
        public int TipoUsuarioId { get; set; }
        public string Nombre { get; set; }

        public TipoUsuario()
        {
        }

        public TipoUsuario(string nombre)
        {
            Nombre = nombre;
        }

        public void Validar()
        {
            if (string.IsNullOrWhiteSpace(Nombre))
            {
                throw new Exception("El nombre del tipo de usuario no puede estar vacio");
            }

        }
    }
}
