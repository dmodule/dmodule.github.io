import { subject, title, description } from '@/utils/attrs';
import { item } from './item';
export const Center = {
	custom: { hue: '', className: '' },
	design: { addon: { type: 'carousel' } },
	attrs: {
		subject: subject(['4xl']),
		title: title(['6xl', 'gbpColor', 'none', 'flipInTopRight']),
		description: description(['lg']),
		series: [item(), item(), item()],
	},
};
