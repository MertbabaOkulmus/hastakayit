Tracker.autorun(function(){
	if(Meteor.userId()){
		Router.go("/hastakayit");
	}
});
Template.login.rendered = function() {
	$("#login-link").addClass('selected');
}
Template.login.events({
	"submit .form-signin": function(event){
		var email = trimInput(event.target.email.value);
		var password = trimInput(event.target.password.value);
		if(isNotEmpty(email) &&
		isNotEmpty(password) &&
		isEmail(email) &&
		isValidPassword(password)){
			Meteor.loginWithPassword(email, password, function(err){
				if(err) {
					Bert.alert("Hatalı giriş yaptınız yeniden deneyiniz", "danger", "growl-top-right");
					return false;
				} else {
					Router.go("/hastakayit");
					Bert.alert("Başarılı şekilde giriş yaptınız", "success", "growl-top-right");
				}
			});
		}
		return false // Prevent Submit
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
Meteor.logoutOtherClients();
