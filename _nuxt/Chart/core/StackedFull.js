export const StackedFull = {
	custom: { hue: '' },
	design: {},
	attrs: {},
	categories: [
		'2011 Q1',
		'2011 Q2',
		'2011 Q3',
		'2011 Q4',
		'2012 Q1',
		'2012 Q2',
		'2012 Q3',
		'2012 Q4',
	],
	series: [
		{ name: 'PRODUCT A', data: [44, 55, 41, 67, 22, 43, 21, 49] },
		{ name: 'PRODUCT B', data: [13, 23, 20, 8, 13, 27, 33, 12] },
		{ name: 'PRODUCT C', data: [11, 17, 15, 15, 21, 14, 15, 13] },
	],
	addon: {
		type: 'bar',
		height: '100%',
		stacked: true,
		stackType: '100%',
		stroke: 'smooth',
		strokeWidth: 1,
		strokeDashes: 0,
		markers: 0,
		dark: true,
		fillSolid: true,
		dataLabels: true,
	},
};
