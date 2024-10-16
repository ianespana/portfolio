export default function Comparissons() {
	return (
		<section className="p-6 bg-neutral-900 rounded-md shadow-md w-full h-full">
			<h2 className="text-2xl font-bold mb-4">Comparación: Instituciones Inclusivas vs. Extractivas</h2>
			<table className="table-auto w-full text-left border-collapse border border-gray-300">
				<thead>
					<tr className="bg-neutral-700">
						<th className="border border-gray-300 px-4 py-2">País con Instituciones Inclusivas</th>
						<th className="border border-gray-300 px-4 py-2">País con Instituciones Extractivas</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border border-gray-300 px-4 py-2">Corea del Sur</td>
						<td className="border border-gray-300 px-4 py-2">Corea del Norte</td>
					</tr>
					<tr>
						<td className="border border-gray-300 px-4 py-2">Estados Unidos</td>
						<td className="border border-gray-300 px-4 py-2">América Latina colonial</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}
