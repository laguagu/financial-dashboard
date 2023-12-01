"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({totalPages}: {totalPages:number} ) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  
  console.log(createPageURL(currentPage));
  

  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="inline-flex">
          <li>
            <Link
            className="h-10 px-5 py-2 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-blue-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100"
            href={"/"}
            >
              Prev
            </Link>
          </li>
          <li>
            <Link href={"/"} className="h-10 px-5 py-2 text-blue-500 transition-colors duration-150 bg-white border border-r-0 border-blue-600 focus:shadow-outline">
              1
            </Link>
          </li>
          <li>
            <Link href={"/"} className="h-10 px-5 py-2 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-blue-600 focus:shadow-outline hover:bg-indigo-100">
              2
            </Link>
          </li>
          <li>
            <Link href={"/"} className="h-10 px-5 py-2 text-white transition-colors duration-150 bg-blue-500 border border-r-0 border-blue-600 focus:shadow-outline">
              3
            </Link>
          </li>
          <li>
            <Link href={"/"} className="h-10 px-5 py-2 text-indigo-600 transition-colors duration-150 bg-white border border-blue-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
