$.get( "http://api.openweathermap.org/data/2.5/weather?q=Huddinge&appid=c5bf5d99c4ebb07f0a60cbabebec2b95&units=metric", function( data ) {

    // på rad 6 till 12 så sparar jag datan jag får från länken i flera variablar

    let namn = data.name
    let temp = Math.floor(data.main.temp)
    let tempmin = Math.floor(data.main.temp_min)
    let tempmax = Math.floor(data.main.temp_max)
    let humidity = Math.floor(data.main.humidity)
    let windspeed = Math.floor(data.wind.speed)
    let imgicon = "http://openweathermap.org/img/wn/"+data.weather[0].icon+".png"

    // På rad 16 till 22 så tar jag datan som jag tidigare sparade i variblarna och lägger in dem på olika h element så användaren kan se datan på hemsidan

    $("#stadnamn").html(namn);
    $("#temp").html(temp+" C");
    $("#mintemp").html(tempmin+" C");
    $("#maxtemp").html(tempmax+" C");
    $("#humidity").html(humidity);
    $("#windspeed").html(windspeed+" m/s");
    $("#iconbild").attr('src', imgicon);
});

