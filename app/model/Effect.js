Ext.define('AppName.model.Effect', function(){

	// Parse to a Javascript date Object
	var parseDate = function(d) {
		var parts = d.split('/');
		return new Date(
			parseInt(parts[2], 10),
			parseInt(parts[1], 10) - 1,
			parseInt(parts[0], 10)
		);
	}

	// Remove "." and convert to integer
	var fixValue = function(v) {
		return parseInt(v.split('.').join(''));
	}

	return {
		extend: 'Ext.data.Model',

		fields: [
			{name: 'time', convert: parseDate},
			{name: 'plan', convert: fixValue},
			{name: 'actual', convert: fixValue}
		]	
	}
	
});