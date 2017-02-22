Meteor.startup(function () {

var classifiers = [
	{ "id": "COMP:LG", "name": "Liigamängud" },
	{ "id": "COMP:CU", "name": "Karikamängud" },
	{ "id": "COMP:TO", "name": "Turniirid" },
	{ "id": "COMP:FR", "name": "Sõprusmängud" },
	{ "id": "GOAL:PT", "name": "Penalty" },
	{ "id": "GOAL:FT", "name": "Foot" },
	{ "id": "GOAL:HE", "name": "Header" },
	{ "id": "GOAL:VO", "name": "Volley" },
	{ "id": "GOAL:NA", "name": "N/A" },
	{ "id": "CARD:Y", "name": "Kollane" },
	{ "id": "CARD:R", "name": "Punane" },
	{ "id": "CARD:YY", "name": "Teine kollane" },
	{ "id": "POS:GK", "name": "Väravavaht" },
	{ "id": "POS:DF", "name": "Kaitsja" },
	{ "id": "POS:MF", "name": "Poolkaitsja" },
	{ "id": "POS:ST", "name": "Ründaja" }
];

	if (Classifiers.find().count() < 1){
		classifiers.forEach(function(classifier){
			Classifiers.insert({
				id:		classifier.id,
				name:	classifier.name
			});
		}); // end of foreach
		
		console.log("Startup classifiers: " + Classifiers.find().count());
	
	} // end of if
	
});

