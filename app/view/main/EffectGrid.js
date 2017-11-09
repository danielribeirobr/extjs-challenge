Ext.define('AppName.view.main.EffectGrid', {
	extend: 'Ext.grid.Panel',
	xtype: 'effect-grid',
	
	requires: [
		'AppName.store.Effect'
	],

	title: 'Effects',

	store: {
		type: 'effect'
	},

	columns: {
		defaults: {
			flex: 1
		},
		items: [
			{text: 'Time', dataIndex: 'time', renderer: Ext.util.Format.dateRenderer('d.m.Y')},
			{text: 'Plan',  dataIndex: 'plan', renderer: Ext.util.Format.numberRenderer('0,000')},
			{text: 'Actual',  dataIndex: 'actual', renderer: Ext.util.Format.numberRenderer('0,000')}
		]
	}	
});
