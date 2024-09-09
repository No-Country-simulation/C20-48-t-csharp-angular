using Microsoft.EntityFrameworkCore;
using RendimientoEscolar.Server.Logica.Entidades;

namespace RendimientoEscolar.Server.BDD.Context;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    
}