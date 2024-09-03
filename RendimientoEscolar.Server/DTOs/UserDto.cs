using RendimientoEscolar.Server.Logica.Entidades;

namespace RendimientoEscolar.Server.DTOs
{
    public class UserDto
    {

        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Password { get; set; }
        public int TipoUsuarioId { get; set; }

        public bool Activo { get; set; }

        public UserDto()
        {
            
        }


        public UserDto(User u) {

            this.Nombre = u.Nombre;
            this.Id = u.Id;
            this.Activo = u.Activo;
            this.Password = u.Password;
            if(u.TipoUsuario != null)
            {
                this.TipoUsuarioId = u.TipoUsuario.TipoUsuarioId;
            }

        }
        
            
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

