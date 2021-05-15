var firstname = document.forms['SignupForm']['firstname']
var lastname = document.forms['SignupForm']['lastname']
var email = document.forms['SignupForm']['email']
var password = document.forms['SignupForm']['password']


var signup_error = document.querySelector('.signup_error');

firstname.addEventListener('textInput', fstnameVerify);
lastname.addEventListener('textInput', lstnameVerify);
email.addEventListener('textInput', emailVerify);
password.addEventListener('textInput', passVerify);


function signupvalid(){
	if(firstname.value.length <= 2){
		signup_error.style.display="block";
		firstname.style.border="1px solid red";
		signup_error.innerText="Please fill firstname";
		firstname.focus();
		return false;
	}
	
	if(lastname.value.length <= 2){
		signup_error.style.display="block";
		lastname.style.border="1px solid red";
		signup_error.innerText="Please fill lastname";
		lastname.focus();
		return false;
	}
	if(email.value.length <= 2){
		signup_error.style.display="block";
		email.style.border="1px solid red";
		signup_error.innerText="Please fill email";
		email.focus();
		return false;
	}
	if(password.value.length <= 2){
		signup_error.style.display="block";
		password.style.border="1px solid red";
		signup_error.innerText="Please fill password";
		password.focus();
		return false;
	}
}

function fstnameVerify(){
        if(firstname.value.length > 7){
		signup_error.style.display="none";
		firstname.style.border="1px solid #3498db";
		signup_error.innerText="";
		return true;
	}	
}
function lstnameVerify(){
        if(lastname.value.length > 7){
		signup_error.style.display="none";
		lastname.style.border="1px solid #3498db";
		signup_error.innerText="";
		return true;
	}	
}
function emailVerify(){
        if(email.value.length >=10){
		signup_error.style.display="none";
		email.style.border="1px solid #3498db";
		signup_error.innerText="";
		return true;
	}	
}
function passVerify(){
        if(password.value.length >= 7){
		signup_error.style.display="none";
		password.style.border="1px solid #3498db";
		signup_error.innerText="";
		return true;
	}	
}

