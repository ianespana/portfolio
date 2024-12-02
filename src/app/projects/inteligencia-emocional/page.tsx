'use client';
import React, { useState } from 'react';

const scenarios = [
	{
		situation: 'Durante una reunión, un colega critica tu idea de forma agresiva, causando tensión en el equipo.',
		options: [
			'Responder inmediatamente con una crítica hacia su desempeño.',
			'Mantener la calma, agradecer sus comentarios y pedir detalles para mejorar tu propuesta.',
			'Ignorar el comentario y continuar como si nada hubiera pasado.',
		],
		feedback: [
			'Responder con una crítica genera un ambiente defensivo y hostil, afectando la productividad del equipo. En "La práctica de la inteligencia emocional", Goleman explica que reaccionar impulsivamente puede escalar el conflicto y dañar las relaciones.',
			'Excelente manejo emocional. Mostraste autocontrol, una habilidad clave para mantener relaciones laborales efectivas, y promoviste una discusión constructiva. Esto fortalece la confianza en el equipo, como lo destaca Goleman en su trabajo.',
			'Ignorar el comentario puede evitar el conflicto inmediato, pero no aborda el problema de fondo. Goleman subraya la importancia de confrontar los problemas con empatía y resolución activa.',
		],
		correctOption: 1,
	},
	{
		situation:
			'Un miembro del equipo ha bajado su productividad y confiesa que se siente ignorado en las decisiones importantes.',
		options: [
			'Decirle que debe cumplir con sus responsabilidades sin importar sus sentimientos.',
			'Escuchar activamente, mostrar empatía, y buscar formas de incluirlo en las decisiones del equipo.',
			'Asignarle tareas más simples para reducir su carga.',
		],
		feedback: [
			'Una respuesta rígida puede aumentar la frustración y la desconexión del colaborador. Según Goleman, ignorar las emociones de los demás afecta la cohesión del equipo y reduce la efectividad.',
			'Escuchar y mostrar empatía demuestra inteligencia emocional en acción. Goleman destaca que incluir a los colaboradores mejora su compromiso y rendimiento.',
			'Reducir su carga puede aliviar temporalmente la situación, pero no aborda la raíz del problema. Goleman enfatiza que resolver conflictos requiere involucrar a las personas en las soluciones.',
		],
		correctOption: 1,
	},
	{
		situation: 'Dos miembros del equipo tienen un desacuerdo constante que afecta la productividad general.',
		options: [
			'Hablar con cada uno por separado para entender sus perspectivas y buscar una solución común.',
			'Ignorar la situación y dejar que la resuelvan entre ellos.',
			'Reasignarlos a diferentes proyectos para evitar conflictos.',
		],
		feedback: [
			'Abordar el conflicto directamente con empatía es la mejor estrategia. Goleman explica que un líder emocionalmente inteligente actúa como mediador para restaurar la armonía.',
			'Ignorar el conflicto puede permitir que las tensiones se intensifiquen, afectando el rendimiento del equipo. Goleman enfatiza que evitar problemas no es una solución efectiva.',
			'Reasignarlos podría resolver el problema temporalmente, pero no fomenta habilidades de resolución de conflictos ni mejora la dinámica del equipo. Goleman sugiere trabajar en soluciones a largo plazo.',
		],
		correctOption: 0,
	},
	{
		situation:
			'Un nuevo miembro del equipo tiene dificultades para adaptarse a las dinámicas del grupo y se siente excluido.',
		options: [
			'Asignarle tareas más simples para que gane confianza.',
			'Organizar una reunión para integrarlo y explicarle las dinámicas del equipo.',
			'Ignorar la situación y esperar que se adapte con el tiempo.',
		],
		feedback: [
			'Asignar tareas simples puede ser útil inicialmente, pero no fomenta una integración real. Goleman sugiere estrategias activas para construir relaciones.',
			'Incluirlo proactivamente fortalece la cohesión del equipo y demuestra empatía. Goleman destaca la importancia de conectar emocionalmente para fomentar un entorno saludable.',
			'Esperar pasivamente puede aumentar el aislamiento del nuevo miembro. Goleman subraya que la inclusión activa es clave para el éxito grupal.',
		],
		correctOption: 1,
	},
	{
		situation:
			'El equipo está bajo presión para cumplir con un plazo ajustado, lo que genera tensiones y discusiones entre los miembros.',
		options: [
			'Escuchar las preocupaciones del equipo y redistribuir las tareas para equilibrar la carga.',
			'Ignorar las tensiones y exigir que cumplan con los plazos.',
			'Extender el plazo para evitar conflictos.',
		],
		feedback: [
			'Redistribuir la carga demuestra liderazgo emocional y empatía, cualidades que Goleman resalta como esenciales para manejar el estrés grupal.',
			'Ignorar las tensiones puede llevar a un agotamiento emocional y conflictos mayores. Según Goleman, los líderes deben abordar las emociones para mantener la productividad.',
			'Extender los plazos puede aliviar temporalmente la presión, pero podría afectar la credibilidad del equipo. Goleman sugiere equilibrar las necesidades emocionales y los objetivos.',
		],
		correctOption: 0,
	},
	{
		situation: 'Recibes feedback negativo sobre tu gestión en una reunión de evaluación.',
		options: [
			'Ponerse a la defensiva.',
			'Escuchar activamente el feedback y pedir sugerencias para mejorar.',
			'No responder y evitar confrontaciones.',
		],
		feedback: [
			'Defenderte puede hacer que los demás perciban que no aceptas críticas. Goleman enfatiza que recibir feedback con apertura es crucial para el desarrollo emocional.',
			'Escuchar y buscar mejoras demuestra humildad y compromiso con el crecimiento. Goleman resalta que esta actitud fortalece las relaciones y la confianza.',
			'Evitar la confrontación puede parecer una salida fácil, pero muestra falta de interés en el desarrollo personal y profesional. Goleman sugiere abordar las críticas con empatía y acción.',
		],
		correctOption: 1,
	},
];

