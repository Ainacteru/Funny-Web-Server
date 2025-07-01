<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>.NET API Demo</title>
</head>
<body>
  <h1>.NET C# Backend Demo</h1>

  <div class="card">
    <h2>GET /api/example/hello</h2>
    <button onclick="getHello()">Fetch Greeting</button>
    <p id="helloMessage"></p>
  </div>

  <div class="card">
    <h2>POST /api/example/submit</h2>
    <form onsubmit="submitUser(event)">
      <label for="name">Name:</label>
      <input type="text" id="name" required>

      <label for="age">Age:</label>
      <input type="number" id="age" required>

      <button type="submit">Submit</button>
    </form>
    <p id="submitResponse"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
