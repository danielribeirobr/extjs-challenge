Ext.define('AppName.view.main.EffectChart', {
	extend: 'Ext.chart.CartesianChart',

	title: 'Machine Performance',
	xtype: 'effect-chart',

	width: '100%',
	height: 500,	
	
	requires: [
		'Ext.chart.axis.Numeric',
		'Ext.chart.series.Line',
		'Ext.chart.axis.Category',
		'Ext.chart.grid.VerticalGrid',
		'Ext.chart.axis.Time'
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
		type: 'effect'
	},

	axes: [{
		type: 'time',
		position: 'bottom',
		fields: 'time',
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
		grid: true,
		title: 'Performance'
	}],

	series: [{
		type: 'line',
		xField: 'time',
		marker: true,
		yField: ['plan'],
		title: ['Planned']
	}, {
		type: 'line',
		xField: 'time',
		marker: true,
		yField: ['actual'],
		title: ['Actual']
	}]
});