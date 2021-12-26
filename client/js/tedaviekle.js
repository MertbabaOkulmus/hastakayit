Template.tedaviekle.events({
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
	"click .treatmentbtn":function()
	{
		treatmentmode = $('#treatmentmode')
		treatmentmode = treatmentmode.val()
		treatmenttype = $('#treatmenttype')
		treatmenttype = treatmenttype.val()
		signaltype = $('#signaltype')
		signaltype = signaltype.val()
		sessionsnumber = $('#sessionsnumber')
		sessionsnumber= sessionsnumber.val()
		montage = $('#montage')
		montage= montage.val()
		Meteor.call("treatmentinfo",this.__originalId,treatmentmode,treatmenttype,signaltype,sessionsnumber,montage);
		Bert.alert("Başarılı şekilde gönderildi", "success", "growl-top-right");
	},
	"click .sessionsinfobtn":function()
	{
		signalcurrent = $('#signalcurrent')
		signalcurrent = signalcurrent.val()
		sessionstime= $('#sessionstime')
		sessionstime = sessionstime.val()
		sessionsdate = $('#sessionsdate')
		sessionsdate= sessionsdate.val()
		warnings2 = $('#warnings2')
		warnings2= warnings2.val()

		Meteor.call("sessionsinfo",this.__originalId, signalcurrent, sessionstime,	sessionsdate, warnings2);
		Bert.alert("Başarılı şekilde gönderildi", "success", "growl-top-right");
	}
});
Template.tedaviekle.helpers({
	index: function () {
		return PatientIndex;
	},
	resultsCount: function() {
		return PatientIndex.getComponentDict().get('count');
	},
});
Template.tedaviekle2.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	},
});
