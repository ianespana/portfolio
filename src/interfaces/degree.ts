import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

export interface SkillIcons {
	skillName: string;
	faClass: IconDefinition;
	style: object;
}

export interface Degree {
	title: string;
	subtitle: string;
	logoPath: string;
	altName: string;
	duration: string;
	descriptions: string[];
	websiteLink: string;
}
