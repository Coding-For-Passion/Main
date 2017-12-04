var nims = 21;
var yourTurn = true;
function play() {
  if (nims == 0) {
    document.getElementById("nims").innerHTML = "You Win!!"
  } else if (yourTurn == true) {
    nims -= document.getElementById("select").value; 
    document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;
    yourTurn = false;
  }
  setTimeout(AI, 2000);
}

function AI() {
  if (nims % 4 == 0) {
    nims -= Math.floor(Math.random() * 3) + 1;
  } else {
    nims -= (nims % 4); 
  }
  if (nims > 0) {
  document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;}
  else if (nims == 0) {
    document.getElementById("nims").innerHTML = "You Lose!!"
    location.replace('../Homepage/homepage.html');
  } else if (nims < 0) {
    document.getElementById("nims").innerHTML = "You Win!!"
    location.replace('../Homepage/homepage.html');
  }
  yourTurn = true;
}
