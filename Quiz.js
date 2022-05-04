$.get( "https://the-trivia-api.com/api/questions", function( data ) {

let fråga = data[0].question;
let felsvar1 = data[0].incorrectAnswers[0];
let felsvar2 = data[0].incorrectAnswers[1];
let felsvar3 = data[0].incorrectAnswers[2];
let rättsvar = data[0].correctAnswer;

console.log(fråga);
console.log(felsvar1);
console.log(felsvar2);
console.log(felsvar3);
console.log(rättsvar);

$("#stadnamn").html(namn);


});