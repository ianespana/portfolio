'use client';
import React, { useState } from 'react';
import Institutions from '@/app/projects/paises/institutions';
import Politics from '@/app/projects/paises/politics';
import Change from '@/app/projects/paises/change';
import Comparissons from '@/app/projects/paises/comparissons';
import OtherFactors from '@/app/projects/paises/other-factors';
import Cycles from '@/app/projects/paises/cycles';
import Conclusion from '@/app/projects/paises/conclusion';

export default function Paises() {
	// State to control content in the center column
	const [centerContent, setCenterContent] = useState<JSX.Element>(<Institutions />);

	// Button click handlers
	const handleLeftColumnClick = (content: JSX.Element) => {
		setCenterContent(content);
	};

	const handleRightColumnClick = (content: JSX.Element) => {
		setCenterContent(content);
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="w-3/4 pt-4 items-center pb-20">
				<div className="text-center">
					<h1 className="text-6xl font-bold">Por qué fracasan los países</h1>
				</div>
			</div>
			<div className="w-3/4 text-center flex flex-row min-h-screen items-center justify-between py-20">
				{/* Left column */}
				<aside className="flex-1 flex flex-col justify-center items-center space-y-4">
					<button
						className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition"
						onClick={() => handleLeftColumnClick(<Institutions />)}
					>
						Instituciones inclusivas vs extractivas
					</button>
					<button
						className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition"
						onClick={() => handleLeftColumnClick(<Politics />)}
					>
						El papel de la política en el desarrollo
					</button>
					<button
						className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition"
						onClick={() => handleLeftColumnClick(<Change />)}
					>
						La importancia del cambio institucional
					</button>
					<button
						className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition"
						onClick={() => handleLeftColumnClick(<Comparissons />)}
					>
						Ejemplos históricos
					</button>
				</aside>

				{/* Center column */}
				<section className="flex-2 flex justify-center items-center p-4">
					<div className="text-center">
						<h1 className="text-2xl font-bold">{centerContent}</h1>
					</div>
				</section>

				{/* Right column */}
				<aside className="flex-1 flex flex-col justify-center items-center space-y-4">
					<button
						className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-green-600 transition"
						onClick={() => handleRightColumnClick(<OtherFactors />)}
					>
						Rechazo a otras teorías
					</button>
					<button
						className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-green-600 transition"
						onClick={() => handleRightColumnClick(<Cycles />)}
					>
						Círculos virtuosos y viciosos
					</button>
					<button
						className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-green-600 transition"
						onClick={() => handleRightColumnClick(<Conclusion />)}
					>
						Conclusión
					</button>
				</aside>
			</div>
		</main>
	);
}
