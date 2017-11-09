Ext.define('AppName.view.main.UserList', {
	extend: 'Ext.grid.Panel',
	xtype: 'userlist',
	
	requires: [
		'AppName.store.User'
	],

	title: 'Users',

	controller: 'user',

	store: {
		type: 'user'
	},

	columns: {
		defaults: {
			flex: 1
		},
		items: [
			{text: 'Name', xtype: 'templatecolumn', tpl: '{lastname}, {firstname}'},
			{text: 'First Name',  dataIndex: 'firstname'},
			{text: 'Last Name',  dataIndex: 'lastname'},
			{text: 'Department', dataIndex: 'department'},
			{text: 'Email', dataIndex: 'email'},
			{text: 'Login', dataIndex: 'login'},
			{text: 'Status', dataIndex: 'status'}		
		]
	}
	
});
