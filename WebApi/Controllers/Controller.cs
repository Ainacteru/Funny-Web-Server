using Microsoft.AspNetCore.Mvc;
using System;
using System.Device.Gpio;
using System.Threading;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/led")]
    public class LedController : ControllerBase
    {
        private static readonly GpioController controller = new();
        private const int pin = 18;
        private static bool initialized = false;

        public LedController()
        {
            if (!initialized)
            {
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

        [HttpPost("on")]
        public IActionResult TurnOn()
        {
            controller.Write(pin, PinValue.High); // Turn LED ON
            Console.WriteLine("LED ON");
            return Ok("LED ON");
        }

        [HttpPost("off")]
        public IActionResult TurnOff()
        {
            controller.Write(pin, PinValue.Low); // Turn LED ON
            Console.WriteLine("LED OFF");
            return Ok("LED OFF");
        }
    }

}
