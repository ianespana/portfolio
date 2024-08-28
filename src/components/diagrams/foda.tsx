'use client';
import { RJSFSchema } from '@rjsf/utils';
import Form from '@rjsf/mui';
import { IChangeEvent } from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { FormEvent, useState } from 'react';

const fodaSchema: RJSFSchema = {
	type: 'object',
	properties: {
		strengths: {
			type: 'array',
			title: 'Fortalezas',
			items: {
				type: 'string',
				title: 'Strength',
			},
		},
		weaknesses: {
			type: 'array',
			title: 'Debilidades',
			items: {
				type: 'string',
				title: 'Weakness',
			},
		},
		opportunities: {
			type: 'array',
			title: 'Oportunidades',
			items: {
				type: 'string',
				title: 'Opportunity',
			},
		},
		threats: {
			type: 'array',
			title: 'Amenazas',
			items: {
				type: 'string',
				title: 'Threat',
			},
		},
	},
};

export default function Foda() {
	const [fodaData, setFodaData] = useState({
		strengths: [],
		weaknesses: [],
		opportunities: [],
		threats: [],
	});

	const onSubmit = (data: IChangeEvent, event: FormEvent<any>) => {
		setFodaData(data.formData);
		console.log('Data submitted: ', data.formData);
	};

	return (
		<>
			<Form
				schema={fodaSchema}
				validator={validator}
				onSubmit={onSubmit}
				className="pb-10"
			/>
			<div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
				<div className="foda-item border rounded-lg p-4">
					<h3 className="text-center font-bold text-lg mb-2">
						Fortalezas
					</h3>
					<ul className="list-none pl-0">
						{fodaData.strengths.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="foda-item border rounded-lg p-4">
					<h3 className="text-center font-bold text-lg mb-2">
						Debilidades
					</h3>
					<ul className="list-none pl-0">
						{fodaData.weaknesses.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="foda-item border rounded-lg p-4">
					<h3 className="text-center font-bold text-lg mb-2">
						Oportunidades
					</h3>
					<ul className="list-none pl-0">
						{fodaData.opportunities.map((item, index) => (
							<li key={index} className="py-1">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="foda-item border rounded-lg p-4">
					<h3 className="text-center font-bold text-lg mb-2">
						Amenazas
					</h3>
					<ul className="list-none pl-0">
						{fodaData.threats.map((item, index) => (
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
