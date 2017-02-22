Meteor.startup(function () {

var venues = [
	{ "id": 1, "name": "Kalevi st kunstmuruväljak", "address": "Staadioni 8, Tallinn" },
	{ "id": 2, "name": "Wismari staadion", "address": "Wismari 15a, Tallinn" },
	{ "id": 3, "name": "Sportland Arena", "address": "Asula 4b, Tallinn" },
	{ "id": 4, "name": "Laagri kunstmuruväljak", "address": "Veskitammi 22, Laagri" },
	{ "id": 5, "name": "Mustjõe Gümnaasiumi staadion", "address": "Paldiski mnt 83, Tallinn" },
	{ "id": 6, "name": "Kehra linnastaadion", "address": "Kose mnt 12, Kehra" },
	{ "id": 7, "name": "Jägala Sõjaväelinnaku staadion", "address": "Jägala, Harjumaa" },
	{ "id": 9, "name": "Hiiu kunstmurustaadion", "address": "Pidu tn 11, Tallinn" },
	{ "id": 10, "name": "Lasnamäe KJH kunstmurustaadion", "address": "Punane 45, Tallinn" },
	{ "id": 11, "name": "Pirita Velodroom", "address": "Rummu tee 3, Tallinn" },
	{ "id": 12, "name": "Kuusalu KK staadion", "address": "Rihumägi, Kuusalu" },
	{ "id": 14, "name": "Tapa staadion", "address": "Spordi 8, Tapa" },
	{ "id": 15, "name": "Männiku staadion", "address": "Võidu 16, Tallinn" },
	{ "id": 16, "name": "Maardu kunstmurustaadion", "address": "" },
	{ "id": 17, "name": "Raasiku Põhikooli staadion", "address": "" },
	{ "id": 18, "name": "Lasnamäe SPK kunstmurustaadion", "address": "" },
	{ "id": 19, "name": "Astangu kunstmuruväljak", "address": "" },
	{ "id": 20, "name": "Jüri Gümnaasiumi staadion", "address": "" },
	{ "id": 21, "name": "Rakvere SPK kunstmurustaadion", "address": "Kastani puiestee 12, Rakvere" },
	{ "id": 22, "name": "Ahtme kunstmurustaadion", "address": "Altserva 6, Kohtla-Järve" },
	{ "id": 23, "name": "Kiviõli linnastaadion", "address": "Spordi 9, Kiviõli" },
	{ "id": 24, "name": "Sillamäe Kalevi staadion", "address": "Kesk 30, Sillamäe" },
	{ "id": 25, "name": "Maarjamäe kunstmurustaadion", "address": "Kose tee 4, Tallinn" },
	{ "id": 26, "name": "Voka staadion", "address": "Keskväljaku 1, Jõhvi" },
	{ "id": 27, "name": "Viljandi linnastaadion", "address": "Ranna pst 1, Viljandi" },
	{ "id": 28, "name": "Tabasalu staadion", "address": "Staadioni 16, Tabasalu" },
	{ "id": 29, "name": "Ambla staadion", "address": "Pikk 37, Ambla" },
	{ "id": 31, "name": "Loo kunstmuruväljak", "address": "" },
	{ "id": 32, "name": "Rakvere linnastaadion", "address": "" },
	{ "id": 33, "name": "Kalevi Keskstaadion", "address": "" },
	{ "id": 34, "name": "Kotka staadion", "address": "Linnu tee 9, Tallinn" },
	{ "id": 35, "name": "Saku kunstmurustaadion", "address": "Tallinna mnt 10, Saku" },
	{ "id": 36, "name": "Maardu linnastaadion", "address": "Karjääri 4, Maardu" },
	{ "id": 37, "name": "EJL TNTK staadion", "address": "Kotka 12, Tallinn" },
	{ "id": 38, "name": "Sõle gümnaasiumi staadion", "address": "Sõle 40, Tallinn" },
	{ "id": 39, "name": "Pärnu kunstmurustaadion", "address": "Mai 3, Pärnu" },
	{ "id": 40, "name": "Imavere Jalgpalliväljak", "address": "Mõmmimäe tee, Imavere" },
	{ "id": 41, "name": "Maardu kunstmuruväljak", "address": "Karjääri 4, Maardu" },
	{ "id": 42, "name": "Nike Arena", "address": "Asula 4c, Tallinn" },
	{ "id": 43, "name": "Kohtla-Järve Spordikeskuse staadion", "address": "Spordi 4, Kohtla-Järve" },
	{ "id": 44, "name": "Türi linnastaadion", "address": "Tolli 51,Türi" }

];

	if (Venues.find().count() < 1){
		venues.forEach(function(venue){
			Venues.insert({
				id:			venue.id,
				name:		venue.name,
				address: 	venue.address
			});
		}); // end of foreach
		
		console.log("Startup venues: " + Venues.find().count());
	
	} // end of if
	
});

