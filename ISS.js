$.get( "https://api.wheretheiss.at/v1/satellites/25544", function( data ) {

    let long = Math.floor(data.longitude)
    let lat = Math.floor(data.latitude)
    let alti = Math.floor(data.altitude)

    $("#long").html(long);
    $("#lat").html(lat);
    $("#höjd").html(alti);
});
