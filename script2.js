alert("Sign-In is currently disabled on the main page, A Sign-in popup will appear shortly!");
var f = confirm("Are you sure you want to make changes to this website(please note changes will not be imediate)");
if (f = false) {
Location.replace("index.html")
}
else {
var subject = prompt("what subject would you like to fix?");
var body = prompt("what would you like to fix?");
subject = "Fix: " + subject;
body = "A user has requested to fix: " + body;
window.open('mailto:wesbob12@gmail.com?subject=subject&body=body');
}
