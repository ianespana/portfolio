import { Skill as iSkill } from '@/interfaces/skill';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skill({ skill }: { skill: iSkill }) {
	return (
		<div>
			<h2 className="text-5xl pb-5">{skill.title}</h2>
			<ul>
				{skill.skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
			<div>
				{skill.skillIcons.map((skill) => (
					<FontAwesomeIcon
						className={`h-20 w-20 inline-block p-2`}
						key={skill.skillName}
						icon={skill.faClass}
						style={skill.style}
					></FontAwesomeIcon>
				))}
			</div>
		</div>
	);
}
