let rättOrd = '';
let maxFel = 7;
let misstag = 0;
let gissning = [];
let ordStatus = null;

function randomOrd() {
    $.get( "https://random-words-api.vercel.app/word/adjective", function( data ) {

    rättOrd = data[0].word;
});
}

function skapaTangentbord() {
  let buttons = 'abcdefghijklmnopqrstuvwxyz'.split('').map(bokstav =>
    `
      <button class="btn btn-lg btn-success m-2" id='` + bokstav + `' onClick="gissa('` + bokstav + `')">
      ` + bokstav + `
      </button>
    `).join('');

  document.getElementById('tangentbordDiv').innerHTML = buttons;
}

function gissa(bokstav) {
    gissning.indexOf(bokstav) === -1 ? gissning.push(bokstav) : null;
  document.getElementById(bokstav).setAttribute('disabled', true);

  if (rättOrd.indexOf(bokstav) >= 0) {
    gissatOrd();
    vinst();
  } else if (rättOrd.indexOf(bokstav) === -1) {
    misstag++;
    uppdateraMisstag();
    förlust();
    uppdateraBild();
  }
}

function uppdateraBild() {
  document.getElementById('bild').src = 'Bilder/bild' + misstag + '.png';
}

function vinst() {
  if (ordStatus === rättOrd) {
    document.getElementById('tangentbordDiv').innerHTML = 'Grattis du vann spelet!';
  }
}

function förlust() {
  if (misstag === maxFel) {
    document.getElementById('ordet').innerHTML = 'Ordet var: ' + rättOrd;
    document.getElementById('tangentbordDiv').innerHTML = 'Du förlorade spelet!';
  }
}

function gissatOrd() {
  ordStatus = rättOrd.split('').map(bokstav => (gissning.indexOf(bokstav) >= 0 ? bokstav : " _ ")).join('');

  document.getElementById('ordet').innerHTML = ordStatus;
}

function uppdateraMisstag() {
  document.getElementById('misstag').innerHTML = misstag;
}

function startaOm() {
    misstag = 0;
    gissning = [];
    document.getElementById('bild').src = 'Bilder/bild1.png';

  randomOrd();
  uppdateraMisstag();
  skapaTangentbord();
  gissatOrd();
}

document.getElementById('maxFel').innerHTML = maxFel;

randomOrd();
skapaTangentbord();
gissatOrd();