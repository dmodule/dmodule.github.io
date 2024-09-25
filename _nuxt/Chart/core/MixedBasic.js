export const MixedBasic = {
	custom: { hue: '' },
	design: {},
	attrs: {},
	categories: [
		'Dec 01',
		'Dec 02',
		'Dec 03',
		'Dec 04',
		'Dec 05',
		'Dec 06',
		'Dec 07',
		'Dec 08',
		'Dec 09 ',
		'Dec 10',
		'Dec 11',
	],
	series: [
		{ name: 'TEAM A', type: 'column', data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33] },
		{ name: 'TEAM B', type: 'area', data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43] },
		{ name: 'TEAM C', type: 'line', data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39] },
	],
	addon: {
		type: 'area',
		height: '100%',
		stroke: 'smooth',
		strokeWidth: 2,
		strokeDashes: 0,
		markers: 1,
		dark: true,
	},
};
