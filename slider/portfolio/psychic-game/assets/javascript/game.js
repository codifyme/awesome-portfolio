//******* VARIABLES and counter and zeroing counters (`var attempts` set to 9 yeilds 10 total attempts as numbering begins with zero)

var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

//GENERATING THE COMPUTERS SECRET LETTER
//RANDON Number of Letter generator (decimal from 0 to 1) which is multiplied by 26
ranLetter = letters[Math.floor(Math.random() * letters.length)];

console.log(ranLetter);

//It random whole number generated above to select a random letter from the array [letters] and assigns it to the var ranLetter
function jsGuess() {
  ranLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log(ranLetter);
}

//CAPTURING THE PLAYERS INPUT

document.onkeyup = function(event) {
  var peopleGuess = event.key;

  // HANDELING CORRECT GUESSES

  if (peopleGuess === ranLetter) {
    won++;
    attempts = 10;
    usedArray = [];
  }

  //HANDELING INCORRECT GUESSES

  if (peopleGuess !== ranLetter) {
    attempts--;
  }

  //when remaining attempts equals zero, lost is incrimented by 1; attempts is reset to 10, and used letters array is cleared
  if (attempts == 0) {
    lost++;
    usedArray = [];
    attempts = 10;
  }

  //HANDELING INCORRECT GUESSES - OUTPUT

  if (usedArray.indexOf(peopleGuess) >= 0) {
  } else {
    //this pushes the players incorrect guess to the usedArray and writes it to the HTML
    usedArray.push(peopleGuess);
    document.getElementById('peopleGuess').innerHTML = usedArray;
    console.log(usedArray);
  }
  //********** HTML Output **********

  document.getElementById('won').innerHTML = won;
  document.getElementById('lost').innerHTML = lost;
  document.getElementById('attempts').innerHTML = attempts;
};
