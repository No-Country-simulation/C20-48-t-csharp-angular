using RendimientoEscolar.Server.BDD.Context;
using RendimientoEscolar.Server.DTOs;
using RendimientoEscolar.Server.Logica.Entidades;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;


namespace RendimientoEscolar.Server.Services;

public class UserService
{
    private readonly AppDbContext _context;
    private readonly IRepositorioUser _userRepository;

    public UserService(AppDbContext context,IRepositorioUser userRepository)
    {
        _context = context;
        _userRepository = userRepository;
    }
    public void CreateUser(UserDto userDto)
    {
        var hashedPassword = BCrypt.Net.BCrypt.HashPassword(userDto.Password);

        var user = new User
        {
            Email = userDto.Email,
            Password = hashedPassword,
            Role = userDto.Role
        };

        _context.Users.Add(user);
        _context.SaveChanges();
    }

    public List<UserDto> GetAllUsers()
    {
        return _userRepository.GetAll().Select(u => new UserDto
        {
            Email = u.Email,
            Role = u.Role
        }).ToList();
    }

    public void UpdateUser(int userId, UserDto userDto)
    {
        var user = _context.Users.SingleOrDefault(u => u.Id == userId);

        if (user != null)
        {
            user.Email = userDto.Email;
            user.Role = userDto.Role;

            if (!string.IsNullOrWhiteSpace(userDto.Password))
            {
                user.Password = BCrypt.Net.BCrypt.HashPassword(userDto.Password);
            }

            _context.Users.Update(user);
            _context.SaveChanges();
        }
    }

    public bool DeleteUser(string email)
    {
        var user = _userRepository.ObtenerPorEmail(email);
        if (user == null) return false;

        _userRepository.Delete(user);
        return true;
    }
}


