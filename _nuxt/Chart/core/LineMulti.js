export const LineMulti = {
	custom: { hue: '' },
	design: {},
	attrs: {},
	categories: [
		'01 Jan',
		'02 Jan',
		'03 Jan',
		'04 Jan',
		'05 Jan',
		'06 Jan',
		'07 Jan',
		'08 Jan',
		'09 Jan',
		'10 Jan',
		'11 Jan',
		'12 Jan',
	],
	series: [
		{ name: 'Session Duration', data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10] },
		{ name: 'Page Views', data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35] },
		{ name: 'Total Visits', data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47] },
	],
	addon: {
		type: 'line',
		height: '100%',
		stroke: 'straight',
		strokeWidth: 2,
		strokeDashes: 0,
		markers: 1,
		dark: true,
	},
};
