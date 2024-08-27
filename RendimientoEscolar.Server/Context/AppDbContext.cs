using Microsoft.EntityFrameworkCore;
using RendimientoEscolar.Server.Logica.Entidades;

namespace RendimientoEscolar.Server.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; } // Nota: Convención de nombre en PascalCase


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            string cadenaConexion =
                @"SERVER=localhost;
                DATABASE=RendimientoEscolar-v1;
                INTEGRATED SECURITY=TRUE;
                ENCRYPT=False";
            optionsBuilder.UseSqlServer(cadenaConexion)
            .EnableDetailedErrors();
        }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configuración de la entidad User
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id); // Establece la clave primaria
                entity.Property(e => e.Id).UseIdentityColumn().ValueGeneratedOnAdd(); // Configura la generación automática de IDs
                entity.Property(e => e.Nombre).HasMaxLength(50); // Configura la longitud máxima de la propiedad Nombre
                entity.Property(e => e.Password).HasMaxLength(50); // Configura la longitud máxima de la propiedad Password
                entity.ToTable("Usuario"); // Configura el nombre de la tabla en la base de datos
                entity.HasData(
                    new User { Id= 1, Nombre="User1",Password="Pass",Activo=true}
                    );
            });


            
        }
    }
}