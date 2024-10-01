'use client';
import React, { useState } from 'react';

function ImageTile({ src, title, description }) {
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

export default function Collage() {
	const images = [
		{
			src: '/images/collage/ahorro.webp',
			title: 'Ahorro',
			description: 'Acumulación de dinero para un uso futuro.',
		},
		{
			src: '/images/collage/amor.webp',
			title: 'Amor',
			description:
				'Sentimiento profundo de afecto y conexión con otra persona o cosa',
		},
		{
			src: '/images/collage/honradez.jpg',
			title: 'Honradez',
			description:
				'Cualidad de ser sincero, justo y veraz en todas las acciones',
		},
		{
			src: '/images/collage/ley.webp',
			title: 'Ley',
			description:
				'Norma o conjunto de normas que regulan la conducta humana en una sociedad.',
		},
		{
			src: '/images/collage/limpieza.webp',
			title: 'Limpieza',
			description: 'Estado de estar libre de suciedad o impurezas.',
		},
		{
			src: '/images/collage/orden.webp',
			title: 'Orden',
			description: 'Disposición de las cosas de forma metódica y lógica.',
		},
		{
			src: '/images/collage/puntualidad.jpg',
			title: 'Puntualidad',
			description: 'Cualidad de llegar o hacer algo a la hora exacta.',
		},
		{
			src: '/images/collage/respeto.jpg',
			title: 'Respeto',
			description:
				'Consideración y aprecio hacia los demás y sus derechos.',
		},
		{
			src: '/images/collage/responsabilidad.jpg',
			title: 'Responsabilidad',
			description:
				'Cualidad de ser consciente de las propias obligaciones y cumplirlas.',
		},
		{
			src: '/images/collage/superacion.webp',
			title: 'Superación',
			description: 'Acción de superar obstáculos y alcanzar metas.',
		},
	];

	return (
		<div className="container mx-auto px-6 py-8">
			<h2 className="text-3xl font-bold mb-8 text-center">
				Collage Interactivo
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{images.map((img, index) => (
					<ImageTile key={index} {...img} />
				))}
			</div>
		</div>
	);
}
