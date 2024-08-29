using RendimientoEscolar.Server.Exceptions;
using RendimientoEscolar.Server.Interfaces;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;

public class DeleteUserCU : IDeleteUser
{
    private readonly IRepositorioUser _repositorioUser;

    public DeleteUserCU(IRepositorioUser repositorioUser)
    {
        _repositorioUser = repositorioUser;
    }

    public void DeleteUser(int userId)
    {
        var user = _repositorioUser.GetById(userId);

        if (user == null)
        {
            throw new UserNotFoundException($"Usuario con ID {userId} no encontrado.");
        }

        user.Activo = false;
        _repositorioUser.Update(user);
    }
}