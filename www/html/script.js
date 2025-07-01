/* what does any of this even do
function getHello() {
    fetch('http://192.168.68.96:5000/api/example/hello')
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        document.getElementById('helloMessage').textContent = data.message;
      })
      .catch(err => {
        document.getElementById('helloMessage').textContent = "Error: " + err.message;
      });
  }
  
  function submitUser(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
  
    if (!name || isNaN(age)) return;
  
    fetch('http://192.168.68.96:5000/api/example/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age })
    })
      .then(res => {
        if (!res.ok) throw new Error("Submission failed");
        return res.json();
      })
      .then(data => {
        document.getElementById('submitResponse').textContent = data.message;
      })
      .catch(err => {
        document.getElementById('submitResponse').textContent = "Error: " + err.message;
      });
  }
  */
