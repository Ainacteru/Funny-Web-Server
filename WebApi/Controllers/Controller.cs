using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // Correct: only one slash
    public class WebAPIController : ControllerBase
    {
        [HttpGet("hello")] // Correct: no leading slash
        public IActionResult GetHello()
        {
            return Ok(new { message = "Hello from ExampleController!" });
        }
        //does magic
        [HttpPost("submit")] // Correct: no leading slash
        public IActionResult Submit([FromBody] User user)
        {
            if (user == null)
                return BadRequest(new { error = "Invalid user data" });

            return Ok(new { message = $"Received user: {user.Name}, Age: {user.Age}" });
        }
    }

    public class User
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
}
