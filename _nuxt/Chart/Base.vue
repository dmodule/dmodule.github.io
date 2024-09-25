<template>
	<ClientOnly>
		<apexchart
			v-if="refresh"
			ref="chart"
			class="min-w-full"
			width="100%"
			:type="type"
			:height="height"
			:options="options"
			:series="series"></apexchart>
	</ClientOnly>
</template>

<script>
import { debounce } from '@/utils';
export default {
	props: {
		type: {
			type: String,
			default: 'line', // area | column | line
		},
		colors: {
			type: Array,
			default: () => [
				'#84cc16',
				'#22c55e',
				'#10b981',
				'#14b8a6',
				'#06b6d4',
				'#0ea5e9',
				'#3b82f6',
				'#6366f1',
				'#8b5cf6',
				'#a855f7',
				'#c026d3',
				'#db2777',
				'#e11d48',
				'#ef4444',
				'#f97316',
				'#f59e0b',
				'#eab308',
			],
		},
		dark: {
			type: Boolean,
			default: false,
		},
		categories: {
			type: Array,
			default: () => [],
		},
		series: {
			type: Array,
			default: () => [],
		},
		height: {
			default: '400px',
		},
		distributed: {
			type: Boolean,
			value: false,
		},
		xaxis: {
			type: String,
			value: 'category',
		},
		yaxis: {
			type: Array,
			value: [],
		},
		horizontal: {
			type: Boolean,
			default: false,
		},
		stacked: {
			type: Boolean,
			default: false,
		},
		stackType: {
			type: String,
			value: 'normal', // 'normal' || '100%'
		},
		dataLabels: {
			type: Boolean,
			default: false,
		},
		fillSolid: {
			type: Boolean,
			default: false,
		},
		monochrome: {
			type: Boolean,
			default: false,
		},
		stroke: {
			type: String, // 'smooth' || 'straight' || 'stepline'
			default: 'smooth',
		},
		strokeWidth: {
			type: Number,
			default: 0,
		},
		strokeDashes: {
			type: Number,
			default: 0,
		},
		markers: {
			type: Number,
			value: 0,
		},
		// type donut
		donutTotal: {
			type: String,
			default: '',
		},
		// type polarArea
		polarRings: {
			type: Number,
			value: 0,
		},
		polarSpokes: {
			type: Number,
			value: 0,
		},
		// type radar
		polygon: {
			type: Boolean,
			value: false,
		},
		// type radialBar
		radialTotal: {
			type: String,
			default: '',
		},
		gaugeType: {
			type: String,
			value: '', // semi
		},
		strokeRound: {
			type: Boolean,
			value: false,
		},
	},
	data: () => ({ refresh: true }),
	computed: {
		options() {
			const opt = {
				// series: this.series,
				theme: {
					mode: this.$colorMode.value,
				},
				stroke: {
					curve: this.stroke, // 'smooth' || 'straight' || 'stepline'
					width: this.strokeWidth,
					dashArray: this.strokeDashes,
				},
				colors: this.colors,
				fill: {
					type: this.fillSolid ? 'solid' : 'gradient',
					opacity: 0.8,
				},
				markers: {
					size: this.markers,
				},
				dataLabels: {
					enabled: this.dataLabels,
				},
				legend: {
					show: true,
				},
				tooltip: {
					shared: true,
					intersect: false,
					inverseOrder: true,
					followCursor: false,
				},
			};

			const chart = {
				width: '100%',
				height: this.height,
				type: this.type,
				toolbar: {
					tools: {
						download: true,
						selection: false,
						zoom: false,
						zoomin: false,
						zoomout: false,
						pan: false,
						reset: false,
					},
				},
			};

			if (this.monochrome) {
				opt.theme.monochrome = {
					enabled: true,
					color: this.colors[0],
					shadeTo: 'light',
					shadeIntensity: 0.6,
				};
			}

			if (this.type === 'pie' || this.type === 'donut' || this.type === 'polarArea') {
				opt.labels = this.categories;

				// type polarArea
				if (this.type === 'polarArea') {
					opt.plotOptions = {
						polarArea: {
							rings: {
								strokeWidth: this.polarRings,
							},
							spokes: {
								strokeWidth: this.polarSpokes,
							},
						},
					};
					opt.yaxis = {
						show: this.polarRings,
					};
				}

				// type donut
				if (this.type === 'donut') {
					opt.plotOptions = {
						pie: {
							donut: this.donutTotal
								? {
										labels: {
											show: true,
											total: {
												showAlways: true,
												show: true,
												label: this.donutTotal,
											},
										},
								  }
								: {},
						},
					};
				}
			} else if (this.type === 'radialBar') {
				const gaugeFull = {
					startAngle: -135,
					endAngle: 135,
					dataLabels: {
						name: {
							offsetY: 120,
						},
						value: {
							offsetY: 76,
							fontSize: '24px',
							color: undefined,
							formatter: function (val) {
								return val + '%';
							},
						},
					},
				};

				const gaugeSemi = {
					startAngle: -90,
					endAngle: 90,
					dataLabels: {
						name: {
							show: false,
						},
						value: {
							offsetY: -2,
							fontSize: '24px',
						},
					},
				};

				const gauge = this.gaugeType
					? this.gaugeType === 'semi'
						? gaugeSemi
						: gaugeFull
					: {};

				opt.labels = this.categories;
				opt.chart = {
					sparkline: {
						enabled: this.gaugeType === 'semi',
					},
				};

				opt.stroke = {
					lineCap: this.strokeRound ? 'round' : 'butt',
					dashArray: this.strokeDashes,
				};

				opt.plotOptions = {
					radialBar: {
						hollow: {
							size: this.series.length === 1 ? '70%' : '50%',
						},
						dataLabels: {
							value: {
								fontSize: '18px',
							},
							total: {
								show: this.radialTotal ? true : false,
								label: this.radialTotal,
								fontSize: '18px',
								formatter: function (w) {
									const series = w.globals?.series || [];
									return series.reduce((pre, cur) => pre + cur, 0);
								},
							},
						},
						...gauge,
					},
				};
			} else {
				opt.xaxis = {
					type: this.xaxis,
					categories: this.categories,
				};

				if (this.yaxis && this.yaxis.length > 0) {
					opt.yaxis = this.yaxis;
				}

				if (this.horizontal) {
					opt.plotOptions = {
						bar: {
							horizontal: this.horizontal,
							distributed: this.distributed,
							// positve negative
							colors: {
								ranges: [
									{
										from: -100,
										to: -46,
										color: '#F15B46',
									},
									{
										from: -45,
										to: 0,
										color: '#FEB019',
									},
								],
							},
						},
					};
				}

				if (this.stacked) {
					chart.type = 'bar';
					chart.stacked = true;
					chart.stackType = this.stackType;
				}

				if (this.type === 'radar') {
					opt.plotOptions = {
						radar: this.polygon
							? {
									offsetY: 20,
									size: 100,
									polygons: {
										strokeColors: this.dark ? '#555' : '#e9e9e9',
										fill: {
											colors: this.dark
												? ['#333', '#111']
												: ['#f8f8f8', '#fff'],
										},
									},
							  }
							: {},
					};
					opt.tooltip = { followCursor: true };
				}
			}

			opt.chart = chart;

			return opt;
		},
	},
	methods: {
		handleResize() {
			this.refresh = false;
			setTimeout(() => {
				this.refresh = true;
			}, 90);
		},
	},
	mounted() {
		window.addEventListener('resize', debounce(this.handleResize, 180));
	},
	beforeDestroy() {
		window.removeEventListener('resize', debounce(this.handleResize, 180));
	},
	// watch: {
	// 	$colorMode() {
	// 		console.log(this.$refs.chart);
	// 	},
	// },
};
</script>

<style>
.apexcharts-canvas > svg {
	background-color: transparent !important;
}
.apexcharts-toolbar,
.apexcharts-menu {
	left: 10px !important;
	right: auto !important;
}
.apexcharts-toolbar {
	top: 0 !important;
}
</style>
