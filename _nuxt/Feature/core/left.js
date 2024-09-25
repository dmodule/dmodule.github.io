import { subject, title, description } from '@/utils/attrs';
import { item } from './item';
export const Left = {
	custom: { hue: '', className: '' },
	design: {},
	attrs: {
		subject: subject(['4xl']),
		title: title(['6xl', 'gbpColor', 'none', 'flipInTopRight']),
		description: description(['lg']),
		series: [item('left'), item('left'), item('left')],
	},
};
