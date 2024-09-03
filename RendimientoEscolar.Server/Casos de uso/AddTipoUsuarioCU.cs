using RendimientoEscolar.Server.DTOs;
using RendimientoEscolar.Server.Interfaces;
using RendimientoEscolar.Server.Logica.Entidades;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;

namespace RendimientoEscolar.Server.Casos_de_uso
{
    public class AddTipoUsuarioCU:IAddTipoUsuario
    {

        private IRepositorioTipoUsuario _repositorioTipoUsuario;

        public AddTipoUsuarioCU(IRepositorioTipoUsuario repositorioTipoUsuario)
        {
            _repositorioTipoUsuario = repositorioTipoUsuario;
        }

        public void AddTipoUsuario(TipoUsuarioDTO tipoUsuario)
        {
            TipoUsuario aux = new TipoUsuario();
            aux.Nombre = tipoUsuario.Nombre;
            _repositorioTipoUsuario.Add(aux);
            tipoUsuario.TipoUsuarioId = aux.TipoUsuarioId;
        }
    }
}
