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

  console.log(createPageURL(currentPage - 1));

  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="inline-flex">
          <li>
            <PaginationButton
              href={createPageURL(currentPage - 1)}
              name={"Prev"}
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
              className="h-10 px-5 py-2 text-white transition-colors duration-150 bg-blue-500 border border-r-0 border-blue-600 focus:shadow-outline"
            >
              3
            </Link>
          </li>
          <li>
          <PaginationButton
              href={createPageURL(currentPage + 1)}
              name={"Next"}
            />
          </li>
        </ul>
      </nav>
    </>
  );

  function PaginationButton({ href, name }: { href: string; name: string }) {
    const className = clsx(
      "h-10 px-5 py-2 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-blue-600 focus:shadow-outline hover:bg-indigo-100",
      {
        "rounded-l-lg": name==="Prev",
        "rounded-r-lg": name==="Next"
      }
      );
    return (
      <>
        <Link
          className={className}
          href={href}
        >
          {name}
        </Link>
      </>
    );
  }
}
