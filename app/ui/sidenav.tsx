import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

export default function Sidenav() {
  return (
    <nav className="flex flex-col px-3 py-4 text-zinc-400 w-24">
      <div className="">
        <Link href="/">Logo</Link>
      </div>
      <NavLinks />
    </nav>
  );
}
