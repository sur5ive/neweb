Meteor.startup(function () {

var teams = [
	{ "id": 1, "name": "FC Twister", "img": "fctwister.jpg", "url": "http://www.fctwister.ee" },
	{ "id": 2, "name": "Põhja-Tallinna JK", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 3, "name": "FC TVMK III", "img": "tvmk.jpg", "url": "http://fctvmk.pri.ee/news.php" },
	{ "id": 4, "name": "Saue JK II", "img": "sauejk.jpg", "url": "http://sauejk.saue.ee/" },
	{ "id": 5, "name": "FC Reaal", "img": "fcreaal.jpg", "url": "N/A" },
	{ "id": 6, "name": "Kaitsejõudude SK Juunior", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 7, "name": "JK Piraaja II", "img": "piraaja.jpg", "url": "http://www.jkpiraaja.ee/www/t_4liiga_2007.php" },
	{ "id": 8, "name": "Kehra Tempori", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 9, "name": "EPMÜ SK", "img": "epmysk.jpg", "url": "N/A" },
	{ "id": 10, "name": "SK Tapa", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 11, "name": "FC Loksa", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 12, "name": "JK Eston Villa", "img": "eston.jpg", "url": "http://www.estonvilla.ee/" },
	{ "id": 13, "name": "FC Kiiu", "img": "fckiiu.jpg", "url": "http://www.fckiiu.ee/" },
	{ "id": 14, "name": "FC Atletik Fan", "img": "atletik.jpg", "url": "N/A" },
	{ "id": 15, "name": "Nõmme Kalju III", "img": "kalju.jpg", "url": "N/A" },
	{ "id": 16, "name": "SK Tallinna Sport", "img": "esksport.jpg", "url": "http://www.esksport.ee/" },
	{ "id": 17, "name": "Põlva FC Lootos", "img": "fclootos.jpg", "url": "http://www.fclootos.ee/" },
	{ "id": 18, "name": "JK Tallinna Kalev U19", "img": "kalev.jpg", "url": "N/A" },
	{ "id": 19, "name": "FC EBS Team", "img": "ebsteam.jpg", "url": "N/A" },
	{ "id": 20, "name": "JK Videvik", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 21, "name": "FC Soccernet", "img": "soccernet.jpg", "url": "N/A" },
	{ "id": 22, "name": "Eurouniv FC", "img": "eufc.jpg", "url": "http://www.eufc.ee/" },
	{ "id": 23, "name": "JK Jalgpallihaigla", "img": "jalgpallihaigla.jpg", "url": "http://www.jalgpallihaigla.ee/" },
	{ "id": 24, "name": "FC Concordia Audentes", "img": "audentes.jpg", "url": "http://www.fcconcordia.ee/" },
	{ "id": 25, "name": "FC Muuga", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 26, "name": "FC Joker", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 27, "name": "FC Anzhi II", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 28, "name": "JK Loo", "img": "jkloo.jpg", "url": "http://www.fctiigrid.ee/" },
	{ "id": 29, "name": "FC Igiliikur", "img": "fcigiliikur.jpg", "url": "http://fcigiliikur.com/" },
	{ "id": 30, "name": "Betgenius FC", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 31, "name": "JK Sillamäe II", "img": "sillkalev.jpg", "url": "http://fcsillamae.ee/" },
	{ "id": 32, "name": "FC Velldoris", "img": "nologo.jpg", "url": "http://www.fcvelldoris.ee/" },
	{ "id": 33, "name": "K-Järve Lootus II", "img": "fclootus.jpg", "url": "http://www.fclootus.ee/" },
	{ "id": 34, "name": "JK Rada II", "img": "jkrada.jpg", "url": "http://jkrada.ee" },
	{ "id": 35, "name": "Tamme Auto III", "img": "tammeauto.jpg", "url": "http://www.sktammeauto.ee/" },
	{ "id": 36, "name": "JK Kaitseliit Kalev", "img": "kaitseliitkalev.jpg", "url": "http://www.jkkaitseliit-kalev.ee/" },
	{ "id": 37, "name": "Viljandi JK Tulevik II", "img": "tulevik.jpg", "url": "http://www.jktulevik.ee/" },
	{ "id": 38, "name": "Suema/Cargobus", "img": "jksuema.jpg", "url": "http://jksuema.net" },
	{ "id": 39, "name": "JK Rannamõisa", "img": "tabasalu.jpg", "url": null },
	{ "id": 40, "name": "Ambla Vallamk", "img": "ambla.jpg", "url": "http://www.amblavallameeskond.ee" },
	{ "id": 41, "name": "Rakvere Flora II", "img": "rkvflora.jpg", "url": null },
	{ "id": 42, "name": "JK RGR Airon", "img": "nologo.jpg", "url": null },
	{ "id": 43, "name": "Sörve JK", "img": "kuressaare.jpg", "url": "http://www.fckuressaare.ee" },
	{ "id": 44, "name": "Tamme Auto II", "img": "tammeauto.jpg", "url": "http://www.sktammeauto.ee/" },
	{ "id": 46, "name": "Tartu JK Tammeka II", "img": "nologo.jpg", "url": null },
	{ "id": 47, "name": "FC Levadia III", "img": "levadia.jpg", "url": "http://www.fclevadia.ee/" },
	{ "id": 48, "name": "Tallinna Kalev Jr", "img": "kalev.jpg", "url": "http://www.jkkalev.ee/" },
	{ "id": 49, "name": "FC Pokkeriprod", "img": "nologo.jpg", "url": "http://www.facebook.com/FCPokkeriprod" },
	{ "id": 50, "name": "JK Kaitseliit Kalev II", "img": "kaitseliitkalev.jpg", "url": "http://www.jkkaitseliit-kalev.ee/" },
	{ "id": 51, "name": "Tabasalu PK", "img": "tabasalu.jpg", "url": null },
	{ "id": 52, "name": "Pirita JK Reliikvia", "img": "nologo.jpg", "url": "http://www.facebook.com/reliikvia" },
	{ "id": 53, "name": "FC Hansa United", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 54, "name": "FC Majandusmag.", "img": "nologo.jpg", "url": "http://fc.magister.ee/" },
	{ "id": 55, "name": "Trummi SK", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 56, "name": "SK Mercury", "img": "nologo.jpg", "url": "N/A" },
	{ "id": 57, "name": "Saku Sporting", "img": "nologo.jpg", "url": "http://www.sakusporting.ee/" },
	{ "id": 58, "name": "Kristiine JK", "img": "nologo.jpg", "url": "http://www.kristiinejk.ee/" },
	{ "id": 59, "name": "FC Maardu", "img": "nologo.jpg", "url": null },
	{ "id": 60, "name": "FC Kuressaare", "img": "kuressaare.jpg", "url": null },
	{ "id": 61, "name": "FC Charma Mööbel", "img": "nologo.jpg", "url": null },
	{ "id": 62, "name": "TopSec LiVal Sport", "img": "nologo.jpg", "url": null },
	{ "id": 63, "name": "JK Visadus", "img": "nologo.jpg", "url": null },
	{ "id": 64, "name": "Paide Linnameeskond", "img": "nologo.jpg", "url": null },
	{ "id": 65, "name": "FC Hell Hunt", "img": "nologo.jpg", "url": null },
	{ "id": 66, "name": "Pärnu FC Metropool", "img": "nologo.jpg", "url": null },
	{ "id": 67, "name": "JK Tartu Tehased", "img": "nologo.jpg", "url": null },
	{ "id": 68, "name": "FC Kasakad", "img": "nologo.jpg", "url": null },
	{ "id": 69, "name": "Raasiku FC Joker II", "img": "nologo.jpg", "url": null },
	{ "id": 70, "name": "Tallinna Depoo", "img": "nologo.jpg", "url": null },
	{ "id": 71, "name": "Tallinna FC Castovanni Eagles II", "img": "nologo.jpg", "url": null },
	{ "id": 72, "name": "Türi Ganvix JK II", "img": "nologo.jpg", "url": null },
	{ "id": 73, "name": "FC TransferWise", "img": "nologo.jpg", "url": null },
	{ "id": 74, "name": "Tallinna Jalgpalliselts", "img": "nologo.jpg", "url": null },
	{ "id": 75, "name": "SK Imavere Forss", "img": "nologo.jpg", "url": null },
	{ "id": 76, "name": "Maardu United", "img": "nologo.jpg", "url": null },
	{ "id": 77, "name": "FCF Tallinna Ülikool II", "img": "nologo.jpg", "url": null },
	{ "id": 78, "name": "Valga FC Warrior", "img": "nologo.jpg", "url": null },
	{ "id": 79, "name": "Kohtla-Järve JK Järve", "img": "nologo.jpg", "url": null }
];

	if (Teams.find().count() < 1){
		teams.forEach(function(team){
			Teams.insert({
				id:		team.id,
				name:	team.name,
				img: 	team.img,
				url: 	team.url
			});
		}); // end of foreach
		
		console.log("Startup teams: " + Teams.find().count());
	
	} // end of if
	
});

