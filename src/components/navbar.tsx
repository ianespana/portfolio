import NavLinks from './nav-links';

export default function Navbar() {
	return (
		<nav className="w-3/4 mx-auto flex justify-between py-5">
			<h1 className="flex bold px-4 py-2 text-2xl"></h1>
			<ul className="flex gap-4">
				<NavLinks />
			</ul>
		</nav>
	);
}
