Meteor.publish("chart1", function () {
    return Hastakayit.find({},{value:1,itemname:1,_id:0});
  });
  Meteor.publish("chart2", function () {
      return Hastakayit.find({},{value:1,itemname:1,_id:0});

    });
    Meteor.publish("chart3", function () {
        return Hastakayit.find({},{value:1,itemname:1,_id:0});

      });
      Meteor.publish("chart4", function () {
          return Hastakayit.find({},{value:1,itemname:1,_id:0});

        });

        	Meteor.publish('Hastakayit', function() {
        		if(!this.userId){
        			return false;
        			throw new Meteor.Error('not authorized');
        		} else {
        			return Hastakayit.find();
        		}
        	});

        	Meteor.publish('Users', function() {
        		if(!this.userId){
        			return false;
        			throw new Meteor.Error('not authorized');
        		} else {
        			return Meteor.users.find();
        		}
        	});
