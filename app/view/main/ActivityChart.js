Ext.define('AppName.view.main.ActivityChart', {
	extend: 'Ext.chart.CartesianChart',

	title: 'Days in Delay',
	xtype: 'activity-chart',

    width: '100%',
    height: 500,	
	
	requires: [
		'Ext.chart.axis.Numeric',
		'Ext.chart.series.Bar3D',
		'Ext.chart.axis.Category3D',
		'Ext.chart.grid.VerticalGrid3D'
	],

	legend: {
		docked: 'bottom'
	},            

	innerPadding: {
		top: 50,
		left: 10,
		right: 10,
		bottom: 0
	},

	store: {
		type: 'activity'
	},

	axes: [{
		type: 'category3d',
		position: 'bottom',
		fields: 'activity',
		grid: true,
		label: {
			rotate: {
				degrees: -90
			},
			textAlign: 'start'
		}
	}, {
		type: 'numeric',
		position: 'left',
		grid: true
	}],

	series: [{
		type: 'bar3d',
		xField: 'activity',
		stacked: false,
		title: ['Delay in days on Start', 'Delay in days on End'],
		yField: ['start_days', 'end_days']
	}]
});