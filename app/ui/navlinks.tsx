"use client";
import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Invoices", href: "/invoices", icon: DocumentDuplicateIcon  },
  { name: "Customers", href: "/2", icon: UserGroupIcon  },
];

export default function NavLinks() {
  const currenPath = usePathname();
  
  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={classNames(
              "bg-gray-100 p-3 flex hover:text-blue-600 hover:font-semibold rounded-md space-x-3 mb-1 transition-colors duration-300 text-gray-900",
              {
                "bg-sky-100 text-blue-600": link.href === currenPath,
                "text-zinc-400": link.href !== currenPath,
                "transition-colors": true,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
