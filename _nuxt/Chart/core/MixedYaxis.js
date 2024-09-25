export const MixedYaxis = {
	custom: { hue: '' },
	design: {},
	attrs: {},
	categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
	series: [
		{ name: 'Income', type: 'column', data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6] },
		{ name: 'Cashflow', type: 'column', data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5] },
		{ name: 'Revenue', type: 'line', data: [20, 29, 37, 36, 44, 45, 50, 58] },
	],
	addon: {
		type: 'area',
		height: '100%',
		yaxis: [
			{ title: { text: 'Income (thousand crores)', style: { color: '#008FFB' } } },
			{
				opposite: true,
				title: {
					text: 'Operating Cashflow (thousand crores)',
					style: { color: '#00E396' },
				},
			},
			{
				opposite: true,
				title: { text: 'Revenue (thousand crores)', style: { color: '#FEB019' } },
			},
		],
		stroke: 'smooth',
		strokeWidth: 2,
		strokeDashes: 0,
		markers: 1,
		dark: true,
		fillSolid: true,
	},
};
