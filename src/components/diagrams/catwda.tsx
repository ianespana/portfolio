'use client';
import { RJSFSchema } from '@rjsf/utils';
import Form from '@rjsf/mui';
import { IChangeEvent } from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { FormEvent, useState } from 'react';

const catwoeSchema: RJSFSchema = {
	type: 'object',
	properties: {
		clientes: {
			type: 'array',
			title: 'Clientes',
			items: {
				type: 'string',
				title: 'Cliente',
			},
		},
		actores: {
			type: 'array',
			title: 'Actores',
			items: {
				type: 'string',
				title: 'Actor',
			},
		},
		transformaciones: {
			type: 'array',
			title: 'Transformaciones',
			items: {
				type: 'string',
				title: 'Transformación',
			},
		},
		weltanschauung: {
			type: 'array',
			title: 'Weltanschauung (Visión del Mundo)',
			items: {
				type: 'string',
				title: 'Visión del Mundo',
			},
		},
		propietarios: {
			type: 'array',
			title: 'Propietarios',
			items: {
				type: 'string',
				title: 'Propietario',
			},
		},
		entorno: {
			type: 'array',
			title: 'Entorno',
			items: {
				type: 'string',
				title: 'Entorno',
			},
		},
	},
};

export default function Catwda() {
	const [catwoeData, setCatwoeData] = useState({
		clientes: [],
		actores: [],
		transformaciones: [],
		weltanschauung: [],
		propietarios: [],
		entorno: [],
	});

	const onSubmit = (data: IChangeEvent, event: FormEvent<any>) => {
		setCatwoeData(data.formData);
		console.log('Data submitted: ', data.formData);
	};

	return (
		<>
			<Form
				schema={catwoeSchema}
				validator={validator}
				onSubmit={onSubmit}
				className="pb-10"
			/>
			<div className="grid grid-cols-2 grid-rows-3 gap-4 p-4">
				<div className="catwoe-item border rounded-lg p-4">
					<h3 className="text-center font-bold text-lg mb-2">
						Clientes
					</h3>
					<ul className="list-none pl-0">
						{catwoeData.clientes.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="catwoe-item border rounded-lg p-4">
					<h3 className="text-center font-bold text-lg mb-2">
						Actores
					</h3>
					<ul className="list-none pl-0">
						{catwoeData.actores.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="catwoe-item border rounded-lg p-4">
					<h3 className="text-center font-bold text-lg mb-2">
						Transformaciones
					</h3>
					<ul className="list-none pl-0">
						{catwoeData.transformaciones.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="catwoe-item border rounded-lg p-4">
					<h3 className="text-center font-bold text-lg mb-2">
						Weltanschauung
					</h3>
					<ul className="list-none pl-0">
						{catwoeData.weltanschauung.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="catwoe-item border rounded-lg p-4">
					<h3 className="text-center font-bold text-lg mb-2">
						Propietarios
					</h3>
					<ul className="list-none pl-0">
						{catwoeData.propietarios.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="catwoe-item border rounded-lg p-4">
					<h3 className="text-center font-bold text-lg mb-2">
						Entorno
					</h3>
					<ul className="list-none pl-0">
						{catwoeData.entorno.map((item, index) => (
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
