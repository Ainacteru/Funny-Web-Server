function sayHello() {
    fetch('http://localhost:5097/api/test')
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').textContent = data;
        })
        .catch(err => {
            console.error('Error:', err);
        });
}
