'use client';
import React, { useState } from 'react';

interface ImageTitleParams {
	src: string;
	title: string;
	description: string;
}

function ImageTile({ src, title, description }: ImageTitleParams) {
	const [showOverlay, setShowOverlay] = useState(false);

	return (
		<div
			className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer"
			onMouseEnter={() => setShowOverlay(true)}
			onMouseLeave={() => setShowOverlay(false)}
		>
			<img src={src} alt={title} className="w-full h-full object-cover" />
			{showOverlay && (
				<div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300">
					<h3 className="text-xl font-bold mb-2">{title}</h3>
					<p>{description}</p>
				</div>
			)}
		</div>
	);
}

export default function Jobs() {
	const images = [
		{
			src: '/images/jobs/image1.webp',
			title: 'La innovación como motor',
			description:
				'Steve Jobs revolucionó 7 industrias con su enfoque en productos innovadores y tecnología avanzada.',
		},
		{
			src: '/images/jobs/image2.webp',
			title: 'Menos es más',
			description:
				'Decidir qué no hacer es tan importante como decidir qué hacer. Jobs priorizó la simplicidad en diseño y procesos.',
		},
		{
			src: '/images/jobs/image3.webp',
			title: 'Liderazgo visionario',
			description: 'Su capacidad para inspirar y exigir excelencia lo convirtió en un líder único en su tiempo.',
		},
		{
			src: '/images/jobs/image4.webp',
			title: 'Concentración absoluta',
			description:
				'Eliminó productos innecesarios para enfocar los esfuerzos de Apple en crear los mejores dispositivos.',
		},
		{
			src: '/images/jobs/image5.webp',
			title: 'Diseño impecable',
			description:
				'Jobs buscaba que los productos no solo fueran funcionales, sino también bellos por dentro y por fuera.',
		},
		{
			src: '/images/jobs/image6.webp',
			title: 'Piensa diferente',
			description: 'Jobs desafió lo convencional y demostró que la creatividad puede cambiar el mundo.',
		},
		{
			src: '/images/jobs/image7.webp',
			title: 'Obsesión por los detalles',
			description: 'Desde las cajas hasta los circuitos, cada elemento debía ser perfecto.',
		},
		{
			src: '/images/jobs/image8.webp',
			title: 'Un equipo brillante',
			description: 'Jobs seleccionó y retuvo a los mejores talentos para alcanzar metas ambiciosas.',
		},
		{
			src: '/images/jobs/image9.webp',
			title: 'Un legado inmortal',
			description: 'Los productos de Steve Jobs cambiaron para siempre nuestra forma de vivir.',
		},
		{
			src: '/images/jobs/image10.webp',
			title: 'Hazlo con pasión',
			description: 'La única manera de hacer un gran trabajo es amar lo que haces.',
		},
		{
			src: '/images/jobs/image11.webp',
			title: 'Adaptarse para triunfar',
			description: 'Transformó Apple en una empresa en bancarrota al gigante tecnológico más valioso del mundo.',
		},
		{
			src: '/images/jobs/image12.webp',
			title: 'Reescribiendo las reglas',
			description: 'Jobs rompió paradigmas en cada industria en la que incursionó.',
		},
	];

	return (
		<div className="container mx-auto px-6 py-8">
			<h2 className="text-3xl font-bold mb-8 text-center">Steve Jobs - Lecciones de liderazgo</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{images.map((img, index) => (
					<ImageTile key={index} {...img} />
				))}
			</div>
		</div>
	);
}
