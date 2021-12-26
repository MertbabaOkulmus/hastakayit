Template.hastaKayit.events({
	"submit .hasta-post": function() {
		var tcno = event.target.tcno.value;
		var idNumber = event.target.idNumber.value;
		var name = event.target.name.value;
		var surname = event.target.surname.value;
		var gender=  event.target.gender.value;
		var bloodgroup=  event.target.bloodgroup.value;
		var birthday = event.target.birthday.value;
		var phonenumber=  event.target.phonenumber.value;
		var email = event.target.email.value;
		var closename = event.target.closename.value;
		var closephonenumber= event.target.closephonenumber.value;
		var allergies=document.getElementById("allergiesdemo").innerText;
		var comorbid = document.getElementById("comorbiddemo").innerText;
		var comorbidfactormedicine = document.getElementById("comorbidfactormedicinedemo").innerText;
		var psychologicalmedicine = document.getElementById("psychologicalmedicinedemo").innerText;
		var icdcode = event.target.icdcode.value;
		var warnings = event.target.warnings.value;

		if ((isNotEmpty(tcno) || isNotEmpty(idNumber)) &&
		isNotEmpty(name) &&
		isNotEmpty(surname) &&
		isNotEmpty(gender)&&
		isNotEmpty(birthday)&&
		isNotEmpty(phonenumber)&&
		isNotEmpty(closename)&&
		isNotEmpty(closephonenumber)
	) {
		Meteor.call('addhastas',tcno, idNumber, name,surname,gender,bloodgroup,birthday,phonenumber, email, closename, closephonenumber,
		allergies,comorbid,comorbidfactormedicine,psychologicalmedicine,icdcode,warnings);
		event.target.tcno.value = "";
		event.target.idNumber.value = "";
		event.target.name.value = "";
		event.target.surname.value = "";
		event.target.gender.value = "";
		event.target.bloodgroup.value = "";
		event.target.birthday.value = "";
		event.target.phonenumber.value = "";
		event.target.email.value = "";
		event.target.closename.value = "";
		event.target.closephonenumber.value = "";
		event.target.allergies.value = "";
		event.target.comorbid.value = "";
		event.target.comorbidfactormedicine.value = "";
		event.target.psychologicalmedicine.value = "";
		event.target.icdcode.value = "";
		event.target.warnings.value = "";
		Bert.alert("Başarılı şekilde kaydedildi", "success", "growl-top-right");
	} else {

		Bert.alert("başarız tekrar dene", "danger", "growl-top-right");
	}
	return false; // prevent submit
},
'click .allergiesbtn':function(event){
	var allergiesItem = document.createElement("p");
	var sil = document.createElement("button");
	sil.innerHTML="  X  ";
	sil.setAttribute("onclick","this.parentNode.remove();");
	allergiesItem.innerHTML = document.getElementById("allergies").value;
	allergiesItem.appendChild(sil).classList.add("deleteA");
	document.getElementById("allergiesdemo").appendChild(allergiesItem).classList.add("mİlaclar");
	return false;
},
'click .comorbidbtn':function(event){
	var comorbidItem = document.createElement("p");
		var comorbidItem = document.createElement("p");
			var comorbidItem = document.createElement("p");
	var sil = document.createElement("BUTTON");
	sil.innerHTML="  X  ";
	sil.setAttribute("onclick","this.parentNode.remove();");
	comorbidItem.innerHTML = document.getElementById("comorbid").value;
	comorbidItem.appendChild(sil).classList.add("deleteA");
	document.getElementById("comorbiddemo").appendChild(comorbidItem).classList.add("mİlaclar");
	return false;
},
'click .comorbidfactormedicinebtn':function(event){
	var comorbidfactormedicineItem = document.createElement("p");
	var sil = document.createElement("BUTTON");
	sil.innerHTML="  X  ";
	sil.setAttribute("onclick","this.parentNode.remove();");
	comorbidfactormedicineItem.innerHTML = document.getElementById("comorbidfactormedicine").value;
	comorbidfactormedicineItem.appendChild(sil).classList.add("deleteA");
	document.getElementById("comorbidfactormedicinedemo").appendChild(comorbidfactormedicineItem).classList.add("mİlaclar");
	return false;
},
'click .psychologicalmedicinebtn':function(event){
	var psychologicalmedicineItem = document.createElement("p");
	var sil = document.createElement("BUTTON");
	sil.innerHTML="  X  ";
	sil.setAttribute("onclick","this.parentNode.remove();");
	psychologicalmedicineItem.innerHTML = document.getElementById("psychologicalmedicine").value;
	psychologicalmedicineItem.appendChild(sil).classList.add("deleteA");
	document.getElementById("psychologicalmedicinedemo").appendChild(psychologicalmedicineItem).classList.add("mİlaclar");
	return false;
},

"click .logout": function(event){
	Meteor.logout(function(err){
		if(err) {
			Bert.alert(err.reason, "danger", "growl-top-right");
		} else {
			Router.go('/');
			Bert.alert("Çıkış yaptınız", "success", "growl-top-right");
		}
	});
}
});
// Validation Rules
var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("lütfen boşlukları doldurunuz", "danger", "growl-top-right");
	return false;
};
