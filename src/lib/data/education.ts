import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Higher Secondary Certificate in Commerce ',
		description: '',
		location: 'Petlad, Gujarat',
		logo: Assets.Unknown,
		name: '',
		organization: 'Gujarat Secondary and Higher Secondary Education Board',
		period: { from: new Date(2019, 5, 6), to: new Date(2020, 3, 25) },
		shortDescription: '',
		slug: 'dummy-education-item-1',
		subjects: ['Account','Statastic', 'Economics', 'Business Studies', 'English', 'Computer Studies' , 'Secretarial Practice & Commercial Correspondence (SPCC)']
	},
	{
		degree: "Bachelor's Of Computer Application",
		description: '',
		location: 'Anand, Gujarat',
		logo: Assets.Unknown,
		name: '',
		organization: 'Sardar Patel University',
		period: { from: new Date(2020, 6, 15), to: new Date(2023, 4, 15) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['HTML, CSS & JS', 'C & C++', 'Data Structure & Algorithms', 'PHP', 'Python', 'VB.net & ASP.net']
	},
	{
		degree: 'Master Of Computer Application',
		description: '',
		location: 'Anand, Gujarat',
		logo: Assets.Unknown,
		name: '',
		organization: 'The Charutar Vidya Mandal university',
		period: { from: new Date(2023, 6, 6)},
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['PHP', 'Laravel', 'React JS', 'Node JS', 'Python & R', ]
	}
];

export const title = 'Education';
