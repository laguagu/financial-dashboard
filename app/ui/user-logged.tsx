"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function LoggedIn() {
  const { data: session, status } = useSession();
  console.log(session);

  if (session) {
    return (
      <div className="flex justify-center items-center pt-1">
        <p className="font-medium pr-3">User logged in</p>
        <Image 
        className="inline object-cover w-8 h-8 rounded-full" 
        src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        width={20}
        height={20}
        alt="profile pic"
        />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center mt-4">
        <p className="px-3 ">User not logged in</p>
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
