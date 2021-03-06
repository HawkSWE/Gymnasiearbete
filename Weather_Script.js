let stad = prompt("Vart vill du se vädret?")

$.get( "http://api.openweathermap.org/data/2.5/weather?q="+stad+"&appid=c5bf5d99c4ebb07f0a60cbabebec2b95&units=metric", function( data ) {

    let namn = data.name
    let temp = Math.floor(data.main.temp)
    let tempmin = Math.floor(data.main.temp_min)
    let tempmax = Math.floor(data.main.temp_max)
    let tempfeels = Math.floor(data.main.feels_like)
    let humidity = Math.floor(data.main.humidity)
    let windspeed = Math.floor(data.wind.speed)
    let imgicon = "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png"

    $("#stadnamn").html(namn);
    $("#temp").html(temp+" C");
    $("#mintemp").html(tempmin+" C");
    $("#maxtemp").html(tempmax+" C");
    $("#feeltemp").html(tempfeels+" C");
    $("#humidity").html(humidity);
    $("#windspeed").html(windspeed+" m/s");
    $("#iconbild").attr('src', imgicon);

    console.log(data);
});

