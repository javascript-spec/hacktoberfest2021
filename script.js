var button = document.getElementById('button');
var city_name = document.getElementById('city-name');
var weather = document.getElementById('weather');
var temp = document.getElementById('temp')
var weather_icon = document.getElementById('weather-icon')
var country = document.getElementById('country')
var city = document.getElementById('city')
var long = document.getElementById('long')
var lat = document.getElementById('lat')

button.addEventListener('click', function() {
    let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city_name.value+'&units=metric&appid=015493ed5c1e7691a10116e53d276572';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function() {
      const weather_data = request.response;
      console.log(weather_data);
        city_name.innerHTML = weather_data.name;
        city.innerHTML ='City: ' + city_name.value;
        country.innerHTML = 'Country: ' + weather_data.sys.country;
        long.innerHTML = 'Longitude: ' + weather_data.coord.lon;
        lat.innerHTML = 'Lattitude: ' + weather_data.coord.lat;
        temp.innerHTML = 'Temperature: ' + weather_data.main.temp+'°C';
        weather.innerHTML = 'Description: ' + weather_data.weather[0].description;
        weather_icon.style = 'display: block';
        weather_icon.setAttribute('src', 'http://openweathermap.org/img/w/'+weather_data.weather[0].icon+'.png')
    } 
}, false)