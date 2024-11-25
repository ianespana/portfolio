'use client';
import { useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

export default function ChefAssistant() {
	const [buttonLock, setButtonLock] = useState<boolean>(false);
	const [query, setQuery] = useState<string>('');
	const [response, setResponse] = useState<string>('');
	const [error, setError] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setResponse('');
		setError('');
		setButtonLock(true);

		if (!query.trim()) {
			setError('Please enter a food-related question!');
			setButtonLock(false);
			return;
		}

		try {
			const res = await fetch('/api/chef-assistant', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query }),
			});

			const data = await res.json();

			if (res.ok) {
				const processedContent = await remark().use(html).process(data.reply);
				const contentHtml = processedContent.toString();
				setResponse(contentHtml);
			} else {
				setError(data.error || 'Something went wrong.');
			}
		} catch (err) {
			console.error('Error connecting to the assistant:', err);
			setError('Error connecting to the assistant.');
		}

		setButtonLock(false);
	};

	return (
		<div className="flex flex-col items-center justify-center p-4">
			{response && (
				<div
					className="mt-4 p-4 bg-neutral-900 rounded-lg shadow-md"
					dangerouslySetInnerHTML={{ __html: response }}
				/>
			)}
			{error && (
				<div className="mt-4 bg-red-100 p-4 rounded-lg shadow-md">
					<p className="text-red-800">{error}</p>
				</div>
			)}
			<form onSubmit={handleSubmit} className="w-full max-w-md mt-10">
				<textarea
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Pregunta por una receta o algo relacionado con comida..."
					className="w-full p-4 border rounded-lg mb-4 bg-neutral-900"
					rows={4}
				/>
				<button
					type="submit"
					className="w-full bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-neutral-600"
					disabled={buttonLock}
				>
					Preguntarle al chef
				</button>
			</form>
		</div>
	);
}
