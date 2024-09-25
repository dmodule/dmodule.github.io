export const RadarMulti = {
	custom: { hue: '' },
	design: {},
	attrs: {},
	categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	series: [
		{ name: 'Working', data: [18, 70, 100, 57, 45, 86, 33] },
		{ name: 'Entertainment', data: [100, 30, 20, 72, 64, 80, 83] },
		{ name: 'Living', data: [73, 63, 60, 45, 88, 55, 68] },
	],
	addon: {
		type: 'radar',
		height: '100%',
		dark: true,
		fillSolid: true,
		strokeWidth: 3,
		markers: 2,
	},
};
