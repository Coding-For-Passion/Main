var nims = 21;
var yourTurn = true;
var retry = false;
var userChoice;
var userChoiceLength;
var ifNumber;
function nimDisplayReset() {
  document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;
}
function userChoosing() {
  userChoice = prompt("How many nim would you like to start with? ");
  var firstTurn = confirm("Would you like to go first?");
  userChoiceLength = userChoice.length;
  ifNumber = userChoice.isNaN;
  if (ifNumber) {
    retry = confirm("Invalid number, retry?");
    if (retry) {
      userChoosing();
    }
  }
  else if (userChoice != null && userChoiceLength < 3 && userChoiceLength > 1) {
    nims = userChoice;
    
    setTimeout(nimDisplayReset,100);
  }
  else {
    retry = confirm("Invalid number, retry?");
    if (retry) {
      userChoosing();
    }
  }
}
userChoosing();
if (firstTurn == false) {
  setTimeout(AI, 2000);
}
function play() {
  if (nims == 0) {
    document.getElementById("nims").innerHTML = "You Win!!"
  } else {
    if (yourTurn == true) {
      nims -= document.getElementById("select").value; 
      document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;
      yourTurn = false; 
      document.getElementById("move").innerHTML = "AI Move: ";
      setTimeout(AI, 2000);
    } else {
      alert("It isn't your turn yet!!"); 
    }
  }
}
function playAgain() {
var con = confirm("Would you like to play again?")
    if (con == false) {
    location.replace('../Homepage/homepage.html');
    }
    if (con == true) {
    location.replace('nim.html');
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
    document.getElementById("nims").innerHTML = "You Lose!!"
    setTimeout(playAgain,500);
  } else if (nims < 0) {
    document.getElementById("nims").innerHTML = "You Win!!"
   setTimeout(playAgain,500);
  }
  document.getElementById("move").innerHTML = "Your Move";
  yourTurn = true;
  
}
