import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialMediaLinks } from "@/app/config";

export default function SocialMediaLinks(){
  return (
    <>
      {socialMediaLinks.map((link) => (
        <Link className={`inline-block rounded-full p-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-300 hover:ring-gray-600 hover:ring-2 hover:ring-opacity-80`} style={{ backgroundColor: link.color }} key={link.href} href={link.href}>
          <FontAwesomeIcon className="h-6 w-6" icon={link.faClass}></FontAwesomeIcon>
        </Link>
      ))}
    </>
  );
}
