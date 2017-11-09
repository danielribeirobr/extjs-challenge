Ext.define('AppName.store.Effect', {
	extend: 'Ext.data.Store',
	
	model: 'AppName.model.Effect',

	require: [
		Ext.require('AppName.store.readers.Csv')
	],	

	alias: 'store.effect',
	autoLoad: true,

	proxy: {
		type: 'ajax',
		reader: 'csv',
		url: 'data/effects.csv'
	}
});
