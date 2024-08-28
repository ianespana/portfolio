"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home", style: "hover:bg-blue-500 hover:ring-blue-600" },
  { href: "/education", label: "Education", style: "hover:bg-orange-500 hover:ring-orange-600" },
  { href: "/experience", label: "Experience", style: "hover:bg-green-500 hover:ring-green-600"  },
  { href: "/projects", label: "Projects", style: "hover:bg-yellow-500 hover:ring-yellow-600" },
  { href: "/resume", label: "Resume", style: "hover:bg-violet-500 hover:ring-violet-600" },
]
export default function NavLinks(){
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link className={`transition duration-300 bg-transparent text-white px-4 py-2 rounded-md hover:shadow-lg hover:ring-4 hover:ring-opacity-30 ${link.style} ${pathname == link.href ? "font-semibold" : ""}`} key={link.href} href={link.href}>{link.label}</Link>
      ))}
    </>
  )
}
