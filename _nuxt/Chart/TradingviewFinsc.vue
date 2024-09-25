<template>
	<div ref="finsc_chart" class="trader w-full h-full"></div>
</template>

<script>
const { $auth } = useNuxtApp();
import { useFinscStore } from '@/stores/finsc';

export default {
	name: 'FinscChart',
	data() {
		return {
			customCSS: `
        #documentation-toolbar-button {
          all: unset;
          position: relative;
          color: #FFF;
          font-size: 14px;
          font-weight: 400;
          line-height: 18px;
          letter-spacing: 0.15408px;
          padding: 5px 12px;
          border-radius: 80px;
          background: #2962FF;
          cursor: pointer;
        }
        #documentation-toolbar-button:hover {
          background: #1E53E5;
        }
        #documentation-toolbar-button:active {
          background: #1948CC;
        }
        #theme-toggle {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
        }
        .switcher {
          display: inline-block;
          position: relative;
          flex: 0 0 auto;
          width: 38px;
          height: 20px;
          vertical-align: middle;
          z-index: 0;
          -webkit-tap-highlight-color: transparent;
        }
        .switcher input {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 1;
          cursor: default;
        }
        .switcher .thumb-wrapper {
          display: block;
          border-radius: 20px;
          position: relative;
          z-index: 0;
          width: 100%;
          height: 100%;
        }
        .switcher .track {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background-color: #a3a6af;
        }
        #theme-switch:checked + .thumb-wrapper .track {
          background-color: #2962ff;
        }
        .switcher .thumb {
          display: block;
          width: 14px;
          height: 14px;
          border-radius: 14px;
          transition-duration: 250ms;
          transition-property: transform;
          transition-timing-function: ease-out;
          transform: translate(3px, 3px);
          background: #ffffff;
        }
        [dir=rtl] .switcher .thumb {
          transform: translate(-3px, 3px);
        }
        .switcher input:checked + .thumb-wrapper .thumb {
          transform: translate(21px, 3px);
        }
        [dir=rtl] .switcher input:checked + .thumb-wrapper .thumb {
          transform: translate(-21px, 3px);
        }
        #documentation-toolbar-button:focus-visible:before,
        .switcher:focus-within:before {
          content: '';
          display: block;
          position: absolute;
          top: -2px;
          right: -2px;
          bottom: -2px;
          left: -2px;
          border-radius: 16px;
          outline: #2962FF solid 2px;
        }
      `,
		};
	},
	methods: {
		getParameterByName(name) {
			name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
			const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
			const results = regex.exec(window.location.search);
			return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		},
		finscChart(idd) {
			const datafeedUrl = 'https://app.finsc.vn/api/v1';
			const datafeed = new Datafeeds.finscAPI(datafeedUrl, 5000, {
				maxResponseLength: 1000,
				expectedOrder: 'latestFirst',
			});

			const cssBlob = new Blob([this.customCSS], { type: 'text/css' });
			const cssBlobUrl = URL.createObjectURL(cssBlob);
			const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

			const theme = this.getParameterByName('theme') || (isDark ? 'dark' : 'light');
			const widget = (window.tvWidget = new TradingView.widget({
				theme: theme,
				load_last_chart: true,
				// fullscreen: true,
				autosize: false,
				width: '100%',
				height: '100%',
				symbol: this.symbol,
				interval: '1D',
				timezone: 'Asia/Bangkok',
				container: idd,
				datafeed: datafeed,
				library_path: '/static/tv/charting_library/',
				locale: this.getParameterByName('lang') || 'en',
				custom_css_url: cssBlobUrl,
				enabled_features: ['study_templates'],
				charts_storage_url: datafeedUrl,
				client_id: this.userId,
				user_id: this.userId,
				auto_save_delay: 10,
				charts_storage_api_version: '1.1',
				disabled_features: ['popup_hints'],
			}));

			widget.headerReady().then(() => {
				const themeToggleEl = widget.createButton({
					useTradingViewStyle: false,
					align: 'right',
				});
				themeToggleEl.dataset.internalAllowKeyboardNavigation = 'true';
				themeToggleEl.id = 'theme-toggle';
				themeToggleEl.innerHTML = `<label for="theme-switch" id="theme-switch-label">Dark Mode</label>
        <div class="switcher">
          <input type="checkbox" id="theme-switch" tabindex="-1">
          <span class="thumb-wrapper">
            <span class="track"></span>
            <span class="thumb"></span>
          </span>
        </div>`;
				themeToggleEl.title = 'Toggle theme';
				const checkboxEl = themeToggleEl.querySelector('#theme-switch');
				checkboxEl.checked = theme === 'dark';
				checkboxEl.addEventListener('change', function () {
					const themeToSet = this.checked ? 'dark' : 'light';
					widget.changeTheme(themeToSet, { disableUndo: true });
				});

				const themeSwitchCheckbox = themeToggleEl.querySelector('#theme-switch');

				const handleRovingTabindexMainElement = (e) => {
					e.target.tabIndex = 0;
				};
				const handleRovingTabindexSecondaryElement = (e) => {
					e.target.tabIndex = -1;
				};

				themeSwitchCheckbox.addEventListener(
					'roving-tabindex:main-element',
					handleRovingTabindexMainElement
				);
				themeSwitchCheckbox.addEventListener(
					'roving-tabindex:secondary-element',
					handleRovingTabindexSecondaryElement
				);
			});

			widget.onChartReady(() => {
				widget
					.activeChart()
					.onSymbolChanged()
					.subscribe(null, (e) => {
						const sym = e.ticker;
						this.setSymbol(sym);
					});
			});

			window.frames[0].focus();
		},
		getToken() {
			fetch('https://protrade.finsc.vn/api/sckt')
				.then((response) => response.json())
				.then((data) => {
					const token = data.tt;
					const id = '1000049129';
					const currentTime = new Date().getTime();
					const updateTimestamp = Math.floor(currentTime / 1000);
					localStorage.setItem(
						'skdf',
						JSON.stringify({ tt: token, id: id, time: updateTimestamp })
					);
				})
				.catch((error) => {
					console.log('Error fetching token:', error);
				});
		},
		checkAndFetchToken() {
			const last = JSON.parse(localStorage.getItem('skdf'));
			const now = new Date().getTime() / 1000;
			const eigthToday = new Date().setHours(8, 0, 0, 0) / 1000;
			if (!last || (now > eigthToday && last.time < eigthToday)) {
				this.getToken();
			}
		},
	},
	setup() {
		const { getProfile } = $auth; // make authenticated state reactive
		const { sub } = getProfile();
		const userSub = sub.split('|');
		const userId = userSub[1];

		const finscStore = useFinscStore();

		const symbol = computed(() => finscStore.symbol);

		return { userId, symbol, setSymbol: finscStore.setSymbol };
	},
	mounted() {
		const vm = this;
		vm.$nextTick(() => {
			vm.checkAndFetchToken();
			vm.finscChart(vm.$el);
		});
	},
};
</script>
