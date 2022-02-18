Template.akimsuregrafigi.helpers({
	selectedName: function() {
		var hasta = PatientIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedpatient") });
		return hasta && hasta.tcno;
	},
	index: function () {
		return PatientIndex;
	}
});
Template.akimsuregrafigi1.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	}
});
Template.akimsuregrafigi2.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	}
});
Template.akimsuregrafigi.onCreated(function() {
	chart1 = this.subscribe('chart1');
});
/*global drawchart */
drawchart = function(datavalues,datalabels){

	var data = {
		labels: datalabels,
		datasets: [
			{
				label: "My First dataset",
				fillColor: "rgba(255, 153, 0,0.4)",
				strokeColor: "rgba(191, 6, 0,1)",
				pointColor: "rgba(0,0,0,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: datavalues,
			},
		]
	};
	var ctx = $("#myChart").get(0).getContext("2d");
	new Chart(ctx).Bar(data);
};
Template.akimsuregrafigi.rendered = function(){

	Tracker.autorun(function () {
		if (chart1.ready()) {
			var  budgetdata= PatientIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedpatient") });
			var datavalues=budgetdata.signalcurrent;
			var datalabels=budgetdata.sessionsdate;
			console.log(datavalues);
			drawchart(datavalues,datalabels);
		}
	});
};
Template.akimsuregrafigi.events({
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
