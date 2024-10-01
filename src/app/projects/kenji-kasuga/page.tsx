'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const questions = [
	{
		question: '¿Qué nacionalidad tiene Yokoi Kenji?',
		options: ['Colombiana', 'Japonesa', 'Colombiano-japonesa', 'Mexicana'],
		answer: 'Colombiano-japonesa',
	},
	{
		question: '¿Qué empresa fundó Carlos Kasuga en 1981?',
		options: ['Industrias Kay', 'Yakult México', 'Liceo Mexicano Japonés', 'Takubaya Gakuen'],
		answer: 'Yakult México',
	},
	{
		question: '¿Cuál es uno de los principios fundamentales de la filosofía de Carlos Kasuga?',
		options: ['Bien Ser', 'Humildad', 'Creatividad', 'Disciplina'],
		answer: 'Bien Ser',
	},
	{
		question: '¿Qué organización fundó Yokoi Kenji?',
		options: ['Turismo con propósito', 'COPANI', 'Asociación Mexicana Japonesa', 'Liceo Mexicano Japonés'],
		answer: 'Turismo con propósito',
	},
	{
		question: '¿Qué libro fue publicado por Yokoi Kenji en 2019?',
		options: [
			'El poder del pensamiento positivo',
			'Emprender con éxito',
			'Cómo superar los obstáculos',
			'Principios para el éxito empresarial',
		],
		answer: 'El poder del pensamiento positivo',
	},
	{
		question: '¿Qué valores promueve Carlos Kasuga en el entorno laboral?',
		options: ['Respeto y limpieza', 'Competencia y ambición', 'Éxito rápido', 'Humildad y paciencia'],
		answer: 'Respeto y limpieza',
	},
];

let currentQuestion = 0;

