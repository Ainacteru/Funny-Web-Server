using Microsoft.AspNetCore.Mvc;
using System;
using System.Device.Gpio;
using System.Threading;

namespace MainWebServer.Controllers
{
    [ApiController]
    [Route("api/buzzer")]
    public class BuzzerController : ControllerBase
    {
        private static readonly GpioController controller = new();
        private const int pin = 18;
        private static bool initialized = false;

        public BuzzerController()   
        {
            if (!initialized)
            {
                Console.WriteLine("BuzzerController initialized");
                controller.OpenPin(pin, PinMode.Output);
                controller.Write(pin, PinValue.Low); // Make sure it's off initially
                initialized = true;
            }
        }

        [HttpGet]
        public IActionResult Get(){
            Console.WriteLine("hi");
            return Ok("hi");
        }

        [HttpGet("on")]
        public IActionResult TurnOn()
        {
            controller.Write(pin, PinValue.High); // Turn buzzer ON
            Console.WriteLine("buzzer ON");
            return Ok("buzzer ON");
        }

        [HttpGet("off")]
        public IActionResult TurnOff()
        {
            controller.Write(pin, PinValue.Low); // Turn buzzer ON
            Console.WriteLine("buzzer OFF");
            return Ok("buzzer OFF");
        }
    }

}
