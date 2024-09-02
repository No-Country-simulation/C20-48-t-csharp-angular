﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RendimientoEscolar.Server.BDD.Context;

#nullable disable

namespace RendimientoEscolar.Server.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("RendimientoEscolar.Server.Logica.Entidades.TipoUsuario", b =>
                {
                    b.Property<int>("TipoUsuarioId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TipoUsuarioId"));

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("TipoUsuarioId");

                    b.HasIndex("Nombre")
                        .IsUnique();

                    b.ToTable("TipoUsuarios");
                });

            modelBuilder.Entity("RendimientoEscolar.Server.Logica.Entidades.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("Activo")
                        .HasColumnType("bit");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<int?>("TipoUsuarioId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("TipoUsuarioId");

                    b.ToTable("Usuario", (string)null);

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Activo = true,
                            Nombre = "User1",
                            Password = "Pass"
                        });
                });

            modelBuilder.Entity("RendimientoEscolar.Server.Logica.Entidades.User", b =>
                {
                    b.HasOne("RendimientoEscolar.Server.Logica.Entidades.TipoUsuario", "TipoUsuario")
                        .WithMany()
                        .HasForeignKey("TipoUsuarioId");

                    b.Navigation("TipoUsuario");
                });
#pragma warning restore 612, 618
        }
    }
}