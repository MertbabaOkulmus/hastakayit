Template.montrealgrafik1.helpers({
	selected: function() {
		return Session.equals("selectedpatient", this.__originalId) ? "selected" : '';
	}
});
Template.montrealgrafik.helpers({
	selectedName: function() {
		var hasta = PatientIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedpatient") });
		return hasta && hasta.tcno;
	},
	index: function () {
		return PatientIndex;
	}
});
Template.montrealgrafik.onCreated(function() {
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
	new Chart(ctx).Line(data);
};
Template.montrealgrafik.rendered = function(){

	Tracker.autorun(function () {
		if (chart1.ready()) {
			// var budgetdata = Hastakayit.findOne({__originalId:Session.get("selectedpatient")});
			var  budgetdata= PatientIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedpatient") });
			var datavalues=budgetdata.montrealmeasurescore;
			var datalabels=budgetdata.montrealtreatmenttime;
			drawchart(datavalues,datalabels);
		}
	});
};
Template.montrealgrafik.events({
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
});
