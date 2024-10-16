import Image from 'next/image';
import React from 'react';
import Projects from '@/components/projects';

export default function ProjectsPage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-20">
			<div className="w-3/4 pt-4 grid grid-cols-2 items-center gap-x-10 gap-y-20">
				<div>
					<Image src={'/images/work.svg'} alt={'Projects'} width={800} height={800}></Image>
				</div>
				<div className="text-center">
					<h1 className="text-6xl font-bold pb-4">Projects</h1>
				</div>
			</div>
			<div className="w-3/4 grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))] gap-x-10 gap-y-20 pt-4 items-center">
				<Projects />
			</div>
		</main>
	);
}
