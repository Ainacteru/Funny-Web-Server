using Microsoft.AspNetCore.Mvc;
using System;

namespace MainWebServer.Controllers
{
    [ApiController]
    [Route("api/active")]
    public class ExternalPiController : ControllerBase
    {
        [HttpGet]
        public IActionResult isAlive() {
            return Ok("Is Alive");
        }
    }

}
