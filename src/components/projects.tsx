import { projects } from '@/app/config';
import Project from '@/components/project';

export default function Projects() {
	return (
		<>
			{projects.map((project) => (
				<Project key={project.name} project={project} />
			))}
		</>
	);
}
