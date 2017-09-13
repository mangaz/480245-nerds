var form = document.querySelector(".form");
var formClose = document.querySelector(".button-modal-close");
var formOpen = document.querySelector(".footer-button");
var submit = document.querySelector(".form .button");

var login = document.querySelector(".login-name");
var email = document.querySelector(".login-email");
var mail = document.querySelector("textarea");


formOpen.addEventListener("click",function(event){
	event.preventDefault();
	form.classList.add("visible");
});
formClose.addEventListener("click",function(event){
	event.preventDefault();
	form.classList.remove("visible");
});
submit.addEventListener("click",function(event){
	if (!login.value || !email.value || !mail.value){
		event.preventDefault();
		form.classList.remove("error");
		form.offsetWidth = form.offsetWidth;
		login.classList.remove("invalide");
		email.classList.remove("invalide");
		mail.classList.remove("invalide");
		form.classList.add("error");
		if (!login.value){
			login.classList.add("invalide");
		}
		if (!email.value){
			email.classList.add("invalide");
		}
		if (!mail.value){
			mail.classList.add("invalide");
		}
	} else {
		login.classList.remove("invalide");
		email.classList.remove("invalide");
		mail.classList.remove("invalide");
		form.submit();
	};
});