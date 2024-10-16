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
				<div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-white p-4 transition-opacity duration-300 text-center">
					<h3 className="text-xl font-bold mb-2">{title}</h3>
					<p className={'text-sm'}>{description}</p>
				</div>
			)}
		</div>
	);
}

export default function Collage() {
	const images = [
		{
			src: '/images/book-collage/practice.webp',
			title: 'El poder de la práctica deliberada',
			description:
				'Gladwell plantea que el éxito no depende solo del talento, sino también de la práctica constante. Afirma que se requieren alrededor de 10,000 horas de práctica deliberada para lograr la maestría en cualquier campo.',
		},
		{
			src: '/images/book-collage/advantages.webp',
			title: 'Impacto de las oportunidades externas',
			description:
				'Analiza cómo las oportunidades externas y las circunstancias influyen en el éxito. Gladwell observa que en el hockey canadiense, los jugadores nacidos a principios de año tienen ventaja debido a reglas de selección y mayor madurez física, lo que les da más oportunidades de éxito en su carrera deportiva.',
		},
		{
			src: '/images/book-collage/build-up.webp',
			title: 'Acumulación de pequeñas ventajas',
			description:
				'Gladwell explica que pequeñas ventajas pueden acumularse con el tiempo, favoreciendo a quienes ya están en posición ventajosa. El título hace referencia a una parábola bíblica sobre la distribución desigual de riquezas, aplicándola al éxito.',
		},
		{
			src: '/images/book-collage/fish.webp',
			title: 'El dilema del éxito en instituciones de élite',
			description:
				'Argumenta que asistir a una institución de élite no garantiza el éxito. Ser un "pez grande en un estanque pequeño" (destacarse en una escuela menos competitiva) puede ser más beneficioso que ser un "pez pequeño en un estanque grande" (promedio en una escuela de élite), pues la autoestima y la confianza son esenciales para el éxito.',
		},
		{
			src: '/images/book-collage/opportunities.webp',
			title: 'Oportunidades culturales y éxito profesional',
			description:
				'Explora cómo el éxito de ciertos grupos, como los judíos en la abogacía en Nueva York, está relacionado con oportunidades históricas y culturales, no solo con el talento innato. La historia de los abogados judíos de Nueva York ilustra cómo las adversidades y oportunidades influyen en el éxito.',
		},
		{
			src: '/images/book-collage/effort.webp',
			title: 'Influencia cultural en el rendimiento académico',
			description:
				'El capítulo aborda la influencia de la cultura en el éxito de los estudiantes en áreas como las matemáticas. Gladwell analiza cómo las tradiciones culturales que valoran el esfuerzo y la persistencia contribuyen al éxito en matemáticas, más allá de las habilidades innatas.',
		},
		{
			src: '/images/book-collage/patience.webp',
			title: 'Ética de trabajo y éxito académico',
			description:
				'Gladwell sigue con el tema del impacto de la cultura en el éxito, enfocándose en cómo la herencia agrícola, como el cultivo de arroz, fomenta una ética de trabajo en algunas culturas que se traduce en éxito académico y profesional, especialmente en disciplinas que requieren paciencia y precisión.',
		},
		{
			src: '/images/book-collage/communication.webp',
			title: 'Cultura y comunicación en el éxito organizacional',
			description:
				'Este capítulo explora cómo la comunicación y la jerarquía cultural pueden afectar el desempeño. Gladwell examina accidentes en Korean Air y argumenta que las barreras culturales en la comunicación contribuyeron a los accidentes, pero el cambio en la cultura organizacional mejoró la seguridad.',
		},
		{
			src: '/images/book-collage/tradition.webp',
			title: 'La cultura del honor y su impacto en el éxito',
			description:
				'El último capítulo analiza cómo las tradiciones culturales, como la "cultura del honor" en el sur de EE. UU., influyen en el comportamiento y el éxito. Gladwell explora cómo estas tradiciones afectan la propensión a la violencia y las relaciones interpersonales, impactando el éxito individual y colectivo.',
		},
		{
			src: '/images/book-collage/success.webp',
			title: 'Reflexiones sobre las oportunidades y el esfuerzo',
			description:
				'Gladwell reflexiona sobre la importancia de la oportunidad, el esfuerzo y las circunstancias en el éxito, señalando que el talento innato no es suficiente para garantizarlo. El éxito resulta de la acumulación de ventajas y esfuerzo, más que de la habilidad innata.',
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
