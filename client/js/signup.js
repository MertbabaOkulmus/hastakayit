Template.signup.events({
	"submit .form-signup": function(event){
		var username = trimInput(event.target.username.value);
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);
		var password2 = trimInput(event.target.password2.value);
		if(isNotEmpty(email) &&
		isNotEmpty(username) &&
		isNotEmpty(password) &&
		isEmail(email) &&
		areValidPasswords(password, password2)) {
			Accounts.createUser({
				username: username,
				email: email,
				password: password,
			}, function(err){
				if(err){
					Bert.alert(err.reason, "danger", "growl-top-right");
				} else {
					Bert.alert("Hesap oluşturuldu! Giriş yaptınız", "success", "growl-top-right");
					Router.go("/hastakayit");
				}
			});
		}
		return false; // prevent submit
	}
});
// Trim Helper
var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
};
var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("lütfen bütün boşlukları doldurun", "danger", "growl-top-right");
	return false;
};
// Validate Email
isEmail = function(value) {
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(filter.test(value)) {
		return true;
	}
	Bert.alert("Lütfen geçerli bir e-posta adresi kullanın", "danger", "growl-top-right");
	return false;
};
// Check Password Field
isValidPassword = function(password){
	if(password.length <6) {
		Bert.alert("şifre en az 6 karakterden oluşmalıdır", "danger", "growl-top-right");
		return false;
	}
	return true;
};
// Match Password
areValidPasswords = function(password, confirm) {
	if(!isValidPassword(password)) {
		return false;
	}
	if(password !== confirm) {
		Bert.alert("Parolalar uyuşmuyor", "danger", "growl-top-right");
		return false;
	}
	return true;
};
