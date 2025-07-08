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
        private static string[] otherPis = {"192.168.0.121"};


        public SAMController()
        {
            if (!initialized)
            {
                Console.WriteLine("BuzzerController initialized");
                controller.OpenPin(pin, PinMode.Output);
                controller.Write(pin, PinValue.Low); // Make sure it's off initially
                initialized = true;

                //turn ips into links
                for (int i = 0; i < otherPis.Length; i++)
                {
                    otherPis[i] = $"http://{otherPis[i]}:5096/api/buzzer";
                    Console.WriteLine($"trying to connect {otherPis[i]}")
                }
            }
        }

        [HttpGet("on")]
        public async Task<IActionResult> TurnOn()
        {
            controller.Write(pin, PinValue.High);
            Console.WriteLine("buzzer ON");

            foreach (var ip in otherPis)
            {
                await buzzOtherPis(ip, true);
            }

            return Ok("buzzer ON");
        }

        [HttpGet("off")]
        public async Task<IActionResult> TurnOff()
        {
            controller.Write(pin, PinValue.Low);
            Console.WriteLine("buzzer OFF");

            foreach (var ip in otherPis)
            {
                await buzzOtherPis(ip, false);
            }

            return Ok("buzzer OFF");
        }


        public async Task buzzOtherPis(string piIp, bool turnOn)
        {
            Console.WriteLine($"Sending request to {piIp}...");

            try
            {
                HttpResponseMessage response;
                if (turnOn)
                {
                    response = await client.GetAsync($"{piIp}/on");
                }
                else
                {
                    response = await client.GetAsync($"{piIp}/off");
                }

                var body = await response.Content.ReadAsStringAsync();

                if (response.IsSuccessStatusCode)
                    Console.WriteLine($"Remote GPIO response: {body}");
                else
                    Console.WriteLine($"Remote error: {body}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while trying to send to {piIp}: {ex}");
            }
        }
    }

}
