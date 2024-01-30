import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import React from "react";

function PaginationBar() {
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="hover:bg-sky-100 hover:text-blue-600 rounded-lg hover:font-semibold transition-colors duration-300"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="hover:bg-sky-100 hover:text-blue-600 rounded-lg hover:font-semibold transition-colors duration-300"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="hover:bg-sky-100 hover:text-blue-600 rounded-lg hover:font-semibold transition-colors duration-300"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="hover:bg-sky-100 hover:text-blue-600 rounded-lg hover:font-semibold transition-colors duration-300">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default PaginationBar;
