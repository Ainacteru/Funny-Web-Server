fetch('/api/weatherforecast')
  .then(response => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then(data => {
    const tableBody = document.querySelector('#forecastTable tbody');
    data.forEach(entry => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${new Date(entry.date).toLocaleDateString()}</td>
        <td>${entry.temperatureC}</td>
        <td>${entry.temperatureF}</td>
        <td>${entry.summary}</td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Fetch error:", error);
    document.body.innerHTML += "<p style='color: red;'>Failed to load data.</p>";
  });
