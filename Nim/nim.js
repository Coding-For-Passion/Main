/*
This is the code that contains the Nim Game
Developed By Riley And Alexander
*/
var nims = 21;
var yourTurn = true;
var firstTurn = true;
var retry = false;
var userChoice;
var userChoiceLength = 0;
var ifNumber;
var EXPERIMENTAL_MODE = false;
var modeMessage = "Hi, I am your trusty AI. I would be delighted to play a game of Nim";
//var nimDisplay;
//function display(nims) {
//  for(var i = 1; i<= nims; i++) {
//    nimDisplay = nimDisplay + "| ";
//  }
//  document.getElementByID("nimDisplay").innerHTML = nimDisplay;
//}
//function displayReset() {
//  document.getElementByID("nimDisplay").innerHTML = "";
//}
function checkMode(mode) {
  if (mode) {
    modeMessage = "EXPERIMENTAL_MODE";
  }
}
function nimCounterReset() {
  document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;
}
function userChoosing() {
  userChoice = prompt("How many nim would you like to start with?(2 digit number)");
  firstTurn = confirm("Would you like to go first?");
  ifNumber = isNaN(userChoice);
  if (userChoice != null) {
    userChoiceLength = userChoice.length
  }
  if (userChoice == null || ifNumber) {
    retry = confirm("ERROR: NaN or no Input\nNot a number, retry?" );
    if (retry) {
      userChoosing();
    }
  }
  else if (userChoiceLength == 2) {
    nims = userChoice;
//    display(nims);
    setTimeout(nimCounterReset,100);
  }
  else {
    retry = confirm("ERROR: Number length invalid\n Number is not a valid length(2 digits), retry?" );
    if (retry) {
      userChoosing();
    }
  }
}
function AI() {
  document.getElementById("move").innerHTML = "AI Move";
  if (nims % 4 == 0) {
    nims -= Math.floor(Math.random() * 3) + 1;
  } else {
    nims -= (nims % 4); 
  }
  if (nims > 0) {
  document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;}
  else if (nims == 0) {
    document.getElementById("nims").innerHTML = "You Lose!!";
    setTimeout(playAgain,500);
  } else if (nims < 0) {
    document.getElementById("nims").innerHTML = "You Win!!";
   setTimeout(playAgain,500);
  }
  document.getElementById("move").innerHTML = "Your Move";
//  displayReset();
//  display(nims);
  yourTurn = true;
}
function play() {
  if (nims == 0) {
    document.getElementById("nims").innerHTML = "You Win!!";
  } 
  else {
    if (yourTurn == true) {
      nims -= document.getElementById("select").value; 
      document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;
      yourTurn = false; 
//    displayReset();
//    display(nims);
      document.getElementById("move").innerHTML = "AI Move: ";
      setTimeout(AI, 2000);
    } 
    else {
      alert("It isn't your turn yet!!"); 
    }
  }
}
function playAgain() {
  var con = confirm("Would you like to play again?");
  if (con == false) {
    location.replace('../Homepage/homepage.html');
  }
  if (con == true) {
    location.replace('nim.html');
  }
}
  checkMode(EXPERIMENTAL_MODE);
  alert(modeMessage);  
  alert("To play Nim, you choose a number of 'Nims', and then you choose whether to go first or second. You and the AI take turns removing blocks — each player may remove one to three nims, whichever player takes the last Nim wins.");
  userChoosing();
  if (firstTurn == false) {
    yourTurn = false;
    document.getElementById("move").innerHTML = "AI Move";
    setTimeout(AI, 2000);
  }
