Meteor.startup(function () {

var players = [
	{ "id": 1, "first": "Ain", "last": "Kaljumäe", "email": "ainu911@hotmail.com", "tel": "56951871", "bday": "1982-03-14", "nr": 32, "cl_pos": "POS:GK", "active": "yes" },
	{ "id": 2, "first": "Rando", "last": "Vatsfeldt", "email": "randovat@hotmail.com", "tel": "53605920", "bday": "1983-08-22", "nr": 2, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 3, "first": "Indrek", "last": "Kors", "email": "indrek.kors@mail.ee", "tel": "5062553", "bday": "1978-01-07", "nr": 3, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 4, "first": "Tõnu", "last": "Rumma", "email": "tonurumma@hot.ee", "tel": "5221926", "bday": "1981-05-14", "nr": 4, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 5, "first": "Andres", "last": "Unt", "email": "undusk@hotmail.com", "tel": "56475910", "bday": "1982-09-01", "nr": 5, "cl_pos": "POS:ST", "active": "yes" },
	{ "id": 6, "first": "Mikk", "last": "Vissak", "email": "mikk104@hot.ee", "tel": "53495247", "bday": "1982-10-06", "nr": 2, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 7, "first": "Tarmo", "last": "Roos", "email": "roos_tarmo@hotmail.com", "tel": "5237124", "bday": "1984-05-09", "nr": 7, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 8, "first": "Karpo", "last": "Korõtko", "email": "karpz@hot.ee", "tel": "5128382", "bday": "1983-05-02", "nr": 8, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 9, "first": "Ragnar", "last": "Bender", "email": "ragnar.bender@mail.ee", "tel": "58146224", "bday": "1981-01-18", "nr": 9, "cl_pos": "POS:ST", "active": "yes" },
	{ "id": 10, "first": "Andres", "last": "Sampka", "email": "boyaka909@hotmail.com", "tel": "5044765", "bday": "1985-05-02", "nr": 10, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 11, "first": "Björn", "last": "Baum", "email": "bjbaum@hot.ee", "tel": "55971298", "bday": "1981-04-03", "nr": 11, "cl_pos": "POS:ST", "active": "no" },
	{ "id": 12, "first": "Silver", "last": "Järvamägi", "email": "silver@kopkop.ee", "tel": "5215912", "bday": "1981-11-26", "nr": 12, "cl_pos": "POS:ST", "active": "no" },
	{ "id": 13, "first": "Heigo", "last": "Jakson", "email": "jackypiimapuding@hotmail.com", "tel": "5582801", "bday": "1984-07-14", "nr": 14, "cl_pos": "POS:MF", "active": "no" },
	{ "id": 14, "first": "Aigar", "last": "Roht", "email": "aigar@abkorrus.ee", "tel": "5263226", "bday": "1981-09-16", "nr": 15, "cl_pos": "POS:MF", "active": "no" },
	{ "id": 15, "first": "Indrek", "last": "Kallas", "email": "indrek@abkorrus.ee", "tel": "5216998", "bday": "1981-05-07", "nr": 16, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 16, "first": "Jaak", "last": "Viitmann", "email": "jaak@kprojekt.ee", "tel": "5224238", "bday": "1982-02-26", "nr": 17, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 17, "first": "Maidu", "last": "Üle", "email": "ozsyosmosy@hotmail.com", "tel": "55649209", "bday": "1983-03-28", "nr": 19, "cl_pos": "POS:MF", "active": "no" },
	{ "id": 18, "first": "Tõnu", "last": "Kirme", "email": "tonykirme@hotmail.com", "tel": "53304981", "bday": "1984-03-07", "nr": 20, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 19, "first": "Steiv", "last": "Silm", "email": "steiv@hot.ee", "tel": "56616570", "bday": "1983-09-18", "nr": 21, "cl_pos": "POS:GK", "active": "no" },
	{ "id": 20, "first": "Kristian", "last": "Kukk", "email": "cccp007@hotmail.com", "tel": "58001666", "bday": "1981-10-07", "nr": 11, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 21, "first": "Robert", "last": "Luht", "email": "bobrob@hot.ee", "tel": "5022487", "bday": "1981-10-27", "nr": 23, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 22, "first": "Maido", "last": "Puks", "email": "maido.puks@merko.ee", "tel": "56805299", "bday": "1983-07-02", "nr": 27, "cl_pos": "POS:MF", "active": "no" },
	{ "id": 23, "first": "Märt", "last": "Mõistus", "email": "muleiole@hotmail.com", "tel": "56636983", "bday": "1983-01-29", "nr": 29, "cl_pos": "POS:ST", "active": "yes" },
	{ "id": 24, "first": "Stevo", "last": "Poikalainen", "email": "stevo@bma.ee", "tel": "53805425", "bday": "1982-07-13", "nr": 33, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 25, "first": "Jaanus", "last": "Rumma", "email": "rumma@propartnerid.ee", "tel": "5054366", "bday": "1971-04-09", "nr": 35, "cl_pos": "POS:MF", "active": "no" },
	{ "id": 26, "first": "Märt", "last": "Rooden", "email": "martrooden@hotmail.com", "tel": "56642162", "bday": "1977-09-21", "nr": 66, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 27, "first": "Rando", "last": "Hallik", "email": "rando@bma.ee", "tel": "56608888", "bday": "1980-07-02", "nr": 88, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 28, "first": "Roman", "last": "Krõtin", "email": "dederom@hotmail.com", "tel": "53509119", "bday": "1974-05-06", "nr": 99, "cl_pos": "POS:MF", "active": "no" },
	{ "id": 29, "first": "Sander", "last": "Oder", "email": "sandaal@hotmail.com", "tel": "55569240", "bday": "1985-10-26", "nr": 26, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 30, "first": "Rando", "last": "Tomson", "email": "rando57@hot.ee", "tel": "5090297", "bday": "1983-12-08", "nr": 28, "cl_pos": "POS:MF", "active": "no" },
	{ "id": 31, "first": "Taavi", "last": "Kuusemäe", "email": "taavi@krimelte.ee", "tel": "56695080", "bday": "1975-06-03", "nr": 75, "cl_pos": "POS:ST", "active": "yes" },
	{ "id": 32, "first": "Raul", "last": "Viskar", "email": "coolerxxl@hotmail.com", "tel": "56666629", "bday": "1987-05-20", "nr": 4, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 33, "first": "Kaspar", "last": "Küünarpuu", "email": "kaspar@hillandknowlton.ee", "tel": "5019915", "bday": "1981-11-23", "nr": 25, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 34, "first": "Priit", "last": "Pichen", "email": "priidusson@gmail.com", "tel": "5122866", "bday": "1985-06-17", "nr": 85, "cl_pos": "POS:GK", "active": "yes" },
	{ "id": 35, "first": "Lauri", "last": "Lilleste", "email": "lauri432@hotmail.com", "tel": "53308975", "bday": "1984-03-21", "nr": 10, "cl_pos": "POS:ST", "active": "yes" },
	{ "id": 36, "first": "Mikk", "last": "Mölder", "email": "meedu@mail.com", "tel": "56155043", "bday": "", "nr": 84, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 37, "first": "Andrus", "last": "Stimmer", "email": "andrus110@hot.ee", "tel": "56643629", "bday": "", "nr": 64, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 38, "first": "Ivar", "last": "Rooden", "email": null, "tel": "5059672", "bday": "", "nr": 35, "cl_pos": "POS:MF", "active": "no" },
	{ "id": 39, "first": "Helar", "last": "Peetsalu", "email": "elz_elz81@hotmail.com", "tel": "56656325", "bday": "1981-12-05", "nr": 18, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 40, "first": "Sten", "last": "Kivistik", "email": "stenkivistik@hotmail.com", "tel": "56690722", "bday": "1983-06-30", "nr": 3, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 41, "first": "Tarmo", "last": "Kose", "email": "zupy18@hotmail.com", "tel": "5297884", "bday": "1985-05-16", "nr": 6, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 45, "first": "Viktor", "last": "Laurmaa", "email": "viktorlaurmaa@gmail.com", "tel": "53323652", "bday": "1983-11-15", "nr": 21, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 43, "first": "Mirko", "last": "Sprenk", "email": "mirko.sprenk@gmail.com", "tel": "5027687", "bday": "", "nr": 2, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 44, "first": "Elari", "last": "Moks", "email": "elari.moks@gmail.com", "tel": "5218373", "bday": "1981-08-14", "nr": 77, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 46, "first": "Maksim", "last": "Maljutin", "email": "mcmall@hot.ee", "tel": "56670085", "bday": "1978-05-26", "nr": 55, "cl_pos": "POS:GK", "active": "no" },
	{ "id": 47, "first": "Janar", "last": "Küla", "email": "janarkyla@gmail.com", "tel": "56211286", "bday": "1986-10-24", "nr": 16, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 48, "first": "Rain", "last": "Orro", "email": "pimeloom@hot.ee", "tel": "55540017", "bday": "1983-04-28", "nr": 15, "cl_pos": "POS:MF", "active": "no" },
	{ "id": 49, "first": "Tanno", "last": "Pikand", "email": "tanno_pikand@hotmail.com", "tel": "59023745", "bday": "1983-07-12", "nr": 28, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 50, "first": "Kaarel", "last": "Kluge", "email": "kaarel.kluge@gmail.com", "tel": "5073267", "bday": "1979-04-29", "nr": 80, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 51, "first": "Priit", "last": "Rosin", "email": "singner@gmail.com", "tel": "53831736", "bday": "1980-10-15", "nr": 69, "cl_pos": "POS:DF", "active": "no" },
	{ "id": 52, "first": "Kalle", "last": "Prank", "email": "kalle.prank@mail.ee", "tel": "5543010", "bday": "1984-08-04", "nr": 23, "cl_pos": "POS:ST", "active": "yes" },
	{ "id": 53, "first": "Tõnno", "last": "Pruul", "email": "tonno@kraft.ee", "tel": "56226222", "bday": "1981-07-30", "nr": 16, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 54, "first": "Alberto-Florin", "last": "Lupescu", "email": null, "tel": null, "bday": "1976-04-12", "nr": 14, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 55, "first": "Oliver", "last": "Rosar", "email": null, "tel": null, "bday": "1989-06-08", "nr": 69, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 56, "first": "Allan", "last": "Askileiskiri", "email": null, "tel": null, "bday": "1986-08-29", "nr": 33, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 57, "first": "Andre", "last": "Pommer", "email": null, "tel": null, "bday": "1988-02-27", "nr": 26, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 58, "first": "Rauno", "last": "Harkmann", "email": null, "tel": null, "bday": "1987-04-01", "nr": 22, "cl_pos": "POS:ST", "active": "yes" },
	{ "id": 59, "first": "Kert", "last": "Kadak", "email": null, "tel": null, "bday": "1984-06-20", "nr": 39, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 60, "first": "Jorma", "last": "Kosenkranius", "email": null, "tel": null, "bday": "1985-05-17", "nr": 16, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 61, "first": "Sander", "last": "Piiskop", "email": null, "tel": null, "bday": "1985-05-29", "nr": 15, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 62, "first": "Jesper", "last": "Veber", "email": null, "tel": null, "bday": "1984-09-01", "nr": 12, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 63, "first": "Veiko", "last": "Smolin", "email": "veiko.smolin@hotmail.com", "tel": null, "bday": "", "nr": 99, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 64, "first": "Raido", "last": "Tsukker", "email": null, "tel": null, "bday": "", "nr": 19, "cl_pos": "POS:ST", "active": "yes" },
	{ "id": 65, "first": "Kristo", "last": "Kanarbik", "email": null, "tel": null, "bday": "", "nr": 99, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 66, "first": "Andri", "last": "Milov", "email": null, "tel": null, "bday": "", "nr": 67, "cl_pos": "POS:MF", "active": "yes" },
	{ "id": 67, "first": "Reigo", "last": "Tori", "email": null, "tel": null, "bday": "", "nr": 27, "cl_pos": "POS:DF", "active": "yes" },
	{ "id": 68, "first": "Olaf", "last": "Sumberg", "email": null, "tel": null, "bday": "", "nr": 28, "cl_pos": "POS:GK", "active": "yes" },
	{ "id": 69, "first": "Stuart", "last": "Kinsey", "email": null, "tel": null, "bday": "", "nr": 13, "cl_pos": "POS:MF", "active": "yes" }
];

	if (Players.find().count() < 1){
		players.forEach(function(player){
			Players.insert({
				id:		player.id,
				first:	player.first,
				last: 	player.last,
				email: 	player.email,
				tel: 	player.tel,
				bday: 	player.bday,
				nr: 	player.nr,
				cl_pos: player.cl_pos,
				active: player.active
			});
		}); // end of foreach
		
		console.log("Startup players: " + Players.find().count());
	
	} // end of if
	
});

