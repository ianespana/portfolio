import ChefAssistant from '@/components/chef-assistant';
import Image from 'next/image';
import { Button } from '@mui/material';

export default function InteligenciaArtificial() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="w-3/4 pt-4 items-center">
				<div className="text-center">
					<h1 className="text-6xl font-bold">Inteligencia Artificial</h1>
				</div>
			</div>
			<div className="w-3/4 text-center flex min-h-screen flex-col items-center justify-between relative">
				<ChefAssistant />
				<div className="grid grid-cols-2 gap-4">
					<div className="my-4 p-4 bg-neutral-900 rounded-lg shadow-md content-center justify-items-center">
						<Image src={'/images/claude.png'} alt={'Claude logo'} width={200} height={200} />
						<p>
							Claude es una inteligencia artificial desarrollada por Anthropic, diseñada para interactuar
							de manera conversacional, responder preguntas y realizar tareas complejas. Está entrenada
							con un enfoque en la seguridad, la ética y la capacidad de entender el contexto, ofreciendo
							respuestas precisas y útiles en diversos temas.
						</p>
						<Button
							className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-neutral-600"
							href="https://claude.ai/"
							rel="noopener noreferrer"
						>
							Visitar
						</Button>
					</div>
					<div className="my-4 p-4 bg-neutral-900 rounded-lg shadow-md content-center justify-items-center">
						<Image src={'/images/craiyon.png'} alt={'Claude logo'} width={200} height={200} />
						<p>
							Craiyon es una inteligencia artificial que genera imágenes a partir de descripciones
							textuales. Diseñada para ser accesible y fácil de usar, permite a los usuarios visualizar
							ideas creativas rápidamente mediante la creación de gráficos basados en texto.
						</p>
						<Button
							className="mt-4 bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-neutral-600"
							href="https://craiyon.com/"
							rel="noopener noreferrer"
						>
							Visitar
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
