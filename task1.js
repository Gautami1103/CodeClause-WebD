let weather = {
    apikey:   "b82f9d0ffc88963f5443b916c916291f",
    fetchweather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +"&units=metric&appid="
            + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayweather(data))
    },
    displayweather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp,feels_like,pressure} = data.main;
        document.querySelector(".city").innerText = name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".description").innerText = description;
        document.querySelector(".feels_like").innerText = "Feels Like:   " + feels_like + "°C";
        document.querySelector(".pressure").innerText = "Pressure:   " + pressure + "millibars";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
        
         
    },
    search: function() {
        this.fetchweather(document.querySelector(".search_box").value);
    }
};
document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});
document.querySelector(".search_box").addEventListener('keyup',function(event) {
    if (event.key == "Enter" ) {
        weather.search();
    }


});