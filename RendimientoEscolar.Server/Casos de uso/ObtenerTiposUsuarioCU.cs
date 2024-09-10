using RendimientoEscolar.Server.DTOs;
using RendimientoEscolar.Server.Interfaces;
using RendimientoEscolar.Server.Logica.Entidades;
using RendimientoEscolar.Server.Logica.Interfaces_Repositorios;

namespace RendimientoEscolar.Server.Casos_de_uso
{
    public class ObtenerTiposUsuarioCU : IObtenerTiposUsuario
    {

        private IRepositorioTipoUsuario _repositorioTipoUsuario;

        public ObtenerTiposUsuarioCU(IRepositorioTipoUsuario repositorioTipoUsuario)
        {
            _repositorioTipoUsuario = repositorioTipoUsuario;
        }

        public IEnumerable<TipoUsuarioDTO> GetTiposUsuario()
        {
            List<TipoUsuarioDTO> tiposUsuario = new List<TipoUsuarioDTO>();

            foreach (TipoUsuario tipoUsuario in _repositorioTipoUsuario.FindAll().ToList())
            {

                tiposUsuario.Add(new TipoUsuarioDTO(tipoUsuario));
            }
            return tiposUsuario;


        }
    }
}