export default function Simulation() {
	const [currentScenario, setCurrentScenario] = useState(0);
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [score, setScore] = useState(0);

	const scenario = scenarios[currentScenario];

	const handleOptionClick = (index: number) => {
		setSelectedOption(index);
		if (index === scenario.correctOption) {
			setScore(score + 1);
		}
	};

	const nextScenario = () => {
		if (currentScenario < scenarios.length) {
			setCurrentScenario(currentScenario + 1);
			setSelectedOption(null);
		}
	};

	return (
		<main className="flex flex-col items-center py-10">
			<h1 className="font-bold text-4xl mb-20">¿Qué tan emocialmente inteligente eres?</h1>
			<div className="w-3/4 bg-neutral-800 p-6 rounded">
				{currentScenario < scenarios.length ? (
					<>
						<h2 className="text-2xl font-bold mb-4">Escenario {currentScenario + 1}</h2>
						<p className="mb-4">{`${scenario.situation} ¿Qué haces?`}</p>
						<div className="grid grid-cols-1 gap-4">
							{scenario.options.map((option, index) => (
								<button
									key={index}
									className={`p-3 rounded ${
										selectedOption === index
											? index === scenario.correctOption
												? 'bg-green-500'
												: 'bg-red-500'
											: 'bg-blue-500'
									}`}
									disabled={selectedOption !== null}
									onClick={() => handleOptionClick(index)}
								>
									{option}
								</button>
							))}
						</div>
						{selectedOption !== null && <p className="mt-4">{scenario.feedback[selectedOption]}</p>}
						<button
							className="mt-6 p-3 rounded bg-gray-500 disabled:bg-gray-700"
							onClick={nextScenario}
							disabled={selectedOption === null}
						>
							{currentScenario < scenarios.length - 1 ? 'Siguiente Escenario' : 'Finalizar'}
						</button>
					</>
				) : (
					<p className="text-xl font-bold">
						¡Has completado la simulación! Puntaje final: {score}/{scenarios.length}
					</p>
				)}
			</div>
		</main>
	);
}
