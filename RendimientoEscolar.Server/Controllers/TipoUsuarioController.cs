using Microsoft.AspNetCore.Mvc;
using RendimientoEscolar.Server.DTOs;
using RendimientoEscolar.Server.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RendimientoEscolar.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TipoUsuarioController : ControllerBase
    {

        private IAddTipoUsuario addTipoUC;
        private IObtenerTiposUsuario obtenerTiposUsuarioUC;


        public TipoUsuarioController(IAddTipoUsuario addTipoUC, IObtenerTiposUsuario obtenerTiposUsuarioUC)
        {
            this.addTipoUC = addTipoUC;
            this.obtenerTiposUsuarioUC = obtenerTiposUsuarioUC;
        }

        /// <summary>
        /// Obtiene todas las amenazas
        /// </summary>
        /// <returns></returns>
        [HttpGet(Name = "GetTipoUsuario")]
        [ProducesResponseType(typeof(IEnumerable<TipoUsuarioDTO>), 200)]
        [ProducesResponseType(typeof(string), 400)]
        [ProducesResponseType(500)]

        [HttpGet]
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

        /*
        // GET api/<TipoUsuario>/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {

            try
            {

            }
            catch (Exception)
            {

                throw;
            }
         
        }
        */

        /// <summary>
        /// Registrar un usuario
        /// </summary>
        /// <param name="tipoUsuario">Objeto de tipo TipoUsuarioDTO</param>
        /// <returns></returns>
        [HttpPost()]
        [ProducesResponseType(typeof(UserDto), 200)]
        [ProducesResponseType(typeof(string), 400)]
        [ProducesResponseType(500)]
        [HttpPost]
        public IActionResult Post([FromBody] TipoUsuarioDTO tipoUsuario)
        {

            try
            {
                this.addTipoUC.AddTipoUsuario(tipoUsuario);
                return Ok("Se registro correctamente el tipo de usuario");

            }
            catch (Exception ex)
            {
                return BadRequest("Ocurrio un error al registrar el tipo de usuario: " + ex.Message);

            }
        }

    }
}
