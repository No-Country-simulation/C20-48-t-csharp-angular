using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RendimientoEscolar.Server.DTOs;
using RendimientoEscolar.Server.Interfaces;

namespace RendimientoEscolar.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoUsuarioController : ControllerBase
    {


        private IObtenerTiposUsuario obtenerTiposUsuarioUC;
        private IAddTipoUsuario addTipoUsuarioUC;

        public TipoUsuarioController(IObtenerTiposUsuario obtenerTiposUsuarioUC, IAddTipoUsuario addTipoUsuarioUC)
        {
            this.obtenerTiposUsuarioUC = obtenerTiposUsuarioUC;
            this.addTipoUsuarioUC = addTipoUsuarioUC;
        }


        [HttpGet(Name = "GetTipoUsuario")]
        [ProducesResponseType(typeof(IEnumerable<TipoUsuarioDTO>), 200)]
        [ProducesResponseType(typeof(string), 400)]
        [ProducesResponseType(500)]
        public IActionResult GetAll()
        {
            try
            {

                return Ok(this.obtenerTiposUsuarioUC.GetTiposUsuario());

            }
            catch (Exception ex)
            {

                return BadRequest("Ocurrio un error al obtener los tipos de usuario: " + ex.Message);
            }


        }

        /// <summary>
        /// Registrar un TipoUsuario
        /// </summary>
        /// <param name="tipo">Objeto de tipo TipoUsuarioDTO</param>
        /// <returns></returns>
        [HttpPost()]
        [ProducesResponseType(typeof(TipoUsuarioDTO), 200)]
        [ProducesResponseType(typeof(string), 400)]
        [ProducesResponseType(500)]
        public IActionResult Post([FromBody] TipoUsuarioDTO tipo) {

            try
            {

                if (tipo == null)
                {
                    return BadRequest("Debe ingresar todos los datos");
                }

                this.addTipoUsuarioUC.AddTipoUsuario(tipo);
                return Created("api/TipoUsuario", tipo);

            }
            catch (Exception ex)
            {

                return BadRequest("Ocurrio un error al agregar el tipo de usuario: " + ex.Message);
            }
            
        }
    }
}
