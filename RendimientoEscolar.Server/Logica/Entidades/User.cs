namespace RendimientoEscolar.Server.Logica.Entidades
{
    public class User
    {

        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Password { get; set; }
        public string TipoUsuario { get; set; }//Ver esto
        public bool Activo { get; set; }

    }
}
