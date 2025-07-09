using Microsoft.AspNetCore.Mvc;
using System;
using System.Device.Gpio;
using System.Threading;

namespace AGMserver.Controllers
{
    [ApiController]
    [Route("api/buzzer")]
    public class AGMController : ControllerBase
    {
        private static readonly Buzzer buzzer = new(18);
        // public AGMController()
        // {
        //     if (!initialized)
        //     {
        //         Console.WriteLine("BuzzerController initialized");
        //         controller.OpenPin(pin, PinMode.Output);
        //         controller.Write(pin, PinValue.Low); // Make sure it's off initially
        //         initialized = true;
        //     }
        // }

        [HttpGet("on")]
        public IActionResult TurnOn()
        {
            buzzer.Start();
            Console.WriteLine("buzzer ON");
            return Ok("buzzer ON");
        }

        [HttpGet("off")]
        public IActionResult TurnOff()
        {
            buzzer.Stop();
            Console.WriteLine("buzzer OFF");
            return Ok("buzzer OFF");
        }
    }

}
