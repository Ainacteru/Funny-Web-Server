using Microsoft.AspNetCore.Mvc;
using System;
using System.Device.Gpio;
using System.Threading;

namespace SAMwebapp.Controllers
{
    [ApiController]
    [Route("api/buzzer")]
    public class SAMController : ControllerBase
    {
        private static readonly GpioController controller = new();
        private const int pin = 18;
        private static bool initialized = false;

        private static readonly HttpClient client = new HttpClient();
        private static string otherPis[] = {"192.168.0.121"};


        public SAMController()
        {
            if (!initialized)
            {
                Console.WriteLine("BuzzerController initialized");
                controller.OpenPin(pin, PinMode.Output);
                controller.Write(pin, PinValue.Low); // Make sure it's off initially
                initialized = true;

                //turn ips into links
                for (int i = 0; i < otherPis.Length(); i++)
                {
                    otherPis[i] = $"https://{otherPis[i]}/api/buzzer";
                }
            }
        }

        [HttpGet("on")]
        public IActionResult TurnOn()
        {
            controller.Write(pin, PinValue.High); // Turn buzzer ON
            Console.WriteLine("buzzer ON");

            foreach (var ip in otherPis)
            {
                buzzOtherPis(ip);
            }

            return Ok("buzzer ON");
        }

        [HttpGet("off")]
        public IActionResult TurnOff()
        {
            controller.Write(pin, PinValue.Low); // Turn buzzer ON
            Console.WriteLine("buzzer OFF");

            foreach (var ip in otherPis)
            {
                buzzOtherPis(ip);
            }

            return Ok("buzzer OFF");
        }

        //buzzing other people
        public void buzzOtherPis(string piIp, boolean turnOn) {
            
            Console.WriteLine($"Sending request to {piIp}...")
            var response;
            try
            {
                if (turnOn) {
                    response = await client.GetAsync($"{piIp}/on");
                } else {
                    response = await client.GetAsync($"{piIp}/on");
                }

                var body = await response.Content.ReadAsStringAsync();

                if (response.IsSuccessStatusCode)

                    Console.WriteLine($"Remote GPIO response: {body}");
                else
                    Console.WriteLine($"Remote error: {body}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occured while trying to send to this ip: {piIp} the error message is: {ex}");
            }
        }
    }

}
