let data;
const input = document.getElementById("inputBox");
const cn = document.getElementById("countryName");
const statename = document.getElementById("stateName");
const cityname  = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temp = document.getElementById("temprature");
const weatherstatus = document.getElementById("weatherStatus");
const li = document.getElementById("logoImage");
// console.log(5); 
const getData =  async (event) => {
    event.preventDefault();
    if(!input.value)
    {
        alert("please enter the value");
        return; 
    }
    const city = input.value;
     const fet =  await fetch(`http://api.weatherapi.com/v1/current.json?key=0943a51139954ccb95d91308230505&q=${city}`);
     const data = await fet.json();
     console.log(data);
     cn.innerHTML = data.location.country;
     statename.innerHTML = data.location.region;
     cityname.innerHTML = data.location.name;
     humidity.innerHTML = data.location.humidity;
     windSpeed.innerHTML = data.current.wind_kph;
    temp.innerHTML = data.current.temp_c;

    k = "http:"+data.current.condition.icon;
    li.src = k;
    weatherstatus.innerHTML = data.current.condition.text;
    }