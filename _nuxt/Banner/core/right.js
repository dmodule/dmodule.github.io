import { subject, title, description, btnStarted, btnMore, pic } from '@/utils/attrs';

export const Right = {
	custom: { hue: '', className: '' },
	design: { dir: 'rtl' },
	attrs: {
		pic: pic([, , ['/static/svg/dark-1.svg']]),
		subject: subject(['4xl', 'white']),
		title: title(['6xl', 'yellow', 'none', 'slideInRight']),
		description: description(['lg', 'white']),
		btnStarted: btnStarted(['lg', , 'yellow']),
		btnMore: btnMore(['lg', 'white']),
	},
};
