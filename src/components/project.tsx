import { Project as iProject } from '@/interfaces/project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Project({ project }: { project: iProject }) {
	return (
		<div className="rounded bg-blend-lighten bg-neutral-800 p-4 min-w-96">
			{project.image && (
				<img className="mb-2" src={project.image} width="100%" />
			)}
			<h2 className="text-5xl mb-2">{project.name}</h2>
			<div className="mb-2">
				{project.skills?.map((language) => (
					<FontAwesomeIcon
						className={`h-20 w-20 inline-block p-2`}
						key={language.name}
						icon={language.faClass}
						style={language.style}
					/>
				))}
			</div>
			<hr className="mb-2" />
			<p className="mb-2">{project.description}</p>
			<div className="mb-2">
				{project.links?.map((link) => (
					<Link
						className="bg-pink-800 px-4 py-2 rounded-md inline-block"
						key={link.name}
						href={link.url}
						target="_blank"
					>
						<FontAwesomeIcon
							className="w-6 h-6 inline-block"
							icon={link.faClass}
						/>
						{' ' + link.name}
					</Link>
				))}
			</div>
		</div>
	);
}
