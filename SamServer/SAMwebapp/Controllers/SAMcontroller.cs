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
        private static bool initialized = false;
        private static readonly Buzzer buzzer = new(18);

        private static readonly HttpClient client = new HttpClient();
        private static string[] otherPis = {"192.168.0.121:5096"};


        public SAMController()
        {
            if (!initialized)
            {
                initialized = true;

                //turn ips into links
                for (int i = 0; i < otherPis.Length; i++)
                {
                    otherPis[i] = $"http://{otherPis[i]}/api/buzzer";
                    Console.WriteLine($"trying to connect to {otherPis[i]}");
                }
            }
        }

        [HttpGet("on")]
        public async Task<IActionResult> TurnOn()
        {
            buzzer.Start();
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
            buzzer.Stop();
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