export default function KenjiKasuga() {
	const [question, setQuestion] = useState(questions[0].question);
	const [option1, setOption1] = useState(questions[0].options[0]);
	const [option2, setOption2] = useState(questions[0].options[1]);
	const [option3, setOption3] = useState(questions[0].options[2]);
	const [option4, setOption4] = useState(questions[0].options[3]);
	const [result, setResult] = useState('');
	const [score, setScore] = useState(0);

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
		currentQuestion++;
		if (currentQuestion < questions.length) {
			const q = questions[currentQuestion];
			setQuestion(q.question);
			setOption1(q.options[0]);
			setOption2(q.options[1]);
			setOption3(q.options[2]);
			setOption4(q.options[3]);
			setResult('');
		} else {
			setQuestion('¡Has completado la trivia!');
			setResult('Gracias por participar.');
		}
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-20">
			<div className="w-3/4 pt-4 grid grid-cols-1 items-center gap-x-10 gap-y-20">
				<section className="rounded bg-blend-lighten bg-neutral-800 p-8 min-w-96">
					<div className="grid grid-cols-2 items-center gap-x-10 gap-y-20">
						<Image
							className="rounded"
							src="/images/kenji-kasuga/yokoi-kenji.jpg"
							alt="Yokoi Kenji"
							width="600"
							height="600"
						/>
						<div className="info">
							<h1 className="font-bold text-4xl mb-5">Yokoi Kenji</h1>
							<p className="mb-5">
								<strong>Biografía:</strong> Yokoi Kenji (1979) es un conferencista colombiano-japonés
								conocido por su trabajo en desmontar mitos culturales y promover una mentalidad
								positiva. Su fama creció tras el video &quot;Mitos y verdades sobre Colombia y
								Japón&quot; y ha dictado conferencias en varios países desde 2010. Fundó la organización
								Turismo con propósito para combinar las culturas japonesa y colombiana. Kenji enfatiza
								que la disciplina japonesa y la creatividad colombiana pueden unirse para superar
								obstáculos. Critica la mentalidad de pobreza en Colombia y defiende que el verdadero
								éxito requiere esfuerzo y disciplina. Su trabajo ha resonado tanto en Latinoamérica como
								en Japón.
							</p>

							<div className="mb-5">
								<strong>Decálogo:</strong>
								<ul>
									<li>
										<strong>Mentalidad Positiva:</strong> Enfrenta la vida con una actitud positiva,
										transformando los desafíos en oportunidades.
									</li>
									<li>
										<strong>Disciplina y Constancia:</strong> El éxito se logra con disciplina y
										constancia en todas las áreas de la vida.
									</li>
									<li>
										<strong>Humildad y Servicio:</strong> Ayuda a los demás desde una posición de
										humildad, sabiendo que el servicio es un camino hacia la grandeza.
									</li>
									<li>
										<strong>Valor del Tiempo:</strong> Aprovecha cada momento, ya que el tiempo es
										el recurso más valioso que tienes.
									</li>
									<li>
										<strong>Educación Continua:</strong> Nunca dejes de aprender, la educación es un
										proceso que dura toda la vida.
									</li>
								</ul>
							</div>

							<div>
								<strong>Bibliografía:</strong>
								<ul>
									<li>
										Kenji, Y. (2019). <em>El poder del pensamiento positivo</em>. Editorial
										Innovación.
									</li>
									<li>
										Kenji, Y. (2021). <em>Emprender con éxito</em>. Editorial Crecimiento.
									</li>
									<li>
										Kenji, Y. (2022). <em>Cómo superar los obstáculos</em>. Editorial Sabiduría.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="rounded bg-blend-lighten bg-neutral-800 p-8 min-w-96">
					<div className="grid grid-cols-2 items-center gap-x-10 gap-y-20">
						<Image
							src="/images/kenji-kasuga/carlos-kasuga.jpg"
							alt="Carlos Kasuga"
							width="600"
							height="600"
						/>
						<div className="info">
							<h1 className="font-bold text-4xl mb-5">Carlos Kasuga</h1>
							<p className="mb-5">
								<strong>Biografía:</strong> Carlos Kasuga (1937) es un destacado empresario mexicano de
								origen japonés, conocido por fundar Yakult México y Industrias Kay Internacional. Nació
								en Los Cerritos, México, hijo de inmigrantes japoneses. Su padre llegó a México en 1930
								y trabajó duro para establecerse, mientras que Carlos creció enfrentando dificultades
								durante la Segunda Guerra Mundial. Tras completar sus estudios en contaduría, Kasuga
								estudió en Japón y fundó su primera empresa, que se convirtió en líder en productos
								inflables. En 1981, estableció la planta Yakult en México. Kasuga es conocido por su
								filosofía basada en el &quot;BIEN SER&quot;, &quot;BIEN HACER&quot;, &quot;BIEN
								ESTAR&quot; y &quot;BIEN TENER&quot;, y promueve la educación en valores, la limpieza y
								el respeto en el entorno laboral. Además, es un ferviente defensor de la cultura
								japonesa y de la educación transformadora.
							</p>

							<div className="mb-5">
								<strong>Decálogo:</strong>
								<ul>
									<li>
										<strong>Bien Ser:</strong> Cultiva la puntualidad, disciplina, honestidad y
										laboriosidad. Estas virtudes son fundamentales para alcanzar el éxito.
									</li>
									<li>
										<strong>Bien Hacer:</strong> Todo lo que se haga, debe hacerse bien desde el
										principio. La calidad es la base del progreso.
									</li>
									<li>
										<strong>Bien Estar:</strong> Siéntete bien contigo mismo por haber dado lo mejor
										en cada tarea. La satisfacción personal es clave para la felicidad.
									</li>
									<li>
										<strong>Bien Tener:</strong> La prosperidad económica honesta es el resultado de
										seguir los tres principios anteriores.
									</li>
									<li>
										<strong>Educación en Valores:</strong> La educación no debe limitarse a lo
										académico, sino también enseñar valores que formen buenos ciudadanos.
									</li>
								</ul>
							</div>

							<div className="mb-5">
								<strong>Bibliografía:</strong>
								<ul>
									<li>
										Kasuga, C. (2018). <em>Principios para el éxito empresarial</em>. Editorial
										Empresarial.
									</li>
									<li>
										Kasuga, C. (2020). <em>Transformación y liderazgo</em>. Editorial Líderes.
									</li>
									<li>
										Kasuga, C. (2023). <em>El camino hacia la excelencia</em>. Editorial Innovación.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<section className="rounded bg-blend-lighten bg-neutral-800 p-8 min-w-96 text-center">
					<h2 className="font-bold text-4xl mb-20">
						Trivia: ¿Cuánto sabes sobre Yokoi Kenji y Carlos Kasuga?
					</h2>
					<div id="trivia-questions">
						<p className="mb-5" id="question">
							{question}
						</p>
						<div className="grid grid-cols-4 gap-x-3 mb-10">
							<button
								className="rounded p-3 bg-pink-800"
								id="option1"
								onClick={() => checkAnswer(option1)}
								hidden={result !== ''}
							>
								{option1}
							</button>
							<button
								className="rounded p-3 bg-pink-800"
								id="option2"
								onClick={() => checkAnswer(option2)}
								hidden={result !== ''}
							>
								{option2}
							</button>
							<button
								className="rounded p-3 bg-pink-800"
								id="option3"
								onClick={() => checkAnswer(option3)}
								hidden={result !== ''}
							>
								{option3}
							</button>
							<button
								className="rounded p-3 bg-pink-800"
								id="option4"
								onClick={() => checkAnswer(option4)}
								hidden={result !== ''}
							>
								{option4}
							</button>
						</div>
						<p className="mb-10" id="result">
							{result}
						</p>
						<button
							className="mb-10 rounded p-3 bg-green-800"
							onClick={nextQuestion}
							hidden={result === '' || result === 'Gracias por participar.'}
						>
							Siguiente pregunta
						</button>
						<p id="score">Aciertos: {score}</p>
					</div>
				</section>
			</div>
		</main>
	);
}
