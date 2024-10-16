'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import './styles.css';
import useMousePosition from '@/components/mouse-position';

export default function Empresario() {
	const [currentQualities, setCurrentQualities] = useState('');
	const [hideQualities, setHideQualities] = useState(true);

	const handleMouseEnter = (qualities: string) => {
		setCurrentQualities(qualities);
		setHideQualities(false);
	};

	const handleMouseLeave = () => {
		setCurrentQualities('');
		setHideQualities(true);
	};

	const mousePosition = useMousePosition();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="w-3/4 pt-4 items-center pb-20">
				<div className="text-center">
					<h1 className="text-6xl font-bold">Empresario Ideal</h1>
				</div>
			</div>
			<div className={'w-3/4 text-center flex min-h-screen flex-col items-center justify-between py-20 relative'}>
				<Image
					src={'/images/empresario/example.jpg'}
					alt="Empresario Ideal"
					objectFit="cover"
					width={1024}
					height={1024}
				/>

				<div
					className={'head'}
					onMouseEnter={() => handleMouseEnter('Visión estratégica y liderazgo')}
					onMouseLeave={handleMouseLeave}
				></div>

				<div
					className={'eyes'}
					onMouseEnter={() => handleMouseEnter('Atención al detalle y enfoque')}
					onMouseLeave={handleMouseLeave}
				></div>

				<div
					className={'mouth'}
					onMouseEnter={() => handleMouseEnter('Comunicación efectiva')}
					onMouseLeave={handleMouseLeave}
				></div>

				<div
					className={'arms'}
					onMouseEnter={() => handleMouseEnter('Confianza y resolución')}
					onMouseLeave={handleMouseLeave}
				></div>

				<div
					className={'hands'}
					onMouseEnter={() => handleMouseEnter('Capacidad de ejecución y resolución de problemas')}
					onMouseLeave={handleMouseLeave}
				></div>

				<div
					className={'torso'}
					onMouseEnter={() => handleMouseEnter('Resiliencia y determinación')}
					onMouseLeave={handleMouseLeave}
				></div>

				<div
					style={{
						position: 'fixed',
						top: mousePosition.y,
						left: mousePosition.x + 15,
						visibility: hideQualities ? 'hidden' : 'visible',
					}}
					className={'qualities'}
				>
					<p>{currentQualities}</p>
				</div>
			</div>
		</main>
	);
}
