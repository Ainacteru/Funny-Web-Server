using Microsoft.AspNetCore.Mvc;
using System;

namespace MainWebServer.Controllers
{
    [ApiController]
    [Route("api")]
    public class BuzzerController : ControllerBase
    {
        private static readonly Buzzer buzzer = new(18);

        [HttpGet("buzzer/on")]
        public IActionResult TurnOn()
        {
            buzzer.Start();
            Console.WriteLine("Buzzer ON");
            return Ok("Buzzer ON");
        }

        [HttpGet("buzzer/off")]
        public IActionResult TurnOff()
        {
            buzzer.Stop();
            Console.WriteLine("Buzzer OFF");
            return Ok("Buzzer OFF");
        }
    }
}
