Meteor.startup(function () {

var tables = [
	{ "id": 1, "pos": 1, "team_id": 1, "won": 4, "drawn": 3, "lost": 11, "goals_f": 33, "goals_a": 57, "points": 15, "comp_id": 1 },
	{ "id": 2, "pos": 2, "team_id": 2, "won": 8, "drawn": 2, "lost": 8, "goals_f": 41, "goals_a": 35, "points": 26, "comp_id": 1 },
	{ "id": 3, "pos": 3, "team_id": 3, "won": 15, "drawn": 0, "lost": 3, "goals_f": 96, "goals_a": 30, "points": 45, "comp_id": 1 },
	{ "id": 4, "pos": 4, "team_id": 4, "won": 6, "drawn": 2, "lost": 10, "goals_f": 49, "goals_a": 59, "points": 20, "comp_id": 1 },
	{ "id": 5, "pos": 5, "team_id": 5, "won": 12, "drawn": 0, "lost": 6, "goals_f": 60, "goals_a": 57, "points": 36, "comp_id": 1 },
	{ "id": 6, "pos": 6, "team_id": 6, "won": 3, "drawn": 1, "lost": 14, "goals_f": 31, "goals_a": 80, "points": 10, "comp_id": 1 },
	{ "id": 7, "pos": 7, "team_id": 7, "won": 10, "drawn": 2, "lost": 6, "goals_f": 41, "goals_a": 33, "points": 32, "comp_id": 1 },
	{ "id": 8, "pos": 8, "team_id": 1, "won": 5, "drawn": 3, "lost": 8, "goals_f": 30, "goals_a": 42, "points": 18, "comp_id": 9 },
	{ "id": 9, "pos": 5, "team_id": 2, "won": 5, "drawn": 2, "lost": 9, "goals_f": 23, "goals_a": 51, "points": 17, "comp_id": 9 },
	{ "id": 10, "pos": 4, "team_id": 8, "won": 12, "drawn": 0, "lost": 4, "goals_f": 62, "goals_a": 28, "points": 36, "comp_id": 9 },
	{ "id": 11, "pos": 1, "team_id": 10, "won": 9, "drawn": 3, "lost": 4, "goals_f": 45, "goals_a": 22, "points": 30, "comp_id": 9 },
	{ "id": 12, "pos": 6, "team_id": 11, "won": 5, "drawn": 2, "lost": 9, "goals_f": 23, "goals_a": 32, "points": 17, "comp_id": 9 },
	{ "id": 13, "pos": 3, "team_id": 12, "won": 6, "drawn": 4, "lost": 6, "goals_f": 26, "goals_a": 34, "points": 22, "comp_id": 9 },
	{ "id": 14, "pos": 7, "team_id": 13, "won": 3, "drawn": 3, "lost": 10, "goals_f": 23, "goals_a": 41, "points": 12, "comp_id": 9 },
	{ "id": 15, "pos": 9, "team_id": 14, "won": 7, "drawn": 1, "lost": 8, "goals_f": 47, "goals_a": 38, "points": 22, "comp_id": 9 },
	{ "id": 16, "pos": 2, "team_id": 15, "won": 9, "drawn": 4, "lost": 3, "goals_f": 35, "goals_a": 26, "points": 31, "comp_id": 9 },
	{ "id": 17, "pos": 8, "team_id": 1, "won": 9, "drawn": 1, "lost": 10, "goals_f": 53, "goals_a": 59, "points": 28, "comp_id": 24 },
	{ "id": 18, "pos": 11, "team_id": 7, "won": 5, "drawn": 3, "lost": 12, "goals_f": 36, "goals_a": 60, "points": 18, "comp_id": 24 },
	{ "id": 19, "pos": 12, "team_id": 10, "won": 8, "drawn": 2, "lost": 10, "goals_f": 61, "goals_a": 50, "points": 26, "comp_id": 24 },
	{ "id": 20, "pos": 9, "team_id": 12, "won": 10, "drawn": 1, "lost": 9, "goals_f": 46, "goals_a": 55, "points": 31, "comp_id": 24 },
	{ "id": 21, "pos": 6, "team_id": 13, "won": 8, "drawn": 0, "lost": 12, "goals_f": 44, "goals_a": 54, "points": 24, "comp_id": 24 },
	{ "id": 22, "pos": 3, "team_id": 14, "won": 13, "drawn": 2, "lost": 5, "goals_f": 80, "goals_a": 52, "points": 41, "comp_id": 24 },
	{ "id": 23, "pos": 7, "team_id": 25, "won": 11, "drawn": 5, "lost": 4, "goals_f": 52, "goals_a": 33, "points": 38, "comp_id": 24 },
	{ "id": 24, "pos": 5, "team_id": 26, "won": 17, "drawn": 2, "lost": 1, "goals_f": 86, "goals_a": 20, "points": 53, "comp_id": 24 },
	{ "id": 25, "pos": 2, "team_id": 27, "won": 7, "drawn": 4, "lost": 9, "goals_f": 36, "goals_a": 53, "points": 25, "comp_id": 24 },
	{ "id": 26, "pos": 10, "team_id": 28, "won": 9, "drawn": 3, "lost": 8, "goals_f": 53, "goals_a": 45, "points": 30, "comp_id": 24 },
	{ "id": 27, "pos": 4, "team_id": 29, "won": 1, "drawn": 1, "lost": 18, "goals_f": 27, "goals_a": 93, "points": 4, "comp_id": 24 },
	{ "id": 28, "pos": 1, "team_id": 1, "won": 4, "drawn": 1, "lost": 17, "goals_f": 34, "goals_a": 93, "points": 13, "comp_id": 25 },
	{ "id": 29, "pos": 2, "team_id": 7, "won": 6, "drawn": 4, "lost": 12, "goals_f": 31, "goals_a": 64, "points": 22, "comp_id": 25 },
	{ "id": 30, "pos": 3, "team_id": 10, "won": 13, "drawn": 1, "lost": 8, "goals_f": 74, "goals_a": 51, "points": 40, "comp_id": 25 },
	{ "id": 31, "pos": 4, "team_id": 12, "won": 7, "drawn": 4, "lost": 11, "goals_f": 36, "goals_a": 46, "points": 25, "comp_id": 25 },
	{ "id": 32, "pos": 5, "team_id": 13, "won": 3, "drawn": 3, "lost": 16, "goals_f": 35, "goals_a": 80, "points": 12, "comp_id": 25 },
	{ "id": 33, "pos": 6, "team_id": 27, "won": 7, "drawn": 4, "lost": 11, "goals_f": 32, "goals_a": 38, "points": 25, "comp_id": 25 },
	{ "id": 34, "pos": 7, "team_id": 29, "won": 9, "drawn": 3, "lost": 10, "goals_f": 45, "goals_a": 51, "points": 30, "comp_id": 25 },
	{ "id": 35, "pos": 8, "team_id": 31, "won": 17, "drawn": 0, "lost": 5, "goals_f": 67, "goals_a": 23, "points": 51, "comp_id": 25 },
	{ "id": 36, "pos": 9, "team_id": 32, "won": 14, "drawn": 4, "lost": 4, "goals_f": 60, "goals_a": 26, "points": 46, "comp_id": 25 },
	{ "id": 37, "pos": 10, "team_id": 33, "won": 16, "drawn": 2, "lost": 4, "goals_f": 80, "goals_a": 35, "points": 50, "comp_id": 25 },
	{ "id": 38, "pos": 11, "team_id": 34, "won": 8, "drawn": 3, "lost": 11, "goals_f": 34, "goals_a": 40, "points": 27, "comp_id": 25 },
	{ "id": 39, "pos": 12, "team_id": 35, "won": 12, "drawn": 3, "lost": 7, "goals_f": 51, "goals_a": 32, "points": 39, "comp_id": 25 },
	{ "id": 40, "pos": 1, "team_id": 1, "won": 8, "drawn": 4, "lost": 10, "goals_f": 41, "goals_a": 51, "points": 28, "comp_id": 29 },
	{ "id": 41, "pos": 2, "team_id": 12, "won": 14, "drawn": 2, "lost": 6, "goals_f": 57, "goals_a": 22, "points": 44, "comp_id": 29 },
	{ "id": 42, "pos": 3, "team_id": 13, "won": 7, "drawn": 4, "lost": 11, "goals_f": 29, "goals_a": 66, "points": 25, "comp_id": 29 },
	{ "id": 43, "pos": 4, "team_id": 28, "won": 5, "drawn": 1, "lost": 16, "goals_f": 36, "goals_a": 73, "points": 16, "comp_id": 29 },
	{ "id": 44, "pos": 5, "team_id": 7, "won": 6, "drawn": 2, "lost": 14, "goals_f": 31, "goals_a": 82, "points": 20, "comp_id": 29 },
	{ "id": 45, "pos": 6, "team_id": 39, "won": 10, "drawn": 4, "lost": 8, "goals_f": 53, "goals_a": 40, "points": 34, "comp_id": 29 },
	{ "id": 46, "pos": 7, "team_id": 38, "won": 5, "drawn": 4, "lost": 13, "goals_f": 23, "goals_a": 78, "points": 19, "comp_id": 29 },
	{ "id": 47, "pos": 8, "team_id": 44, "won": 16, "drawn": 2, "lost": 4, "goals_f": 75, "goals_a": 23, "points": 50, "comp_id": 29 },
	{ "id": 48, "pos": 9, "team_id": 41, "won": 20, "drawn": 1, "lost": 1, "goals_f": 112, "goals_a": 13, "points": 61, "comp_id": 29 },
	{ "id": 49, "pos": 10, "team_id": 27, "won": 7, "drawn": 5, "lost": 10, "goals_f": 31, "goals_a": 51, "points": 26, "comp_id": 29 },
	{ "id": 50, "pos": 11, "team_id": 29, "won": 12, "drawn": 4, "lost": 6, "goals_f": 68, "goals_a": 31, "points": 40, "comp_id": 29 },
	{ "id": 51, "pos": 12, "team_id": 40, "won": 5, "drawn": 1, "lost": 16, "goals_f": 42, "goals_a": 68, "points": 16, "comp_id": 29 },
	{ "id": 52, "pos": 1, "team_id": 1, "won": 17, "drawn": 1, "lost": 4, "goals_f": 58, "goals_a": 23, "points": 52, "comp_id": 32 },
	{ "id": 53, "pos": 2, "team_id": 10, "won": 11, "drawn": 6, "lost": 5, "goals_f": 48, "goals_a": 38, "points": 39, "comp_id": 32 },
	{ "id": 54, "pos": 3, "team_id": 29, "won": 13, "drawn": 5, "lost": 4, "goals_f": 61, "goals_a": 19, "points": 44, "comp_id": 32 },
	{ "id": 55, "pos": 4, "team_id": 27, "won": 0, "drawn": 0, "lost": 22, "goals_f": 0, "goals_a": 33, "points": 0, "comp_id": 32 },
	{ "id": 56, "pos": 5, "team_id": 38, "won": 6, "drawn": 3, "lost": 13, "goals_f": 31, "goals_a": 56, "points": 21, "comp_id": 32 },
	{ "id": 57, "pos": 6, "team_id": 40, "won": 10, "drawn": 3, "lost": 9, "goals_f": 50, "goals_a": 48, "points": 33, "comp_id": 32 },
	{ "id": 58, "pos": 7, "team_id": 13, "won": 7, "drawn": 2, "lost": 13, "goals_f": 37, "goals_a": 65, "points": 23, "comp_id": 32 },
	{ "id": 59, "pos": 8, "team_id": 28, "won": 14, "drawn": 6, "lost": 2, "goals_f": 80, "goals_a": 25, "points": 48, "comp_id": 32 },
	{ "id": 60, "pos": 9, "team_id": 7, "won": 6, "drawn": 7, "lost": 9, "goals_f": 23, "goals_a": 34, "points": 25, "comp_id": 32 },
	{ "id": 61, "pos": 10, "team_id": 47, "won": 14, "drawn": 3, "lost": 5, "goals_f": 66, "goals_a": 24, "points": 45, "comp_id": 32 },
	{ "id": 62, "pos": 11, "team_id": 48, "won": 10, "drawn": 4, "lost": 8, "goals_f": 47, "goals_a": 45, "points": 34, "comp_id": 32 },
	{ "id": 63, "pos": 12, "team_id": 49, "won": 3, "drawn": 2, "lost": 17, "goals_f": 18, "goals_a": 109, "points": 11, "comp_id": 32 },
	{ "id": 64, "pos": 1, "team_id": 1, "won": 11, "drawn": 4, "lost": 7, "goals_f": 39, "goals_a": 32, "points": 37, "comp_id": 35 },
	{ "id": 65, "pos": 2, "team_id": 5, "won": 8, "drawn": 1, "lost": 13, "goals_f": 40, "goals_a": 49, "points": 25, "comp_id": 35 },
	{ "id": 66, "pos": 3, "team_id": 15, "won": 10, "drawn": 8, "lost": 4, "goals_f": 37, "goals_a": 24, "points": 38, "comp_id": 35 },
	{ "id": 67, "pos": 4, "team_id": 21, "won": 8, "drawn": 4, "lost": 10, "goals_f": 46, "goals_a": 56, "points": 28, "comp_id": 35 },
	{ "id": 68, "pos": 5, "team_id": 23, "won": 12, "drawn": 5, "lost": 5, "goals_f": 49, "goals_a": 30, "points": 41, "comp_id": 35 },
	{ "id": 69, "pos": 6, "team_id": 52, "won": 11, "drawn": 3, "lost": 8, "goals_f": 38, "goals_a": 32, "points": 36, "comp_id": 35 },
	{ "id": 70, "pos": 7, "team_id": 53, "won": 9, "drawn": 2, "lost": 11, "goals_f": 42, "goals_a": 42, "points": 29, "comp_id": 35 },
	{ "id": 71, "pos": 8, "team_id": 54, "won": 2, "drawn": 2, "lost": 18, "goals_f": 19, "goals_a": 57, "points": 8, "comp_id": 35 },
	{ "id": 72, "pos": 9, "team_id": 55, "won": 16, "drawn": 1, "lost": 5, "goals_f": 73, "goals_a": 29, "points": 49, "comp_id": 35 },
	{ "id": 73, "pos": 10, "team_id": 56, "won": 5, "drawn": 0, "lost": 17, "goals_f": 34, "goals_a": 81, "points": 15, "comp_id": 35 },
	{ "id": 74, "pos": 11, "team_id": 57, "won": 9, "drawn": 3, "lost": 10, "goals_f": 34, "goals_a": 33, "points": 30, "comp_id": 35 },
	{ "id": 75, "pos": 12, "team_id": 58, "won": 11, "drawn": 7, "lost": 4, "goals_f": 43, "goals_a": 29, "points": 40, "comp_id": 35 },
	{ "id": 76, "pos": 1, "team_id": 1, "won": 11, "drawn": 2, "lost": 7, "goals_f": 52, "goals_a": 50, "points": 35, "comp_id": 38 },
	{ "id": 77, "pos": 2, "team_id": 5, "won": 4, "drawn": 4, "lost": 12, "goals_f": 29, "goals_a": 57, "points": 16, "comp_id": 38 },
	{ "id": 78, "pos": 3, "team_id": 15, "won": 15, "drawn": 4, "lost": 1, "goals_f": 70, "goals_a": 15, "points": 49, "comp_id": 38 },
	{ "id": 79, "pos": 4, "team_id": 21, "won": 8, "drawn": 3, "lost": 9, "goals_f": 42, "goals_a": 47, "points": 27, "comp_id": 38 },
	{ "id": 80, "pos": 5, "team_id": 38, "won": 13, "drawn": 2, "lost": 5, "goals_f": 64, "goals_a": 24, "points": 41, "comp_id": 38 },
	{ "id": 81, "pos": 6, "team_id": 52, "won": 4, "drawn": 6, "lost": 10, "goals_f": 41, "goals_a": 52, "points": 18, "comp_id": 38 },
	{ "id": 82, "pos": 7, "team_id": 54, "won": 4, "drawn": 2, "lost": 14, "goals_f": 32, "goals_a": 101, "points": 14, "comp_id": 38 },
	{ "id": 83, "pos": 8, "team_id": 56, "won": 3, "drawn": 1, "lost": 16, "goals_f": 29, "goals_a": 66, "points": 10, "comp_id": 38 },
	{ "id": 84, "pos": 9, "team_id": 57, "won": 8, "drawn": 5, "lost": 7, "goals_f": 41, "goals_a": 35, "points": 29, "comp_id": 38 },
	{ "id": 85, "pos": 10, "team_id": 61, "won": 15, "drawn": 3, "lost": 2, "goals_f": 78, "goals_a": 27, "points": 48, "comp_id": 38 },
	{ "id": 86, "pos": 11, "team_id": 62, "won": 7, "drawn": 4, "lost": 9, "goals_f": 42, "goals_a": 46, "points": 25, "comp_id": 38 },
	{ "id": 87, "pos": 5, "team_id": 1, "won": 8, "drawn": 0, "lost": 12, "goals_f": 50, "goals_a": 61, "points": 24, "comp_id": 41 },
	{ "id": 88, "pos": 6, "team_id": 5, "won": 7, "drawn": 1, "lost": 12, "goals_f": 35, "goals_a": 49, "points": 22, "comp_id": 41 },
	{ "id": 89, "pos": 7, "team_id": 7, "won": 5, "drawn": 6, "lost": 9, "goals_f": 27, "goals_a": 64, "points": 21, "comp_id": 41 },
	{ "id": 90, "pos": 4, "team_id": 12, "won": 9, "drawn": 3, "lost": 8, "goals_f": 52, "goals_a": 31, "points": 30, "comp_id": 41 },
	{ "id": 91, "pos": 2, "team_id": 21, "won": 12, "drawn": 2, "lost": 6, "goals_f": 52, "goals_a": 31, "points": 38, "comp_id": 41 },
	{ "id": 92, "pos": 3, "team_id": 23, "won": 9, "drawn": 6, "lost": 5, "goals_f": 53, "goals_a": 30, "points": 33, "comp_id": 41 },
	{ "id": 93, "pos": 1, "team_id": 52, "won": 16, "drawn": 1, "lost": 3, "goals_f": 63, "goals_a": 20, "points": 49, "comp_id": 41 },
	{ "id": 94, "pos": 8, "team_id": 54, "won": 2, "drawn": 5, "lost": 13, "goals_f": 20, "goals_a": 66, "points": 11, "comp_id": 41 },
	{ "id": 95, "pos": 1, "team_id": 1, "won": 9, "drawn": 4, "lost": 8, "goals_f": 42, "goals_a": 41, "points": 31, "comp_id": 44 },
	{ "id": 96, "pos": 2, "team_id": 12, "won": 17, "drawn": 2, "lost": 2, "goals_f": 73, "goals_a": 21, "points": 53, "comp_id": 44 },
	{ "id": 97, "pos": 3, "team_id": 23, "won": 5, "drawn": 6, "lost": 10, "goals_f": 41, "goals_a": 71, "points": 21, "comp_id": 44 },
	{ "id": 98, "pos": 4, "team_id": 5, "won": 6, "drawn": 1, "lost": 14, "goals_f": 36, "goals_a": 64, "points": 19, "comp_id": 44 },
	{ "id": 99, "pos": 5, "team_id": 58, "won": 6, "drawn": 4, "lost": 11, "goals_f": 39, "goals_a": 51, "points": 22, "comp_id": 44 },
	{ "id": 100, "pos": 6, "team_id": 65, "won": 15, "drawn": 3, "lost": 3, "goals_f": 59, "goals_a": 27, "points": 48, "comp_id": 44 },
	{ "id": 101, "pos": 7, "team_id": 7, "won": 10, "drawn": 3, "lost": 8, "goals_f": 59, "goals_a": 50, "points": 33, "comp_id": 44 },
	{ "id": 102, "pos": 8, "team_id": 54, "won": 2, "drawn": 5, "lost": 14, "goals_f": 26, "goals_a": 50, "points": 11, "comp_id": 44 },
	{ "id": 103, "pos": 1, "team_id": 1, "won": 6, "drawn": 3, "lost": 9, "goals_f": 42, "goals_a": 59, "points": 21, "comp_id": 45 },
	{ "id": 104, "pos": 2, "team_id": 69, "won": 15, "drawn": 0, "lost": 3, "goals_f": 75, "goals_a": 25, "points": 45, "comp_id": 45 },
	{ "id": 105, "pos": 3, "team_id": 58, "won": 12, "drawn": 1, "lost": 5, "goals_f": 48, "goals_a": 34, "points": 37, "comp_id": 45 },
	{ "id": 106, "pos": 4, "team_id": 70, "won": 11, "drawn": 2, "lost": 5, "goals_f": 47, "goals_a": 39, "points": 35, "comp_id": 45 },
	{ "id": 107, "pos": 5, "team_id": 71, "won": 9, "drawn": 2, "lost": 7, "goals_f": 47, "goals_a": 43, "points": 29, "comp_id": 45 },
	{ "id": 108, "pos": 6, "team_id": 21, "won": 10, "drawn": 0, "lost": 8, "goals_f": 51, "goals_a": 35, "points": 30, "comp_id": 45 },
	{ "id": 109, "pos": 7, "team_id": 72, "won": 9, "drawn": 1, "lost": 8, "goals_f": 39, "goals_a": 39, "points": 28, "comp_id": 45 },
	{ "id": 110, "pos": 8, "team_id": 73, "won": 5, "drawn": 3, "lost": 10, "goals_f": 43, "goals_a": 56, "points": 18, "comp_id": 45 },
	{ "id": 111, "pos": 9, "team_id": 74, "won": 1, "drawn": 2, "lost": 15, "goals_f": 21, "goals_a": 63, "points": 5, "comp_id": 45 },
	{ "id": 112, "pos": 10, "team_id": 5, "won": 3, "drawn": 4, "lost": 11, "goals_f": 30, "goals_a": 50, "points": 13, "comp_id": 45 }
];

	if (Tables.find().count() < 1){
		tables.forEach(function(table){
			Tables.insert({
				id:			table.id,
				pos:		table.pos,
				team_id: 	table.team_id,
				won:	 	table.won,
				drawn:	 	table.drawn,
				lost:	 	table.lost,
				goals_f:	table.goals_f,
				goals_f:	table.goals_a,
				points:		table.points,
				comp_id:	table.comp_id
			});
		}); // end of foreach
		
		console.log("Startup tables: " + Tables.find().count());
	
	} // end of if
	
});

