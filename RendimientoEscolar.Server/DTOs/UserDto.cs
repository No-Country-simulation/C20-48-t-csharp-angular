namespace RendimientoEscolar.Server.DTOs
{
    public class UserDto
    {

        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Password { get; set; }
        public TipoUsuario tipousuario { get; set; }

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
