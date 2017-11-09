Ext.define('AppName.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'AppName.view.main.MainController',

		// Users
		'AppName.view.main.UserController',
		'AppName.view.main.UserList',
		'AppName.view.main.UserDetail',
		'AppName.view.main.UserViewModel',

		// Activities
		'AppName.view.main.ActivityList',
		'AppName.view.main.ActivityChart',

		// Effect
		'AppName.view.main.EffectChart',
		'AppName.view.main.EffectGrid'
	],

	controller: 'main',
	viewModel: 'main',

	ui: 'navigation',

	tabBarHeaderPosition: 1,
	titleRotation: 0,
	tabRotation: 0,

	header: {
		layout: {
			align: 'stretchmax'
		},
		title: {
			bind: {
				text: '{name}'
			},
			flex: 0
		},
		iconCls: 'fa-th-list'
	},

	tabBar: {
		flex: 1,
		layout: {
			align: 'stretch',
			overflowHandler: 'none'
		}
	},

	responsiveConfig: {
		tall: {
			headerPosition: 'top'
		},
		wide: {
			headerPosition: 'left'
		}
	},

	defaults: {
		bodyPadding: 20,
		scrollable: 'y',
		tabConfig: {
			plugins: 'responsive',
			responsiveConfig: {
				wide: {
					iconAlign: 'left',
					textAlign: 'left'
				},
				tall: {
					iconAlign: 'top',
					textAlign: 'center',
					width: 120
				}
			}
		},
	},

	items: [{
		title: 'Home',
		iconCls: 'fa-home',
		bind: {
			html: '{homeText}'
		}
	}, {
		title: 'Users',
		iconCls: 'fa-user',
		items: [{
			xtype: 'userlist'
		}]		
	}, {
		title: 'Activities',
		iconCls: 'fa-tasks',
		items: [{
			xtype: 'activitylist'
		}]		
	}, {
		title: 'Activities Delays',
		iconCls: 'fa-bar-chart',
		items: [{
			xtype: 'activity-chart'
		}]
	}, {
		title: 'Machine Performance',
		iconCls: 'fa-line-chart',
		items: [{
			xtype: 'effect-chart'
		}, {
			xtype: 'effect-grid'
		}]
	}]
});
