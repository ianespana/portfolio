import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

export interface Link {
	name: string;
	url: string;
	faClass: IconDefinition;
}

export interface Skill {
	name: string;
	faClass: IconDefinition;
	style?: object;
}

export interface Project {
	name: string;
	description: string;
	image?: string;
	skills?: Skill[];
	links?: Link[];
}
