import Table from "../ui/invoices/table";
import { lusitana } from "../ui/fonts";
import SearchBar from "../ui/invoices/search";
import { CreateInvoice } from "../ui/invoices/buttons";
import Pagination from "../ui/invoices/pagination";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="p-3 mt-6 m-5">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="p-3 m-5 flex">
        <SearchBar />
        <CreateInvoice />
      </div>
      <Table query={query} currentPage={currentPage} />
      <div className="flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
}
