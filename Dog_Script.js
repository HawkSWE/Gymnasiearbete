var nummer = Math.floor(Math.random() * 439);

$.get( "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?index="+nummer, function( data ) {


    console.log(data);

});


