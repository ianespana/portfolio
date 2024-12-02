'use client';
import React, { useEffect, useState } from 'react';

const questions = [
	{
		question: '¿Qué es la inteligencia social según Daniel Goleman?',
		options: [
			'La habilidad de resolver problemas matemáticos',
			'La capacidad de conectarse y relacionarse efectivamente con los demás',
			'El conocimiento técnico avanzado',
			'La capacidad de liderar proyectos empresariales',
		],
		answer: 'La capacidad de conectarse y relacionarse efectivamente con los demás',
	},
	{
		question: '¿Qué impacto tienen las relaciones tóxicas según la neurociencia citada en el libro?',
		options: [
			'Son neutrales y no afectan al cerebro',
			'Pueden envenenar lentamente nuestro cuerpo',
			'Fortalecen las conexiones neuronales',
			'Mejoran la resiliencia emocional',
		],
		answer: 'Pueden envenenar lentamente nuestro cuerpo',
	},
	{
		question: '¿Cuál de las siguientes es una de las habilidades clave en la inteligencia social?',
		options: ['Autodisciplina', 'Empatía', 'Concentración', 'Memoria'],
		answer: 'Empatía',
	},
	{
		question: '¿Cómo define Goleman las relaciones de alta calidad?',
		options: [
			'Aquellas que son duraderas y predecibles',
			'Aquellas que generan resonancia emocional positiva',
			'Aquellas que son profesionales y formales',
			'Aquellas que se mantienen en el tiempo sin cambios',
		],
		answer: 'Aquellas que generan resonancia emocional positiva',
	},
	{
		question: 'Según el libro, ¿cuál es una estrategia clave para desarrollar la inteligencia social?',
		options: [
			'Evitar interacciones complejas',
			'Practicar la escucha activa',
			'Concentrarse solo en los propios problemas',
			'Evitar mostrar emociones',
		],
		answer: 'Practicar la escucha activa',
	},
	{
		question: '¿Qué descubrimiento sobre las neuronas espejo destaca el libro?',
		options: [
			'Que son esenciales para la inteligencia técnica',
			'Que nos permiten entender y reflejar las emociones de los demás',
			'Que ayudan en la toma de decisiones rápidas',
			'Que son responsables del razonamiento lógico',
		],
		answer: 'Que nos permiten entender y reflejar las emociones de los demás',
	},
	{
		question: '¿Cuál es el papel de la empatía en la inteligencia social?',
		options: [
			'Es irrelevante',
			'Ayuda a comprender las emociones y perspectivas de los demás',
			'Se limita al ámbito profesional',
			'Es una habilidad innata que no se puede mejorar',
		],
		answer: 'Ayuda a comprender las emociones y perspectivas de los demás',
	},
	{
		question: '¿Qué ocurre en nuestro cerebro durante una interacción positiva?',
		options: [
			'Se liberan hormonas de estrés',
			'Se activan los circuitos de recompensa y bienestar',
			'Se incrementa el nivel de cortisol',
			'No hay cambios significativos',
		],
		answer: 'Se activan los circuitos de recompensa y bienestar',
	},
	{
		question: '¿Qué rol juegan las relaciones sociales en la salud física según Goleman?',
		options: [
			'Son irrelevantes',
			'Pueden influir directamente en la longevidad y el bienestar',
			'Solo afectan el estado emocional',
			'Pueden ser perjudiciales',
		],
		answer: 'Pueden influir directamente en la longevidad y el bienestar',
	},
	{
		question: '¿Cómo afectan las relaciones de alta calidad al rendimiento laboral?',
		options: [
			'Reducen la productividad',
			'Mejoran la comunicación y la colaboración',
			'Generan conflictos innecesarios',
			'No tienen impacto significativo',
		],
		answer: 'Mejoran la comunicación y la colaboración',
	},
	{
		question: '¿Qué significa “resonancia emocional” en el contexto de la inteligencia social?',
		options: [
			'Sentir emociones negativas intensamente',
			'Conectar emocionalmente con los demás de manera positiva',
			'Evitar emociones en interacciones sociales',
			'Experimentar solo emociones personales',
		],
		answer: 'Conectar emocionalmente con los demás de manera positiva',
	},
	{
		question: '¿Cuál es una característica de las relaciones sociales exitosas?',
		options: [
			'Evitar conflictos',
			'Ser recíprocas y beneficiosas para ambas partes',
			'Estar libres de cualquier tipo de emoción',
			'Centrarse únicamente en objetivos individuales',
		],
		answer: 'Ser recíprocas y beneficiosas para ambas partes',
	},
	{
		question: '¿Qué impacto tiene la falta de habilidades sociales en los equipos de trabajo?',
		options: [
			'Fortalece la cohesión del grupo',
			'Aumenta los conflictos y reduce la productividad',
			'Mejora la resolución de problemas',
			'No tiene ningún impacto',
		],
		answer: 'Aumenta los conflictos y reduce la productividad',
	},
	{
		question: '¿Cómo se puede fomentar la inteligencia social en un entorno educativo?',
		options: [
			'Centrarse únicamente en habilidades técnicas',
			'Promoviendo la colaboración y el aprendizaje grupal',
			'Reduciendo las interacciones entre estudiantes',
			'Limitando las actividades sociales',
		],
		answer: 'Promoviendo la colaboración y el aprendizaje grupal',
	},
];

export default function InteligenciaSocial() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
	const [score, setScore] = useState(0);
	const [result, setResult] = useState('');

	// Shuffle options when component mounts or question changes
	useEffect(() => {
		const shuffled = shuffleArray(questions[currentQuestion].options);
		setShuffledOptions(shuffled);
	}, [currentQuestion]);

	function shuffleArray(array: string[]) {
		return [...array].sort(() => Math.random() - 0.5);
	}

	function checkAnswer(option: string) {
		const q = questions[currentQuestion];
		if (option === q.answer) {
			setResult('¡Correcto!');
			setScore(score + 1);
		} else {
			setResult('Incorrecto');
		}
	}

	function nextQuestion() {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
			setResult('');
		} else {
			setResult('¡Has completado la trivia!');
		}
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-20">
			<div className="w-3/4 pt-4 grid grid-cols-1 items-center gap-x-10 gap-y-20">
				<section className="rounded bg-blend-lighten bg-neutral-800 p-8 min-w-96 text-center">
					<h2 className="font-bold text-4xl mb-20">Trivia: ¿Cuánto sabes sobre La Inteligencia Social?</h2>
					<div id="trivia-questions">
						{currentQuestion < questions.length ? (
							<>
								<p className="mb-5" id="question">
									{questions[currentQuestion].question}
								</p>
								<div className="grid grid-cols-4 gap-x-3 mb-10">
									{shuffledOptions.map((option, index) => (
										<button
											key={index}
											className="rounded p-3 bg-pink-800"
											onClick={() => checkAnswer(option)}
											hidden={result !== ''}
										>
											{option}
										</button>
									))}
								</div>
								<p className="mb-10" id="result">
									{result}
								</p>
								<button
									className="mb-10 rounded p-3 bg-green-800"
									onClick={nextQuestion}
									hidden={result === '' || result === '¡Has completado la trivia!'}
								>
									Siguiente pregunta
								</button>
								<p id="score">Aciertos: {score}</p>
							</>
						) : (
							<p className="mb-10">
								¡Gracias por participar! Tu puntaje final es: {score}/{questions.length}
							</p>
						)}
					</div>
				</section>
			</div>
		</main>
	);
}
