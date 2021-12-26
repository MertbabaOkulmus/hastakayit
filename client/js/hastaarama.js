Template.hastaarama.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	},
	inputAttributes: function() {
		return { 'class': 'easy-search-input', 'placeholder': 'Tc numarası ile hasta ara' };
	},
	players: function() {
		return Hastakayit.find({}, { sort: { createdAt: -1 } });
	},
	selectedName: function() {
		var hasta = PatientIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedpatient") });
		return hasta && hasta.tcno;
	},
	index: function () {
		return PatientIndex;
	},
	resultsCount: function() {
		return PatientIndex.getComponentDict().get('count');
	}
});
Template.hastaarama.events({
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
	'click': function() {
		Session.set("selectedpatient", this.__originalId);
	},
});
