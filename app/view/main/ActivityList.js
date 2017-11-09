Ext.define('AppName.view.main.ActivityList', {
	extend: 'Ext.grid.Panel',
	xtype: 'activitylist',

	requires: [
		'AppName.store.Activity'
	],

	title: 'Activities',

	store: {
		type: 'activity'
	},

	columns: {
		defaults: {
			flex: 1
		},
		items: [
			{text: 'Activity', dataIndex: 'activity'},
			{text: 'Planned Start',  dataIndex: 'planned_start', renderer: Ext.util.Format.dateRenderer('d.m.Y')},

			{text: 'Actual Start',  dataIndex: 'actual_start', renderer: function(value, meta, record){
				if(record.get('start_days') > 0)
					meta.style = 'background-color:#F08080;';
				return Ext.util.Format.dateRenderer('d.m.Y')(value);
			}},

			{text: 'Planned End', dataIndex: 'planned_end', renderer: Ext.util.Format.dateRenderer('d.m.Y')},
			
			{text: 'Actual End', dataIndex: 'actual_end',  renderer: function(value, meta, record){
				if(record.get('end_days') > 0)
					meta.style = 'background-color:#F08080;';
				return Ext.util.Format.dateRenderer('d.m.Y')(value);			
			}},

			{text: 'Responsable', dataIndex: 'responsible_user'}		
		]
	}

});