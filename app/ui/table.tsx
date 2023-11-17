import { fetchFilteredInvoices } from "../lib/data";


export default async function InvoiceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
    const invoices = await fetchFilteredInvoices(query, currentPage);
  return (
    <div className="bg-red-400 p-2">
      <table className="text-gray-900">
        <thead className="text-sm">
          <tr>
            <th scope="col" className="px-3 py-5 font-medium">
              Customers
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Email
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Amount
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Date
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
