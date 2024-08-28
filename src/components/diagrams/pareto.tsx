'use client';
import { RJSFSchema } from '@rjsf/utils';
import Form from '@rjsf/mui';
import { IChangeEvent } from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { FormEvent, useState } from 'react';
import { Bar, Chart } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

const paretoDiagram: RJSFSchema = {
	type: 'object',
	properties: {
		data: {
			type: 'array',
			title: 'Datos',
			items: {
				type: 'object',
				required: ['title', 'value'],
				properties: {
					title: {
						type: 'string',
						title: 'Título',
					},
					value: {
						type: 'number',
						title: 'Valor',
						default: 0,
					},
				},
			},
		},
	},
};

function ParetoChart(labels, values) {
	// Calculate cumulative percentages
	const total = values.reduce((acc, val) => acc + val, 0);
	let cumulative = 0;
	const cumulativePercentages = values.map((value) => {
		cumulative += value;
		return (cumulative / total) * 100;
	});

	// Data for the chart
	const data = {
		labels: labels,
		datasets: [
			{
				type: 'bar' as const,
				label: 'Frequency',
				data: values,
				backgroundColor: 'rgba(75, 192, 192, 0.5)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1,
				yAxisID: 'y',
			},
			{
				type: 'line' as const,
				label: 'Cumulative Percentage',
				data: cumulativePercentages,
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 2,
				fill: false,
				yAxisID: 'y-axis-2',
			},
		],
	};

	// Chart options
	const options = {
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					// This property is where the error might be
					max: total, // The total sum of values for bar chart y-axis
					stepSize: 10, // Example step size, can be adjusted or removed
					color: 'white',
				},
				position: 'left' as const, // Correctly typed position
				grid: {
					color: 'gray',
				},
			},
			'y-axis-2': {
				beginAtZero: true,
				min: 0,
				max: 100,
				ticks: {
					callback: (value) => `${value}%`,
					color: 'white',
				},
				position: 'right' as const, // Correctly typed position
				grid: {
					drawOnChartArea: false, // Only want the grid lines for one axis to show up
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				labels: {
					color: 'white',
				},
			},
			tooltip: {
				callbacks: {
					label: (context) => {
						if (context.dataset.type === 'line') {
							return `${context.raw.toFixed(2)}%`;
						}
						return context.raw;
					},
				},
			},
		},
	};

	return { data, options };
}

export default function Pareto() {
	const [chartData, setChartData] = useState(null);
	const onSubmit = (data: IChangeEvent, event: FormEvent<any>) => {
		const labels: string[] = [];
		const values: string[] = [];

		for (const datum of data.formData.data) {
			labels.push(datum.title);
			values.push(datum.value);
		}

		const chartData = ParetoChart(labels, values);
		setChartData(chartData);
		console.log('Data submitted: ', chartData);
	};

	return (
		<>
			<Form
				schema={paretoDiagram}
				validator={validator}
				onSubmit={onSubmit}
				className="pb-10"
			/>
			{chartData && (
				<Chart
					type={'bar'}
					data={chartData.data}
					options={chartData.options}
				/>
			)}
		</>
	);
}
