// Custom function to gather all stats (e.g. goals, 
// cards, appearances) into separate arrays, grouped by the fixture id
Array.prototype.groupBy = function(prop) {  		// define a new Array function to take the name of the 
                                                    // grouping property ("fixture_id") as the parameter; 
    return this.reduce(function(stats, item) {		// use Array.reduce() for accumulating the stats values; 
        var val = item[prop];						// value corresponding to property "fixture_id" fo current stats item
        stats[val] = stats[val] || [];				// if stats item with "fixture_id" value exists then use it, 
                                                    // otherwise assign a new empty array 
        stats[val].push(item);						// push the current stats item into the grouped array under 
                                                    // the respective "fixture_id" value;
        return stats;								// return the new stats array, grouped by "fixture_id"
    }, {});
}