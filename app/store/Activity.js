Ext.define('AppName.store.Activity', {
	extend: 'Ext.data.Store',
	
	model: 'AppName.model.Activity',

	require: [
		Ext.require('AppName.store.readers.Csv')
	],	

	alias: 'store.activity',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		reader: 'csv',
		url: 'data/activities.csv'
	}
});
