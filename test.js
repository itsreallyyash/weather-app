
const APIKey = 'YOUR-API-KEY'; 
fetch(`//api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
.then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`HTTP error! Status: ${response.status}`);
  })
  .then(data => {
    console.log('Weather data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
