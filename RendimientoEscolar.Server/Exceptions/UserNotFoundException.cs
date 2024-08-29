namespace RendimientoEscolar.Server.Exceptions
{

    public class UserNotFoundException : Exception
    {
        public int UserId { get; }

        public UserNotFoundException(int userId)
            : base($"Usuario con ID {userId} no encontrado.")
        {
            UserId = userId;
        }
        public UserNotFoundException(string message): base(message)
        {
        }

        public UserNotFoundException(string message, Exception inner): base(message, inner)
        {
        }
    }


}

