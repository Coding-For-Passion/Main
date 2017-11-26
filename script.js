var project = 0;
function addProject (x) {
  project = project + x;
}
var word = " projects";
var word2 = "are";
if (project == 1) {
  word = " project"
  word2 = "is"
}
alert("Welcome to our AI projects website. There " + word2 + " currently " + project + word + " on right now.");
