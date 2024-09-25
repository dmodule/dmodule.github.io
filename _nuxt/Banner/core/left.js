import { subject, title, description, btnStarted, btnMore, pic } from '@/utils/attrs';

export const Left = {
	custom: { hue: '', className: '' },
	design: { dir: 'ltr' },
	attrs: {
		pic: pic([, , ['/static/svg/light-1.svg']]),
		subject: subject(['4xl', 'red']),
		title: title(['6xl', 'white', 'red', 'slideInLeft']),
		description: description(['lg', 'black']),
		btnStarted: btnStarted(['lg', , 'red']),
		btnMore: btnMore(['lg', 'black']),
	},
};
