import React from 'react';
import { greeting, skills } from '@/app/config';
import SocialMedia from '@/components/social-media';
import Image from 'next/image';
import Skill from '@/components/skill';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-20">
			<div className="w-3/4 pt-4 grid grid-cols-3 items-center gap-x-20 gap-y-20">
				<div className="col-span-2">
					<h1 className="text-6xl font-bold pb-4">{greeting.title}</h1>
					<p className="text-3xl pb-8">
						<span>I&#39;m </span>
						<span className="text-rose-500">{greeting.fullName}, </span>
						{greeting.subTitle}
					</p>
					<p className="text-1xl pb-8" style={{ whiteSpace: 'pre-wrap' }}>
						{greeting.aboutMe}
					</p>
					<SocialMedia />
				</div>
				<div>
					<Image src={'/images/chibi.png'} alt={'Ian Chibi'} width={500} height={500}></Image>
				</div>
				<div className="col-span-full text-center pt-20">
					<h1 className="text-6xl font-bold">Some of my skills</h1>
				</div>
				<div className="col-span-1">
					<Image
						className="relative"
						src={'/images/cloud-infra.svg'}
						alt={''}
						width={500}
						height={500}
					></Image>
				</div>
				<div className="col-start-2 col-span-2">
					<Skill skill={skills[0]} />
				</div>
				<div className="col-span-2">
					<Skill skill={skills[1]} />
				</div>
			</div>
		</main>
	);
}
