export const BarGroup = {
	custom: { hue: '' },
	design: {},
	attrs: {},
	categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
	series: [
		{ name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
		{ name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
		{ name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] },
	],
	addon: {
		type: 'bar',
		height: '100%',
		stroke: 'smooth',
		strokeWidth: 1,
		strokeDashes: 0,
		markers: 0,
		dark: true,
		fillSolid: true,
	},
};
