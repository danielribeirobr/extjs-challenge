Ext.define('AppName.model.Activity', function(){

	// Convert a string to a Javascript Date Object
	var parseDate = function(d) {
		var parts = d.split('.');
		return new Date(
			parseInt(parts[2], 10),
			parseInt(parts[1], 10) - 1,
			parseInt(parts[0], 10)
		);
	}

	// Count days between 2 dates
	var countDays = function(d1, d2) {
		return Math.round((d1-d2)/(1000*60*60*24));
	}

	return {
		extend: 'Ext.data.Model',

		fields: [
			{name: 'activity', type: 'auto'},
			{name: 'planned_start', type: 'auto', convert: parseDate},
			{name: 'actual_start', type: 'auto', convert: parseDate},
			{name: 'planned_end', type: 'auto', convert: parseDate},
			{name: 'actual_end', type: 'auto', convert: parseDate},
			{name: 'responsible_user', type: 'auto'},

			// Custom fields
			{name: 'start_days', calculate: function(r){ return countDays(r.actual_start, r.planned_start);}},
			{name: 'end_days', calculate: function(r){ return countDays(r.actual_end, r.planned_end);}}
		]
	}

});