import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'A classic Tic Tac Toe game implemented as a web application. Features include an interactive 3x3 grid, player turns with visual effects, dynamic win and draw detection, and a stylish celebratory message. Built using HTML, CSS, and JavaScript, the game is designed to be responsive and user- friendly.',
		shortDescription:
			'A classic Tic Tac Toe game implemented as a web application. Features include an interactive 3x3 grid, player turns with visual effects, dynamic win and draw detection, and a stylish celebratory message. Built using HTML, CSS, and JavaScript, the game is designed to be responsive and user- friendly.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Tic Tac Toe',
		period: {
			from: new Date(2019, 9, 1),
			to: new Date(2019, 9, 10)
		},
		skills: getSkills('js'),
		type: 'Website Template'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'The Online Auction System is a dynamic web application developed using PHP that facilitates secure and transparent bidding on listed items. Key features include user authentication, real-time bidding, automated winner selection, and integrated payment processing.',
		shortDescription:
			'The Online Auction System is a dynamic web application developed using PHP that facilitates secure and transparent bidding on listed items. Key features include user authentication, real-time bidding, automated winner selection, and integrated payment processing.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Online Auction System',
		period: {
			from: new Date(2019, 12, 1),
			to: new Date(2020, 4, 10)
		},
		skills: getSkills('html', 'css', 'js', 'php'),
		type: 'Website Template',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export const title = 'Projects';
