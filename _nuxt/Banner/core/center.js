import { subject, title, description, btnStarted, btnMore } from '@/utils/attrs';

export const Center = {
	custom: { hue: '', className: '' },
	design: {},
	attrs: {
		subject: subject(['4xl']),
		title: title(['6xl', 'gbpColor', 'none', 'flipInTopLeft']),
		description: description(['lg']),
		btnStarted: btnStarted(),
		btnMore: btnMore(),
	},
};
