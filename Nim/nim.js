var nims = 21;
var yourTurn = true;
function nameThis() {
  document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;
}
var set = prompt("How many nim would you like to start with? ");
set2 = set.length();
if (set != null || set2 < 3 || set2 > 1) {
  nims = set;
  
  setTimeout(nameThis,100);
}
var firstTurn = confirm("Would you like to go first?");

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
  document.getElementById("move").innerHTML = "AI Move: ";
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
  yourTurn = true;
  document.getElementById("move").innerHTML = "Your Move: ";
}
