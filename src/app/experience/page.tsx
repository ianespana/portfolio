import Image from 'next/image';
import React from 'react';

export default function Experience() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-20">
			<div className="w-3/4 pt-4 grid grid-cols-2 items-center gap-x-10 gap-y-20">
				<div>
					<Image
						src={'/images/work.svg'}
						alt={'Work'}
						width={800}
						height={800}
					></Image>
				</div>
				<div className="text-center">
					<h1 className="text-6xl font-bold pb-4">Experience</h1>
					<h2 className="text-4xl pb-4">
						Work, Internship and Volunteering
					</h2>
				</div>
			</div>
		</main>
	);
}
