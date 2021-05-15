var signup_link=document.querySelector('.a1');
var login_link=document.querySelector('.a2');

var signup_form=document.querySelector('.signup-form');
var login_form=document.querySelector('.login-form');
login_link.addEventListener('click',signup_hide);

signup_link.addEventListener('click',login_hide);

function signup_hide() {
	signup_form.style.display = "none";
	login_form.style.display = "block"
    signup_link.style.background = "lightgray";
    login_link.style.background = "black";

}
function login_hide() {
	signup_form.style.display = "block";
    login_form.style.display  = "none";
    signup_link.style.background = "black";
    login_link.style.background = "lightgray";

}
