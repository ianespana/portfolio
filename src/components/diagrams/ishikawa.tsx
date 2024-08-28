'use client';
import { RJSFSchema } from '@rjsf/utils';
import Form from '@rjsf/mui';
import { IChangeEvent } from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { FormEvent, useState, useCallback } from 'react';
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';

const ishikawaSchema: RJSFSchema = {
	type: 'object',
	properties: {
		problem: {
			type: 'string',
			title: 'Problema',
		},
		causes: {
			type: 'array',
			title: 'Causas',
			items: {
				type: 'object',
				required: ['category', 'factors'],
				properties: {
					category: {
						type: 'string',
						title: 'Categoría',
					},
					factors: {
						type: 'array',
						title: 'Factores',
						items: {
							type: 'string',
							title: 'Factor',
						},
					},
				},
			},
		},
	},
};

export default function Ishikawa() {
	const [diagramData, setDiagramData] = useState({ problem: '', causes: [] });

	const initDiagram = useCallback(() => {
		const $ = go.GraphObject.make;

		const diagram = $(go.Diagram, {
			initialContentAlignment: go.Spot.Center,
			'undoManager.isEnabled': true,
			layout: $(go.TreeLayout, {
				angle: 180,
				arrangement: go.TreeLayout.ArrangementFixedRoots,
				nodeSpacing: 20,
			}),
		});

		diagram.nodeTemplate = $(
			go.Node,
			'Auto',
			$(go.Shape, 'Rectangle', { fill: 'lightgray', stroke: null }),
			$(
				go.TextBlock,
				{ margin: 8, font: 'bold 12pt sans-serif' },
				new go.Binding('text', 'key'),
			),
		);

		diagram.linkTemplate = $(
			go.Link,
			{ routing: go.Link.Orthogonal, corner: 5 },
			$(go.Shape, { strokeWidth: 3, stroke: '#555' }),
		);

		return diagram;
	}, []);

	const onModelChange = useCallback((e) => {
		console.log('GoJS model changed!');
	}, []);

	const onSubmit = (data: IChangeEvent, event: FormEvent<any>) => {
		const { problem, causes } = data.formData;
		const nodeDataArray = [
			{ key: problem, category: 'Problem' },
			...causes.flatMap((cause) => [
				{ key: cause.category, parent: problem },
				...cause.factors.map((factor) => ({
					key: factor,
					parent: cause.category,
				})),
			]),
		];

		const linkDataArray = nodeDataArray
			.filter((node) => node.parent)
			.map((node) => ({ from: node.parent, to: node.key }));

		setDiagramData({ nodeDataArray, linkDataArray });
		console.log('Data submitted: ', problem, causes);
	};

	return (
		<>
			<Form
				schema={ishikawaSchema}
				validator={validator}
				onSubmit={onSubmit}
				className="pb-10"
			/>
			<ReactDiagram
				initDiagram={initDiagram}
				divClassName="diagram-component"
				nodeDataArray={diagramData.nodeDataArray}
				linkDataArray={diagramData.linkDataArray}
				onModelChange={onModelChange}
				style={{ width: '100%', height: '500px' }}
			/>
		</>
	);
}
