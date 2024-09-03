using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RendimientoEscolar.Server.Logica.Entidades
{
    public class User
    {

        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Password { get; set; }
        [ForeignKey(nameof(TipoUsuario))] public int? TipoUsuarioId { get; set; }
        public TipoUsuario? TipoUsuario { get; set; }

        public bool Activo { get; set; }


        public void Validar()
        {
            ValidarNombre();
            ValidarPassword();
        }


        public void ValidarNombre() {
            if (string.IsNullOrEmpty(Nombre))
                throw new Exception("El nombre no puede ser vacio");
        }

        public void ValidarPassword()
        {
            if (string.IsNullOrEmpty(Password))
                throw new Exception("El password no puede ser vacio");
        }


    }

    /*
    public enum TipoUsuario
    {
        Alumno,
        Profesor,
        Admin,
        Tutor
    }
    */

}
