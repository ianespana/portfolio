export default function Politics() {
	return (
		<section className="p-6 bg-neutral-900 rounded-md shadow-md w-full h-full">
			<h2 className="text-2xl font-bold mb-4">El papel de la política en el desarrollo</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<h3 className="text-xl font-semibold">Política Inclusiva</h3>
					<ul className="list-disc list-inside">
						<li>Democracia y participación amplia: Ejemplos como Noruega y Canadá.</li>
						<li>Innovación y crecimiento: Estados Unidos en el siglo XX.</li>
					</ul>
				</div>
				<div>
					<h3 className="text-xl font-semibold">Política Extractiva</h3>
					<ul className="list-disc list-inside">
						<li>Concentración de poder en una élite: Ejemplo actual, Corea del Norte.</li>
						<li>Corrupción y estancamiento: Venezuela y Zimbabwe.</li>
					</ul>
				</div>
			</div>
			<div className="mt-4">
				<h3 className="text-xl font-semibold">Impacto a largo plazo</h3>
				<p>
					Círculo Virtuoso (en sistemas inclusivos): Participación → Innovación → Estabilidad → Crecimiento.
				</p>
				<p>
					Círculo Vicioso (en sistemas extractivos): Concentración de poder → Corrupción → Desigualdad →
					Estancamiento.
				</p>
			</div>
		</section>
	);
}
