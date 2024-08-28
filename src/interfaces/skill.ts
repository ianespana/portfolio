import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

export interface SkillIcons {
	skillName: string;
	faClass: IconDefinition;
	style: object;
}

export interface Skill {
	title: string;
	fileName: string;
	skills: string[];
	skillIcons: SkillIcons[];
}
