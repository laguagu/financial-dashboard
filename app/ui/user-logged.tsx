"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function LoggedIn() {
  const { data: session, status } = useSession();
  console.log(session);

  if (session) {
    return (
      <div className="flex">
        <p className="font-medium">User logged in</p>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center">
        <p className="px-3">User not logged in</p>
        <Link
          href={"/login"}
          className="px-3 flex items-center hover:bg-blue-500 transition-colors border rounded-lg bg-blue-600 text-white ml-2 p-2"
        >
          Sig in
        </Link>
      </div>
    );
  }
}
