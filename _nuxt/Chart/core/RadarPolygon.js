export const RadarPolygon = {
	custom: { hue: '' },
	design: {},
	attrs: {},
	categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	series: [{ name: 'Working', data: [18, 70, 100, 57, 45, 86, 33] }],
	addon: {
		type: 'radar',
		polygon: true,
		height: '100%',
		dark: true,
		strokeWidth: 3,
		markers: 2,
		fillSolid: true,
		dataLabels: true,
	},
};
