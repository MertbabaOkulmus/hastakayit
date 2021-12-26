Template.yontem.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	},
});

Template.hamilton.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	},
});
Template.montreal.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	},
});
Template.montgomery.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	},
});
Template.beck.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	},
});
Template.User.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	},
});
Template.bilgiler.events({
	"click .logout": function(event){
		Meteor.logout(function(err){
			if(err) {
				Bert.alert(err.reason, "danger", "growl-top-right");
			} else {
				Router.go('/');
				Bert.alert("Çıkış yaptınız", "success", "growl-top-right");
			}
		});
	},
	'click #edit': function(e) {
	e.preventDefault();
	hasta = $(e.target).closest('.hasta')
	hastaId = hasta.attr('data-id')
},
	"click .hamiltonbtn":function()
	{
		hamilton = $('#hamilton')
		hamilton = hamilton.val()
		hamiltontreatmenttime = $('#hamiltontreatmenttime')
		hamiltontreatmenttime = hamiltontreatmenttime.val()
		hamiltonmeausurescore = $('#hamiltonmeausurescore')
		hamiltonmeausurescore = hamiltonmeausurescore.val()
		Meteor.call("hamiltonscore",this.__originalId,hamilton,hamiltontreatmenttime,hamiltonmeausurescore);
		Bert.alert("Başarılı şekilde gönderildi", "success", "growl-top-right");
	},
	"click .montrealbtn":function()
	{
		montreal = $('#montreal')
		montreal = montreal.val()
		montrealtreatmenttime = $('#montrealtreatmenttime')
		montrealtreatmenttime = montrealtreatmenttime.val()
		montrealmeasurescore = $('#montrealmeasurescore')
		montrealmeasurescore = montrealmeasurescore.val()
		Meteor.call("montrealscore",this.__originalId,montreal,montrealtreatmenttime,montrealmeasurescore);
		Bert.alert("Başarılı şekilde gönderildi", "success", "growl-top-right");
	},
	"click .montgomerybtn":function()
	{
		montgomery = $('#montgomery')
		montgomery = montgomery.val()
		montgomerytreatmenttime = $('#montgomerytreatmenttime')
		montgomerytreatmenttime = montgomerytreatmenttime.val()
		montgomerymeasurescore = $('#montgomerymeasurescore')
		montgomerymeasurescore = montgomerymeasurescore.val()
		Meteor.call("montgomeryscore",this.__originalId,montgomery,montgomerytreatmenttime,montgomerymeasurescore);
		Bert.alert("Başarılı şekilde gönderildi", "success", "growl-top-right");
	},
	"click .beckbtn":function()
	{
		beck = $('#beck')
		beck = beck.val()
		becktreatmenttime = $('#becktreatmenttime')
		becktreatmenttime = becktreatmenttime.val()
		beckmeasurescore = $('#beckmeasurescore')
		beckmeasurescore = beckmeasurescore.val()
		Meteor.call("beckscore",this.__originalId,beck,becktreatmenttime,beckmeasurescore);
		Bert.alert("Başarılı şekilde gönderildi", "success", "growl-top-right");
	},
	"click .completedbtn":function()
	{
	  completed = $('#completed')
		completed = completed.val()
		Meteor.call("treatmentresult1",this.__originalId,completed);
		Bert.alert("Tedavi Süreci Tamamlanmıştır", "success", "growl-top-right");
	},
	"click .notcompletedbtn":function()
	{
		notcompleted = $('#notcompleted')
		notcompleted = notcompleted.val()
		Meteor.call("treatmentresult2",this.__originalId,notcompleted);
		Bert.alert("Tedavi Süreci Tamamlanmamıştır", "danger", "growl-top-right");
	}
});
Template.bilgiler.helpers({
	index: function () {
		return PatientIndex;
	},
	resultsCount: function() {
		return PatientIndex.getComponentDict().get('count');
	},
	hastas: function() {
    return Hastakayit.find({}, { sort: {rank: 1}});
	},

});
Template.duzenle.events({

	'click #save': function(e) {
		e.preventDefault();

		var hastaId = Session.get('selectedHastaId');
		var name = $('#name')
		name= name.val()
		var surname = $('#surname')
		surname= surname.val()
		var gender = $('#gender')
		gender= gender.val()
		var birthday = $('#birthday')
   	birthday=birthday.val()
		var phonenumber = $('#phonenumber')
		phonenumber= phonenumber.val()
		var email = $('#email')
		email= email.val()
		var closename = $('#closename')
		closename=closename.val()
		var closephonenumber = $('#closephonenumber')
		closephonenumber= closephonenumber.val()
		var allergies = $('#allergies')
   	allergies=allergies.val()
		var comorbid = $('#comorbid')
		comorbid= comorbid.val()
		var comorbidfactormedicine = $('#comorbidfactormedicine')
    comorbidfactormedicine=comorbidfactormedicine.val()
		var psychologicalmedicine = $('#psychologicalmedicine')
		psychologicalmedicine= psychologicalmedicine.val()
		var icdcode = $('#icdcode')
		icdcode= icdcode.val()
		var warnings = $('#warnings')
		warnings=warnings.val()

			_.extend(hasta, {id: hastaId});
			Meteor.call('editHastaname', this.__originalId,name);
			Meteor.call('editHastasurname', this.__originalId,surname);
			Meteor.call('editHastagender', this.__originalId,gender);
			Meteor.call('editHastabirthday', this.__originalId,birthday);
			Meteor.call('editHastaphonenumber', this.__originalId,phonenumber);
			Meteor.call('editHastaemail', this.__originalId,email);
			Meteor.call('editHastaclosename', this.__originalId,closename);
			Meteor.call('editHastaclosephonenumber', this.__originalId,closephonenumber);
			Meteor.call('editHastaallergies', this.__originalId,allergies);
			Meteor.call('editHastacomorbid', this.__originalId,comorbid);
			Meteor.call('editHastacomorbidfactormedicine', this.__originalId,comorbidfactormedicine);
			Meteor.call('editHastapsychologicalmedicine', this.__originalId,psychologicalmedicine);
			Meteor.call('editHastaicdcode', this.__originalId,icdcode);
			Meteor.call('editHastawarnings', this.__originalId,warnings);


			Bert.alert("Başarılı şekilde düzenlendi", "success", "growl-top-right");

		}

});
Template.duzenle.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	},
});
Template.duzenle2.events({

	'click #save': function(e) {
		e.preventDefault();

		var hastaId = Session.get('selectedHastaId');
		var treatmentmode = $('#treatmentmode')
		treatmentmode=treatmentmode.val()
		var treatmenttype = $('#treatmenttype')
		treatmenttype= treatmenttype.val()
		var signaltype = $('#signaltype')
		signaltype= signaltype.val()
		var sessionsnumber = $('#sessionsnumber')
   	sessionsnumber=sessionsnumber.val()
		var montage = $('#montage')
		montage= montage.val()
		var measurename = $('#measurename')
		measurename=measurename.val()


			_.extend(hasta, {id: hastaId});
			Meteor.call('editHastatreatmentmode', this.__originalId,treatmentmode);
			Meteor.call('editHastatreatmenttype', this.__originalId,treatmenttype);
			Meteor.call('editHastasignaltype', this.__originalId,signaltype);
			Meteor.call('editHastasessionsnumber', this.__originalId,sessionsnumber);
			Meteor.call('editHastameasurename', this.__originalId,measurename);



			Bert.alert("Başarılı şekilde düzenlendi", "success", "growl-top-right");

		}

});
Template.duzenle2.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	},
});
