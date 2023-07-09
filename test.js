const cityInput = document.querySelector('.search-box input');
const city = cityInput.value;
const APIKey = 'd5331501d8c2456689c90417230907'; // Replace with your new API key


fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`HTTP error! Status: ${response.status}`);
  })
  .then(data => {
    console.log('Weather data:', data);
    // Process the weather data as needed
  })
  .catch(error => {
    console.error('Error:', error);
  });
