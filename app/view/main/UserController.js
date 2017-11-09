Ext.define('AppName.view.main.UserController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.user',

	control: {
		'gridpanel': {
			select: 'onItemSelected'
		}
	},

	onItemSelected: function (sender, record) {
		Ext.create('Ext.window.Window', {
			id: 'userDetailWindow',
			title: 'Edit user details',
			height: 400,
			width: 600,
			layout: 'fit',
			items: [{
				xtype: 'userdetail',
				id: 'userdetailForm',
				viewModel: {
					data: {
						rec: record
					}
				}					
			}]
		}).show();
	},

	btnSaveItem: function(button) {
		Ext.getCmp('userdetailForm').getViewModel().getData().rec.commit();
		Ext.getCmp('userDetailWindow').close();
	},

	btnCancel: function(button) {
		Ext.getCmp('userdetailForm').getViewModel().getData().rec.reject();
		Ext.getCmp('userDetailWindow').close();
	}

});
