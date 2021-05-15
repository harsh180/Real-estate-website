var email = document.forms['loginForm']['email_1']
var password = document.forms['loginForm']['password_1']

var login_error=document.querySelector('.login_error');

password.addEventListener('textInput',passwordVerify);
email.addEventListener('textInput',EmailVerify);

function loginvalid(){
	if(email.value.length <= 2){
		login_error.style.display="block";
		email.style.border="1px solid red";
		login_error.innerText="Please fill email/phone";
		email.focus();
		return false;
	}
	if(password.value.length <= 2){
		login_error.style.display="block";
		password.style.border="1px solid red";
		login_error.innerText="Please fill password";
		password.focus();
		return false;
	}
}


function passwordVerify(){
     if(password.value.length > 7){
		login_error.style.display="none";
		password.style.border="1px solid #3498db";
		login_error.innerText="";
		return true;
	}	
}
function EmailVerify(){
     if(email.value.length > 10){
		login_error.style.display="none";
		email.style.border="1px solid #3498db";
		login_error.innerText="";
		return true;
	}	
}