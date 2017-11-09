Ext.define('AppName.store.User', {
	extend: 'Ext.data.Store',

	alias: 'store.user',
	autoLoad: true,

	require: [
		Ext.require('AppName.store.readers.Csv')
	],

	model: 'AppName.model.User',

	proxy: {
		type: 'ajax',
		reader: 'csv',
		url: 'data/users.csv'
	}
});
