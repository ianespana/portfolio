'use client';
import { RJSFSchema } from '@rjsf/utils';
import Form from '@rjsf/mui';
import { IChangeEvent } from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { FormEvent, useState } from 'react';

const sixHatsSchema: RJSFSchema = {
	type: 'object',
	properties: {
		whiteHat: {
			type: 'array',
			title: 'Sombrero Blanco (Hechos e Información)',
			items: {
				type: 'string',
				title: 'Hecho/Información',
			},
		},
		redHat: {
			type: 'array',
			title: 'Sombrero Rojo (Emociones y Sentimientos)',
			items: {
				type: 'string',
				title: 'Emoción/Sentimiento',
			},
		},
		blackHat: {
			type: 'array',
			title: 'Sombrero Negro (Cautela y Pensamiento Crítico)',
			items: {
				type: 'string',
				title: 'Cautela/Crítica',
			},
		},
		yellowHat: {
			type: 'array',
			title: 'Sombrero Amarillo (Optimismo y Pensamiento Positivo)',
			items: {
				type: 'string',
				title: 'Optimismo/Positivo',
			},
		},
		greenHat: {
			type: 'array',
			title: 'Sombrero Verde (Creatividad e Ideas Nuevas)',
			items: {
				type: 'string',
				title: 'Creatividad/Idea',
			},
		},
		blueHat: {
			type: 'array',
			title: 'Sombrero Azul (Control de Procesos y Organización)',
			items: {
				type: 'string',
				title: 'Control/Organización',
			},
		},
	},
};

export default function Hats() {
	const [sixHatsData, setSixHatsData] = useState({
		whiteHat: [],
		redHat: [],
		blackHat: [],
		yellowHat: [],
		greenHat: [],
		blueHat: [],
	});

	const onSubmit = (data: IChangeEvent, event: FormEvent<any>) => {
		setSixHatsData(data.formData);
		console.log('Data submitted: ', data.formData);
	};

	return (
		<>
			<Form
				schema={sixHatsSchema}
				validator={validator}
				onSubmit={onSubmit}
				className="pb-10"
			/>
			<div className="grid grid-cols-3 grid-rows-2 gap-4 p-4">
				<div className="sixhat-item border rounded-lg p-4 bg-gray-30">
					<h3 className="text-center font-bold text-lg mb-2">
						Sombrero Blanco
					</h3>
					<p className="text-center mb-2">(Hechos e Información)</p>
					<ul className="list-none pl-0">
						{sixHatsData.whiteHat.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="sixhat-item border rounded-lg p-4 bg-red-900">
					<h3 className="text-center font-bold text-lg mb-2">
						Sombrero Rojo
					</h3>
					<p className="text-center mb-2">
						(Emociones y Sentimientos)
					</p>
					<ul className="list-none pl-0">
						{sixHatsData.redHat.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="sixhat-item border rounded-lg p-4 bg-black">
					<h3 className="text-center font-bold text-lg mb-2">
						Sombrero Negro
					</h3>
					<p className="text-center mb-2">
						(Cautela y Pensamiento Crítico)
					</p>
					<ul className="list-none pl-0">
						{sixHatsData.blackHat.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="sixhat-item border rounded-lg p-4 bg-yellow-900">
					<h3 className="text-center font-bold text-lg mb-2">
						Sombrero Amarillo
					</h3>
					<p className="text-center mb-2">
						(Optimismo y Pensamiento Positivo)
					</p>
					<ul className="list-none pl-0">
						{sixHatsData.yellowHat.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="sixhat-item border rounded-lg p-4 bg-green-900">
					<h3 className="text-center font-bold text-lg mb-2">
						Sombrero Verde
					</h3>
					<p className="text-center mb-2">
						(Creatividad e Ideas Nuevas)
					</p>
					<ul className="list-none pl-0">
						{sixHatsData.greenHat.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="sixhat-item border rounded-lg p-4 bg-blue-900">
					<h3 className="text-center font-bold text-lg mb-2">
						Sombrero Azul
					</h3>
					<p className="text-center mb-2">
						(Control de Procesos y Organización)
					</p>
					<ul className="list-none pl-0">
						{sixHatsData.blueHat.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
