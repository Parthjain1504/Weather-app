const apikey = "e0f16c80a12aa01cdde12dab56f77f2a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search=document.querySelector("nav input");
const searchbtn=document.querySelector("nav button");
const weatherIcon=document.querySelector("#icon"); 

async function weather( city) {
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML =  Math.round(data.main.temp  )+"°c";
    document.querySelector("#humidity").innerHTML = data.main.humidity +"%";
    document.querySelector("#wind").innerHTML = data.wind.speed +"Km/hr"  ;

    if(data.weather[0].main=="Clouds")
    {
        weatherIcon.src="images/clouds.png";
    }
     else if(data.weather[0].main=="Clear")
    {
        weatherIcon.src="images/clear.png";
    }
       else if(data.weather[0].main=="Rain")
    {
        weatherIcon.src="images/rain.png";
    }
       else if(data.weather[0].main=="Drizzle")
    {
        weatherIcon.src="images/drizzle.png";
    }
       else if(data.weather[0].main=="Mist")
    {
        weatherIcon.src="images/mist.png";
    }
}

searchbtn.addEventListener("click" ,()=>{
  
    weather(search.value);

}
)

    