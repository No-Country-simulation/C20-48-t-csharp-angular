using Microsoft.EntityFrameworkCore;
using RendimientoEscolar.Server.BDD.Context;
using RendimientoEscolar.Server.BDD.Repositorios;
using RendimientoEscolar.Server.Casos_de_uso;
using RendimientoEscolar.Server.Interfaces;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;
using RendimientoEscolar.Server.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CadenaSQL"))
);


//inicializacion de repositorios

builder.Services.AddScoped<IRepositorioUser, RepositorioUser>();


//inicializacion de casos de uso
builder.Services.AddScoped<AuthenticationService>();
builder.Services.AddScoped<IAddUser, AddUserCU>();
builder.Services.AddScoped<IDeleteUser, DeleteUserCU>();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();



app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
