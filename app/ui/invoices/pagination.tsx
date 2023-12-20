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
            <PaginatioNumber
              href={"/invoices?page=1"}
              page={1}
              currentPage={currentPage}
            />
          </li>
          <li>
            <PaginatioNumber
              href={"/invoices?page=2"}
              page={2}
              currentPage={currentPage}
            />
          </li>
          <li>
            <PaginatioNumber href={"/invoices?page=3"} page={3} currentPage={currentPage} />
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

  function PaginationButton({
    href,
    name,
    isDisabled,
  }: {
    href: string;
    name: string;
    isDisabled: boolean;
  }) {
    const className = clsx(
      "h-10 px-5 py-2 text-indigo-600 transition-colors duration-150 bg-white border border-r-0 border-blue-600 focus:shadow-outline hover:bg-indigo-100",
      {
        "rounded-l-lg": name === "Prev",
        "rounded-r-lg": name === "Next",
        "pointer-events-none text-gray-300 text-indigo-100": isDisabled,
      }
    );
    return isDisabled ? (
      <Link href={createPageURL(currentPage)} className={className}>
        {name}
      </Link>
    ) : (
      <>
        <Link className={className} href={href}>
          {name}
        </Link>
      </>
    );
  }

  function PaginatioNumber({ href, page, currentPage }: { href: string; page: number; currentPage:number  }) {
    const isActive = currentPage === page;
    
    const className = clsx(
      "h-10 px-5 py-2 transition-colors duration-150 border border-r-0 border-blue-600 focus:shadow-outline text-blue-500",
      {
        "text-white bg-blue-500": isActive,
        "bg-white, hover:bg-indigo-100": !isActive
      }
    );
    return (
      <Link href={href} className={className}>
        {page}
      </Link>
    );
  }
}
