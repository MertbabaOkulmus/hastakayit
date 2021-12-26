if (Meteor.isServer) {
	Meteor.methods({
		// Hastaların veritabanına eklendiği yer.
		addhastas: function(tcno, idNumber, name,surname,gender,bloodgroup,birthday,phonenumber, email, closename, closephonenumber,
			allergies,comorbid,comorbidfactormedicine,psychologicalmedicine,icdcode,warnings
		) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('Yetkili değil');
				return false;
			} else {
				var username = Meteor.user().username;
				var year = new Date().getFullYear();
				var month = new Date().getMonth() + 1;
				var day = new Date().getDate();
				var date = (month + "/" + day + "/" + year).toString();

				Hastakayit.insert({
					tcno: tcno,
					idNumber:idNumber,
					name: name,
					surname:surname,
					gender:gender,
					bloodgroup:bloodgroup,
					birthday:birthday,
					phonenumber:phonenumber,
					email:email,
					closename:closename,
					closephonenumber:closephonenumber,
					allergies: allergies,
					comorbid:comorbid,
					comorbidfactormedicine:comorbidfactormedicine,
					psychologicalmedicine:psychologicalmedicine,
					icdcode:icdcode,
					warnings:warnings,
					treatmentresult:"Devam Ediyor",
					date: date,
					createdAt: new Date(),
					userIzd: Meteor.userId(),
				});
			}
		},
		treatmentinfo: function(tcno,treatmentmode,treatmenttype,signaltype,sessionsnumber,montage) {
			Hastakayit.update(tcno,	{$addToSet:{treatmentmode}});
			Hastakayit.update(tcno, { $addToSet: {treatmenttype}});
			Hastakayit.update(tcno, { $addToSet: {signaltype}});
			Hastakayit.update(tcno, { $addToSet: {sessionsnumber}});
			Hastakayit.update(tcno, { $push: {montage}});
		},

		sessionsinfo: function(tcno,signalcurrent,sessionstime,	sessionsdate,warnings2) {
			Hastakayit.update(tcno, { $push: {signalcurrent}});
			Hastakayit.update(tcno, { $push: {sessionstime}});
			Hastakayit.update(tcno, { $push: {sessionsdate}});
			if(warnings2 == "")
			{
				   	Hastakayit.update(tcno, { $push: {warnings2:"Bu Tedavi İçin Bir Not Eklenmedi."}});
			}
			else {
				   	Hastakayit.update(tcno, { $push: {warnings2}});
			}

		},
		treatmentresult1: function(tcno,completed) {
			Hastakayit.update(tcno,{$set: {treatmentresult:completed}});
		},
		treatmentresult2: function(tcno,notcompleted) {
			Hastakayit.update(tcno,{$set: {treatmentresult:notcompleted}});
		},
		hamiltonscore: function(tcno,hamilton,hamiltontreatmenttime,hamiltonmeausurescore) {
			Hastakayit.update(tcno,{$addToSet: {measurename:hamilton}});
			Hastakayit.update(tcno,{$push: {hamiltontreatmenttime:hamiltontreatmenttime,hamiltonmeausurescore:hamiltonmeausurescore}});
		},
		montrealscore: function(tcno,montreal,montrealtreatmenttime,montrealmeasurescore) {
			Hastakayit.update(tcno,{$addToSet: {measurename:montreal}});
			Hastakayit.update(tcno,{$push: {montrealtreatmenttime:montrealtreatmenttime}});
			Hastakayit.update(tcno, { $push: {montrealmeasurescore:montrealmeasurescore}});

		},
		editHastaname: function(tcno,name) {
			Hastakayit.update(tcno,{$set: { name:name}});
		},
		editHastasurname: function(tcno,surname) {
			Hastakayit.update(tcno,{$set: { surname:surname}});
		},
		editHastagender: function(tcno,gender) {
			Hastakayit.update(tcno,{$set: { gender:gender}});
		},
		editHastabirthday: function(tcno,birthday) {
			Hastakayit.update(tcno,{$set: { birthday:birthday}});
		},
		editHastaphonenumber: function(tcno,phonenumber) {
			Hastakayit.update(tcno,{$set: {phonenumber:phonenumber}});
		},
		editHastaemail: function(tcno,email) {
			Hastakayit.update(tcno,{$set: { email:email}});
		},
		editHastaclosename: function(tcno,closename) {
			Hastakayit.update(tcno,{$set: { closename:closename}});
		},
		editHastaclosephonenumber: function(tcno,closephonenumber) {
			Hastakayit.update(tcno,{$set: {closephonenumber:closephonenumber}});
		},
		editHastaallergies: function(tcno,allergies) {
			Hastakayit.update(tcno,{$set: { allergies:allergies}});
		},
		editHastacomorbid: function(tcno,comorbid) {
			Hastakayit.update(tcno,{$set: { comorbid:comorbid}});
		},
		editHastacomorbidfactormedicine: function(tcno,comorbidfactormedicine) {
			Hastakayit.update(tcno,{$set: {comorbidfactormedicine:comorbidfactormedicine}});
		},
		editHastapsychologicalmedicine: function(tcno,psychologicalmedicine) {
			Hastakayit.update(tcno,{$set: { psychologicalmedicine:psychologicalmedicine}});
		},
		editHastaicdcode: function(tcno,icdcode) {
			Hastakayit.update(tcno,{$set: { icdcode:icdcode}});
		},
		editHastawarnings: function(tcno,warnings) {
			Hastakayit.update(tcno,{$set: {warnings:warnings}});
		},
		editHastatreatmentmode: function(tcno,treatmentmode) {
			Hastakayit.update(tcno,{$set: { treatmentmode:treatmentmode}});
		},
		editHastatreatmenttype: function(tcno,treatmenttype) {
			Hastakayit.update(tcno,{$set: { treatmenttype:treatmenttype}});
		},
		editHastasignaltype: function(tcno,signaltype) {
			Hastakayit.update(tcno,{$set: { signaltype:signaltype}});
		},
		editHastasessionsnumber: function(tcno,sessionsnumber) {
			Hastakayit.update(tcno,{$set: { birthday:sessionsnumber}});
		},
		editHastamontage: function(tcno,montage) {
			Hastakayit.update(tcno,{$set: {montage:montage}});
		},
		editHastameasurename: function(tcno,measurename) {
			Hastakayit.update(tcno,{$set: {measurename:measurename}});
		},
		montgomeryscore: function(tcno,montgomery,montgomerytreatmenttime,montgomerymeasurescore) {
			Hastakayit.update(tcno,{$addToSet: {measurename:montgomery}});
			Hastakayit.update(tcno,{ $push: {montgomerytreatmenttime:montgomerytreatmenttime}});
			Hastakayit.update(tcno, { $push: {montgomerymeasurescore:montgomerymeasurescore}});
		},
		beckscore: function(tcno,beck,becktreatmenttime,beckmeasurescore) {
			Hastakayit.update(tcno,{$addToSet: {measurename:beck}});
			Hastakayit.update(tcno,{ $push: {becktreatmenttime:becktreatmenttime}});
			Hastakayit.update(tcno, { $push: {beckmeasurescore:beckmeasurescore}});
		},
		removeJoke: function(tcno) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('Yetkili değil');
				return false;
			} else {
				Hastakayit.remove(tcno);
			}
		}
	});
}
