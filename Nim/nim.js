var nims = 21;
function play() {
  nims -= document.getElementById("select").value; 
  document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;
  if (nims == 0) {document.getElementById("nims").innerHTML = "You Win!!"}
  setTimeout(AI, 2000);
}

function AI() {
  if (nims % 4 == 0) {
    nims -= Math.floor(Math.random() * 3) + 1;
  } else {
    nims -= (nims % 4); 
  }
  document.getElementById("nims").innerHTML = "Nims Remaining: " + nims;
  if (nims == 0) {
    document.getElementById("nims").innerHTML = "You Lose!!"
    exit();
  } else if (nims < 0) {
    document.getElementById("nims").innerHTML = "You Win!!"
    exit();
  }
}
