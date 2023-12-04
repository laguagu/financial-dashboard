"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  
  console.log(createPageURL(currentPage));

  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="inline-flex">
          <li>
            <PaginationButton
              href={createPageURL(currentPage - 1)}
              name={"Prev"}
              isDisabled={currentPage <= 1}
            />
          </li>
          <li>
            <Link
              href={"/"}
              className="h-10 px-5 py-2 text-blue-500 transition-colors duration-150 bg-white border border-r-0 border-blue-600 focus:shadow-outline"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="h-10 px-5 py-2 text-blue-500 transition-colors duration-150 bg-white border border-r-0 border-blue-600 focus:shadow-outline hover:bg-indigo-100"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="h-10 px-5 py-2 text-white text-white transition-colors duration-150 bg-blue-500 border border-r-0 border-blue-600 focus:shadow-outline"
            >
              3
            </Link>
          </li>
          <li>
          <PaginationButton
              href={createPageURL(currentPage + 1)}
              name={"Next"}
              isDisabled={currentPage >= totalPages}
            />
          </li>
        </ul>
      </nav>
    </>
  );

  function PaginationButton({ href, name, isDisabled }: { href: string; name: string, isDisabled: boolean }) {
    const className = clsx(
      "h-10 px-5 py-2 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-blue-600 focus:shadow-outline hover:bg-indigo-100",
      {
        "rounded-l-lg": name==="Prev",
        "rounded-r-lg": name==="Next",
        'pointer-events-none text-gray-300': isDisabled,
      }
      );
    return isDisabled?(
     <Link href={createPageURL(currentPage)} className={className}>{name}</Link>):(
      <>
        <Link
          className={className}
          href={href}
        >
          {name}
        </Link>
      </>
    )
  }
}
