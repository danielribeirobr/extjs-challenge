/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('AppName.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',

	controller: 'main',
	viewModel: 'main',

	defaults: {
		tab: {
			iconAlign: 'top'
		},
		styleHtmlContent: true
	},

	tabBarPosition: 'bottom'
});
