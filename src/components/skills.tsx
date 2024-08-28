import { skills } from '@/app/config';
import Skill from '@/components/skill';

export default function Skills() {
	return (
		<>
			{skills.map((skill) => (
				<Skill key={skill.title} skill={skill}></Skill>
			))}
		</>
	);
}
