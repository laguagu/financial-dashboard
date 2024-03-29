import Link from "next/link";
import React from "react";
import NavLinks from "./navlinks";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";
import logo from "@/public/fundfleet.png"
import Image from "next/image";

export default function Sidenav() {
  return (
    <nav className="flex flex-row md:flex-col px-3 md:px-2 py-4 text-zinc-400 md:w-44 w-40 bg-slate-50 min-h-screen">
      <Link
        href="/"
        className="mb-2 flex rounded-md p-4 md:h-28 bg-zinc-100 items-center justify-center "
      >
        <Image
         alt="asd" 
         src={logo} 
         priority
         />
      </Link>
      <NavLinks />
      <div className="mt-auto whitespace-nowrap">
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="flex items-center gap-2 p-3 hover:bg-sky-100 hover:text-blue-600 rounded-lg hover:font-semibold transition-colors duration-300">
            <PowerIcon className="w-6" />
            <div className="md:block text-center">Sign Out</div>
          </button>
        </form>
      </div>
    </nav>
  );
}
