using Microsoft.AspNetCore.Mvc;
using System;

namespace funnywebserver.Controllers
{
    [ApiController]
    [Route("api/remote")]
    public class ExternalPiController : ControllerBase
    {
        private static readonly HttpClient client = new HttpClient();
        private static readonly string remotePiUrl = "http://78.208.23.22/api/buzzer"; // Change IP for Pi B
        
        [HttpPost("{state}")]
        public async Task<IActionResult> ControlRemoteGpio(string state)
        {
            if (state != "on" && state != "off")
                return BadRequest("Invalid state. Use 'on' or 'off'.");

            try
            {
                var response = await client.PostAsync($"{remotePiUrl}/{state}", null);
                var body = await response.Content.ReadAsStringAsync();

                if (response.IsSuccessStatusCode)
                    return Ok($"Remote GPIO response: {body}");
                else
                    return StatusCode((int)response.StatusCode, $"Remote error: {body}");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to reach remote Pi: {ex.Message}");
            }
        }

    }

}
