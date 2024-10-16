export default function Cycles() {
	return (
		<section className="p-6 bg-neutral-900 rounded-md shadow-md w-full h-full">
			<h2 className="text-2xl font-bold mb-4">Círculos virtuosos y viciosos</h2>
			<div className="mb-4">
				<h3 className="text-xl font-semibold">Círculo virtuoso</h3>
				<ul className="list-disc list-inside">
					<li>Las instituciones inclusivas generan crecimiento económico.</li>
					<li>El crecimiento económico amplía la clase media.</li>
					<li>Una clase media fortalecida demanda más derechos y participación política.</li>
				</ul>
			</div>
			<div>
				<h3 className="text-xl font-semibold">Círculo vicioso</h3>
				<ul className="list-disc list-inside">
					<li>Las instituciones extractivas concentran la riqueza y el poder.</li>
					<li>La élite mantiene estas instituciones para proteger sus intereses.</li>
					<li>Esto genera pobreza y exclusión para la mayoría.</li>
				</ul>
			</div>
		</section>
	);
}
