'use client';
import './react-tabs.css';
import Image from 'next/image';
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Hats from '@/components/diagrams/hats';
import Catwda from '@/components/diagrams/catwda';
import Foda from '@/components/diagrams/foda';
import Ishikawa from '@/components/diagrams/ishikawa';
import Pareto from '@/components/diagrams/pareto';

export default function Diagrams() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-20">
			<div className="w-3/4 pt-4 grid grid-cols-2 items-center gap-x-10 gap-y-20 pb-20">
				<div>
					<Image src={'/images/projects.svg'} alt={'Projects'} width={800} height={800}></Image>
				</div>
				<div className="text-center">
					<h1 className="text-6xl font-bold">Diagrams</h1>
				</div>
			</div>
			<div className="w-3/4 text-center">
				<Tabs>
					<TabList>
						<Tab>6 Sombreros</Tab>
						<Tab>CATWDA</Tab>
						<Tab>FODA</Tab>
						<Tab>Ishikawa</Tab>
						<Tab>Pareto</Tab>
					</TabList>
					<TabPanel>
						<Hats />
					</TabPanel>
					<TabPanel>
						<Catwda />
					</TabPanel>
					<TabPanel>
						<Foda />
					</TabPanel>
					<TabPanel>
						<Ishikawa />
					</TabPanel>
					<TabPanel>
						<Pareto />
					</TabPanel>
				</Tabs>
			</div>
		</main>
	);
}
