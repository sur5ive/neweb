Meteor.startup(function () {

var competitions = [
	{ "id": 1, "name": "V Põhi/Ida 2006", "cl_comp": "COMP:LG" },
	{ "id": 2, "name": "Eesti jalgpalli 2006/2007.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 3, "name": "Eesti jalgpalli madalamate liigade 2006/2007.a. Karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 4, "name": "Aaspere Cup 2006", "cl_comp": "COMP:TO" },
	{ "id": 9, "name": "IV liiga Ida 2007", "cl_comp": "COMP:LG" },
	{ "id": 5, "name": "Kesklinna Karikas 2006", "cl_comp": "COMP:TO" },
	{ "id": 6, "name": "Kalevi Sügisturniir 2006", "cl_comp": "COMP:TO" },
	{ "id": 7, "name": "Saue Cup 2007", "cl_comp": "COMP:TO" },
	{ "id": 8, "name": "Hiiu Pubi Turniir 2007", "cl_comp": "COMP:TO" },
	{ "id": 20, "name": "Eesti jalgpalli 2007/2008.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 21, "name": "Eesti 2007.a. Väikesed karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 22, "name": "Sõprusmängud", "cl_comp": "COMP:FR" },
	{ "id": 23, "name": "Eesti 2008.a. Väikesed karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 24, "name": "IV liiga Ida 2008", "cl_comp": "COMP:LG" },
	{ "id": 25, "name": "IV liiga Ida 2009", "cl_comp": "COMP:LG" },
	{ "id": 26, "name": "Eesti jalgpalli 2008/2009.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 27, "name": "Eesti 2009.a. Väikesed karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 28, "name": "Eesti jalgpalli 2009/2010.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 29, "name": "IV liiga Ida 2010", "cl_comp": "COMP:LG" },
	{ "id": 30, "name": "Eesti 2010.a. Väikesed karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 31, "name": "Eesti jalgpalli 2010/2011.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 32, "name": "IV liiga Ida 2011", "cl_comp": "COMP:LG" },
	{ "id": 33, "name": "Eesti 2011.a. Väikesed karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 34, "name": "Eesti jalgpalli 2011/2012.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 35, "name": "IV liiga Põhi 2012", "cl_comp": "COMP:LG" },
	{ "id": 36, "name": "Eesti 2012.a. Väikesed karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 37, "name": "Eesti jalgpalli 2012/2013.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 38, "name": "IV liiga Põhi 2013", "cl_comp": "COMP:LG" },
	{ "id": 39, "name": "Eesti 2013.a. Väikesed karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 40, "name": "Eesti jalgpalli 2013/2014.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 41, "name": "IV liiga Põhi 2014", "cl_comp": "COMP:LG" },
	{ "id": 42, "name": "Eesti 2014.a. Väikesed karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 43, "name": "Eesti jalgpalli 2014/2015.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 44, "name": "IV liiga Põhi 2015", "cl_comp": "COMP:LG" },
	{ "id": 45, "name": "IV liiga Põhi/Ida 2016", "cl_comp": "COMP:LG" },
	{ "id": 46, "name": "Eesti 2015.a. Väikesed karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 47, "name": "Eesti jalgpalli 2015/2016.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 48, "name": "Eesti jalgpalli 2016/2017.a. karikavõistlused", "cl_comp": "COMP:CU" },
	{ "id": 49, "name": "Eesti 2016.a. Väikesed karikavõistlused", "cl_comp": "COMP:CU" }
];

	if (Competitions.find().count() < 1){
		competitions.forEach(function(competition){
			Competitions.insert({
				id:			competition.id,
				name:		competition.name,
				cl_comp: 	competition.cl_comp
			});
		}); // end of foreach
		
		console.log("Startup competitions: " + Competitions.find().count());
	
	} // end of if
	
});

