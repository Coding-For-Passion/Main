function all() {
var f = confirm("Are you sure you want to make changes to this website? Please note changes will not be immediate");
if (f == false) {
	exit();
}
else {
	while (true) {
		var name = prompt("What is your name? (Optional)");
		var subject = prompt("What is the subject you would like to fix?");
        	var body = prompt("What exactly would you like to fix?");
		if (subject == null||subject == null||name == null) {
			alert("One or more catagory was cancelled");
			if (name == null) {
				alert("when answering name, if you would like to have no name click ok without typing and not cancel");
			}
		}
		else {
			break;
        }
	}
		subject = "Fix: " + subject + " From: " + name;
		body = "A user has requested to fix: " + body;
		
		var popupBlockerChecker = {
			check: function(popup_window) {
          var _scope = this;
            if (popup_window) {
                if(/chrome/.test(navigator.userAgent.toLowerCase())){
                    setTimeout(function () {
                        _scope._is_popup_blocked(_scope, popup_window);
                     },200);
                }else{
                    popup_window.onload = function () {
                        _scope._is_popup_blocked(_scope, popup_window);
                    };
                }
            }else {
                _scope._displayError();
            }
        },
        _is_popup_blocked: function(scope, popup_window) {
            if ((popup_window.innerHeight > 0)==false){ scope._displayError(); }
        },
        _displayError: function(){
            alert("Popup Blocker is enabled! Please add this site to your exception list.");
        }
    };
var popup = window.open("mailto:wesbob12@gmail.com" + "?subject=" + subject + "&body=" + body);
popupBlockerChecker.check(popup);
}
}
