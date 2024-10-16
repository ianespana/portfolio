'use client';

import { useState } from 'react';

const questions = [
	{
		id: 1,
		question: 'Pregunta 1:',
		codeA: `// Función para calcular el área de un rectángulo
function calculateRectangleArea(length, width) {
  return length * width;
}`,
		codeB: `// Función para calcular el área de un rectángulo
function calcAreaRect(l, w) {
  return l * w;
}`,
		correctAnswer: 'A',
	},
	{
		id: 2,
		question: 'Pregunta 2:',
		codeA: `// Suma de elementos de una lista
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}`,
		codeB: `// Suma de elementos de una lista
function sumElements(array) {
  return array.reduce((total, current) => total + current, 0);
}`,
		correctAnswer: 'B',
	},
	{
		id: 3,
		question: 'Pregunta 3:',
		codeA: `// Envío de notificación
function notif(usr, msg) {
  send(usr, msg);
}`,
		codeB: `// Envío de notificación
function sendNotificationToUser(user, message) {
  send(user, message);
}`,
		correctAnswer: 'B',
	},
	{
		id: 4,
		question: 'Pregunta 4:',
		codeA: `// Calcula el precio total
function calculateTotalPrice(price, tax) {
  return price + tax;
}`,
		codeB: `// Calcula el precio total
function getTotal(p, t) {
  return p + t;
}`,
		correctAnswer: 'A',
	},
	{
		id: 5,
		question: 'Pregunta 5:',
		codeA: `// Imprime un saludo
function g() {
  console.log("Hola!");
}`,
		codeB: `// Imprime un saludo
function printGreeting() {
  console.log("Hola!");
}`,
		correctAnswer: 'B',
	},
	{
		id: 6,
		question: 'Pregunta 6:',
		codeA: `// Verifica si un número es par
function isEven(n) {
  return n % 2 == 0;
}`,
		codeB: `// Verifica si un número es par
function checkIfNumberIsEven(number) {
  return number % 2 === 0;
}`,
		correctAnswer: 'B',
	},
	{
		id: 7,
		question: 'Pregunta 7:',
		codeA: `// Obtiene la fecha actual
function getCurrentDate() {
  return new Date();
}`,
		codeB: `// Obtiene la fecha actual
function getDate() {
  return new Date();
}`,
		correctAnswer: 'A',
	},
	{
		id: 8,
		question: 'Pregunta 8:',
		codeA: `// Verifica si la edad es mayor o igual a 18
function isAdult(age) {
  return age >= 18;
}`,
		codeB: `// Verifica si la edad es mayor o igual a 18
function checkIfAdult(age) {
  return age >= 18;
}`,
		correctAnswer: 'A',
	},
	{
		id: 9,
		question: 'Pregunta 9:',
		codeA: `// Multiplica dos números
function multiplyNumbers(a, b) {
  return a * b;
}`,
		codeB: `// Multiplica dos números
function mult(a, b) {
  return a * b;
}`,
		correctAnswer: 'A',
	},
];

export default function Page() {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState<{ [key: number]: string }>({});
	const [score, setScore] = useState(0);

	const currentQuestion = questions[currentQuestionIndex];
	const userAnswer = answers[currentQuestion?.id];

	const handleAnswer = (selectedAnswer: string) => {
		if (userAnswer) return; // Evitar que se cambie la respuesta

		const correctAnswer = currentQuestion.correctAnswer;
		const isCorrect = selectedAnswer === correctAnswer;

		setAnswers({ ...answers, [currentQuestion.id]: selectedAnswer });
		if (isCorrect) {
			setScore(score + 1);
		}
	};

	const handleNextQuestion = () => {
		if (currentQuestionIndex < questions.length) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	};

	return (
		<div className="min-h-screen text-white p-8">
			{currentQuestionIndex < questions.length ? (
				<>
					<h1 className="text-center text-5xl font-bold mb-6">Quizz Clean Code</h1>
					<p className="text-center mb-8">
						Elige cuál de los siguientes bloques de código sigue las mejores prácticas de "Clean Code".
					</p>

					<h2 className="text-2xl font-semibold mb-4">{currentQuestion.question}</h2>
					<div className="bg-gray-800 p-4 rounded-lg mb-4">
						<h3 className="text-lg font-medium">Código A:</h3>
						<pre className="bg-gray-700 p-3 rounded-md text-sm overflow-x-auto">
							{currentQuestion.codeA}
						</pre>
					</div>
					<div className="bg-gray-800 p-4 rounded-lg mb-4">
						<h3 className="text-lg font-medium">Código B:</h3>
						<pre className="bg-gray-700 p-3 rounded-md text-sm overflow-x-auto">
							{currentQuestion.codeB}
						</pre>
					</div>
					<div className="flex space-x-4 mb-4">
						<button
							className={`py-2 px-4 rounded-lg transition-colors ${
								userAnswer ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-500'
							} text-white`}
							onClick={() => handleAnswer('A')}
							disabled={!!userAnswer}
						>
							Elegir Código A
						</button>
						<button
							className={`py-2 px-4 rounded-lg transition-colors ${
								userAnswer ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-500'
							} text-white`}
							onClick={() => handleAnswer('B')}
							disabled={!!userAnswer}
						>
							Elegir Código B
						</button>
					</div>

					{userAnswer && (
						<p
							className={`mt-4 font-bold ${userAnswer === currentQuestion.correctAnswer ? 'text-green-500' : 'text-red-500'}`}
						>
							{userAnswer === currentQuestion.correctAnswer ? '¡Correcto!' : 'Incorrecto.'}
						</p>
					)}

					{userAnswer &&
						(currentQuestionIndex < questions.length - 1 ? (
							<button
								className="mt-6 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg transition-colors"
								onClick={handleNextQuestion}
							>
								Siguiente pregunta
							</button>
						) : (
							<button
								className="mt-6 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg transition-colors"
								onClick={handleNextQuestion}
							>
								Ver Resultados
							</button>
						))}
				</>
			) : (
				<div className="text-center">
					<h1 className="text-4xl font-bold mb-6">¡Has completado el cuestionario!</h1>
					<p className="text-2xl font-semibold">
						Tu puntuación final es: {score} / {questions.length}
					</p>
				</div>
			)}
		</div>
	);
}
