import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { PowerIcon } from "@heroicons/react/24/outline";
import { CreditCardIcon } from "@heroicons/react/20/solid";

export default function Sidenav() {
  return (
    <nav className="flex flex-col px-3 py-4 text-zinc-400 w-44 bg-slate-50 min-h-screen">
      <Link href="/" className="mb-2 flex rounded-md  p-4 md:h-28 bg-zinc-100 items-center justify-center ">
        <CreditCardIcon className="h-20 w-20 mb-3 text-blue-400 mt-10"  />
      </Link>
      <NavLinks />
      <div className="mt-auto whitespace-nowrap">
        <form>
          <button className="flex items-center gap-2 p-3 hover:bg-sky-100 hover:text-blue-600 rounded-lg">
            <PowerIcon className="w-6" />
            <div className="hidden md:block text-center hover:font-semibold transition-colors duration-300">Sign Out</div>
          </button>
        </form>
      </div>
    </nav>
  );
}
