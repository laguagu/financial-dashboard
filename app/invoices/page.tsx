import Table from "../ui/invoices/table";
import { useSearchParams } from 'next/navigation';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  return (
    <div>
      <Table query={query} currentPage={currentPage} />
    </div>
  );
}
