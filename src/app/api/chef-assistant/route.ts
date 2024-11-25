import { NextResponse } from 'next/server';
import { ClientOptions, OpenAI } from 'openai';

const configuration: ClientOptions = {
	apiKey: process.env.OPENAI_API_KEY,
};
const openai = new OpenAI(configuration);

const isFoodRelated = (query: string): boolean => {
	const keywords = ['recipe', 'cook', 'food', 'dish', 'ingredients', 'meal', 'flavor', 'cuisine'];
	return keywords.some((keyword) => query.toLowerCase().includes(keyword));
};

export async function POST(request: Request) {
	const body = await request.json();

	const query = body.query as string;

	if (!query) {
		return NextResponse.json({ error: 'Query must be a non-empty.' }, { status: 400 });
	}

	try {
		const assistant = await openai.beta.assistants.create({
			name: 'Pocket Chef',
			instructions:
				'You are a chef specialized in recipes and food. You absolutely MUST NOT respond to anything that is not food or recipe related.',
			model: 'gpt-4o-mini',
		});

		const thread = await openai.beta.threads.create();

		await openai.beta.threads.messages.create(thread.id, {
			role: 'user',
			content: query,
		});

		const run = await openai.beta.threads.runs.createAndPoll(thread.id, {
			assistant_id: assistant.id,
		});

		if (run.status !== 'completed') {
			console.log(run.status);
			return;
		}

		const messages = await openai.beta.threads.messages.list(run.thread_id);
		let reply = 'No response.';
		for (const message of messages.data.reverse()) {
			if (message.content[0].type === 'text') {
				console.log(`${message.role} > ${message.content[0].text.value}`);
				reply = message.content[0].text.value;
			}
		}
		return NextResponse.json({ reply });
	} catch (error) {
		console.error('OpenAI API error:', error);
		return NextResponse.json({ error: 'Failed to process your request.' }, { status: 500 });
	}
}
