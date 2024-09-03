using Microsoft.EntityFrameworkCore;
using RendimientoEscolar.Server.Logica.Entidades;

namespace RendimientoEscolar.Server.BDD.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext()
        {
        }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<TipoUsuario> TipoUsuarios { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            /*
            string cadenaConexion =
                @"SERVER=localhost;
                DATABASE=RendimientoEscolar-v1;
                INTEGRATED SECURITY=TRUE;
                ENCRYPT=False";
            optionsBuilder.UseSqlServer(cadenaConexion)
            .EnableDetailedErrors();
            */


            var configuration = new ConfigurationBuilder()
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddJsonFile("appsettings.json")
        .Build();

            var cadenaConexion = configuration.GetConnectionString("CadenaSQL");
            optionsBuilder.UseSqlServer(cadenaConexion)
                          .EnableDetailedErrors();

        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configuración de la entidad User
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Nombre).HasMaxLength(50); // Configura la longitud máxima de la propiedad Nombre
                entity.Property(e => e.Password).HasMaxLength(50); // Configura la longitud máxima de la propiedad Password
                entity.ToTable("Usuario"); // Configura el nombre de la tabla en la base de datos
                entity.HasData(
                    new User { Id = 1, Nombre = "User1", Password = "Pass", Activo = true, TipoUsuario = null }
                    );
            });



        }
    }
}