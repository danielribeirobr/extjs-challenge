Ext.define('AppName.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',

	alias: 'viewmodel.main',

	constructor: function() {
		this.callParent(arguments);
		this.setHomeText();
	},

	setHomeText: function() {		
		var me = this;
		Ext.Ajax.request({
			url: 'https://docs.google.com/document/d/e/2PACX-1vTBaDQSJoT9nfIlg5WJ6jqY16-WVUARLO5QcmHigKrcoNkOJERwlaVRMwjV3QYst3q8ULsAvJ1eGoL0/pub?embedded=true',

			success: function(response) {
				me.setData({
					homeText: response.responseText
				});
			},

			failure: function(response) {
				console.log('server-side failure with status code ' + response.status);
			}
		});
	},

	data: {
		name: 'AppName',
		homeText: 'This is the home text'
	}

});
