Ext.define('AppName.store.readers.Csv', {
	extend: 'Ext.data.reader.Json',

	alias: 'reader.csv',

	separator: ';',

	// converts csv string into json object
	csvToJson: function (csv) {
		var lines=csv.split("\n");
		var result = [];
		var headers=lines[0].split(this.separator);

		for(var i=1;i<lines.length;i++){
			if(lines[i].trim() == 0) // blank lines
				continue;

			var obj = {};
			var currentline=lines[i].split(this.separator);

			for(var j=0;j<headers.length;j++)
				obj[headers[j].trim()] = currentline[j];

			result.push(obj);
		}

		return result;
	},

	// override
	getResponseData: function (response) {
		return this.csvToJson(response.responseText);
	}
});