"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="inline-flex">
          <li>
            <button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-blue-600 rounded-l-lg focus:shadow-outline hover:bg-indigo-100">
              Prev
            </button>
          </li>
          <li>
            <button className="h-10 px-5 text-blue-500 transition-colors duration-150 bg-white border border-r-0 border-blue-600 focus:shadow-outline">
              1
            </button>
          </li>
          <li>
            <button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-blue-600 focus:shadow-outline hover:bg-indigo-100">
              2
            </button>
          </li>
          <li>
            <button className="h-10 px-5 text-white transition-colors duration-150 bg-blue-500 border border-r-0 border-blue-600 focus:shadow-outline">
              3
            </button>
          </li>
          <li>
            <button className="h-10 px-5 text-indigo-600 transition-colors duration-150 bg-white border border-blue-600 rounded-r-lg focus:shadow-outline hover:bg-indigo-100">
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
