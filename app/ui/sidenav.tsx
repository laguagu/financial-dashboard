import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { BeakerIcon } from '@heroicons/react/24/solid'
import { BanknotesIcon } from "@heroicons/react/20/solid";

export default function Sidenav() {
  return (
    <nav className="flex flex-col px-3 py-4 text-zinc-400 w-24">
      <div className="">
        <Link href="/"><BanknotesIcon className="h-14 w-14 mb-3 text-green-400"/></Link>
      </div>
      <NavLinks />
    </nav>
  );
}
