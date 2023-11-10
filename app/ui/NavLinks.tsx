"use client";
import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";


const links = [
  { name: "Home", href: "/" },
  { name: "Invoices", href: "/1" },
  { name: "Customers", href: "/2" },
];

export default function NavLinks() {
  const currenPath = usePathname();
  console.log(currenPath);

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={classNames(
                "bg-gray-100 p-3 hover:text-blue-600 hover:font-semibold rounded-md space-x-2 mb-1 transition-colors duration-300",
                {
              "bg-sky-100 text-blue-500": link.href === currenPath,
              "text-zinc-400": link.href !== currenPath,
              "transition-colors": true,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
