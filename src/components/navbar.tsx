import NavLinks from "./nav-links";

export default function Navbar(){
  return(
    <nav className="max-w-4xl mx-auto flex justify-between p-4">
      <h1 className="flex bold px-4 py-2">Ian</h1>
      <ul className="flex gap-4">
        <NavLinks />
      </ul>
    </nav>
  )
}