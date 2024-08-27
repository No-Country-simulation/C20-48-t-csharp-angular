using System.ComponentModel.DataAnnotations;

namespace RendimientoEscolar.Server.Logica.Entidades
{
    public class User
    {

        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public TipoUsuario tipousuario { get; set; }//Ver esto
        
        public bool Activo { get; set; }

    }

    public enum TipoUsuario
    {
        Alumno,
        Profesor,
        Admin,
        Tutor
    }

}
