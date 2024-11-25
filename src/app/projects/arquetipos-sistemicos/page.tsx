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

export default function Collage() {
	const images = [
		{
			src: '/images/arquetipos-sistemicos/compensacion.webp',
			title: 'Compensación entre proceso y demora',
			description: 'Acciones excesivas ocurren cuando no se considera la demora en los efectos del sistema.',
		},
		{
			src: '/images/arquetipos-sistemicos/limites.webp',
			title: 'Límites del crecimiento',
			description:
				'El crecimiento inicial se frena al alcanzar restricciones internas o externas, provocando estancamiento o colapso.',
		},
		{
			src: '/images/arquetipos-sistemicos/desplazamiento.webp',
			title: 'Desplazamiento de la carga',
			description:
				'Soluciones rápidas reemplazan medidas fundamentales, creando dependencia y empeorando el problema a largo plazo.',
		},
		{
			src: '/images/arquetipos-sistemicos/intervencion.webp',
			title: 'Desplazamiento hacia la intervención',
			description:
				'La intervención externa resuelve síntomas, pero limita la capacidad del sistema para aprender y resolver problemas por sí mismo.',
		},
		{
			src: '/images/arquetipos-sistemicos/erosion.webp',
			title: 'Erosión de metas',
			description:
				'Se sacrifican metas a largo plazo por soluciones inmediatas, degradando objetivos fundamentales.',
		},
		{
			src: '/images/arquetipos-sistemicos/escalada.webp',
			title: 'Escalada',
			description:
				'Competidores responden agresivamente para superar a otros, intensificando el conflicto y desperdiciando recursos.',
		},
		{
			src: '/images/arquetipos-sistemicos/exito.webp',
			title: 'Éxito para quien tiene éxito',
			description:
				'Recursos se concentran en actividades exitosas, dejando a otras con menos oportunidades de progresar.',
		},
		{
			src: '/images/arquetipos-sistemicos/tragedia.webp',
			title: 'Tragedia del terreno común',
			description:
				'El uso excesivo de recursos compartidos provoca su agotamiento, perjudicando a todos los involucrados.',
		},
		{
			src: '/images/arquetipos-sistemicos/soluciones.webp',
			title: 'Soluciones rápidas que fallan',
			description:
				'Soluciones inmediatas generan problemas mayores en el futuro, creando ciclos repetitivos de dependencia.',
		},
		{
			src: '/images/arquetipos-sistemicos/crecimiento.webp',
			title: 'Crecimiento y subinversión',
			description: 'La falta de inversión en capacidad limita el crecimiento, perpetuando un bajo rendimiento.',
		},
	];

	return (
		<div className="container mx-auto px-6 py-8">
			<h2 className="text-3xl font-bold mb-8 text-center">Collage Interactivo</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{images.map((img, index) => (
					<ImageTile key={index} {...img} />
				))}
			</div>
		</div>
	);
}
