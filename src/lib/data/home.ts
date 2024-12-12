import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Sahil';

export const lastName = 'Mondal';

export const description =
	'A passionate Web Developer, Crafting beautiful and functional web experiences.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ 
		platform: Platform.GitHub, 
		link: 'https://github.com/Sahilr2501' 
	},
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/igmsahil/'
	},
	{
		platform: Platform.Email,
		link: 'sahilmondal9879@gmail.com'
	}
];

export const skills = getSkills('html', 'css', 'js', 'sass', 'svelte', 'reactjs');
