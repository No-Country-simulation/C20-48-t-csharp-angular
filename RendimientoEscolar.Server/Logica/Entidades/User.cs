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
        public TipoUsuario tipousuario { get; set; }

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

    public enum TipoUsuario
    {
        Alumno,
        Profesor,
        Admin,
        Tutor
    }

}
