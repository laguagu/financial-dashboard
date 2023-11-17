import Image from "next/image";
import { fetchFilteredInvoices } from "../../lib/data";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";
export default async function InvoiceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="bg-gray-100 p-3 rounded-lg mt-6 flow-root m-5">
      <table className="min-w-full text-gray-900">
        <thead className="text-sm text-left">
          <tr>
            <th scope="col" className="px-5 py-3 font-medium">
              Customers
            </th>
            <th scope="col" className="px-3 py-3 font-medium">
              Email
            </th>
            <th scope="col" className="px-3 py-3 font-medium">
              Amount
            </th>
            <th scope="col" className="px-3 py-3 font-medium">
              Date
            </th>
            <th scope="col" className="px-3 py-3 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="w-full border-b">
              <td className="px-5 py-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={"/customers/happyCustomer.png"}
                    className="rounded-full"
                    width={28}
                    height={28}
                    alt={`${invoice.name}'s profile picture`}
                  />
                  <p>{invoice.name}</p>
                </div>
              </td>
              <td className="px-3 py-3">{invoice.email}</td>
              <td className="px-3 py-3">{formatCurrency(invoice.amount)}</td>
              <td className="px-3 py-3">
                {formatDateToLocal(invoice.date)}
              </td>
              <td className="px-3 py-3">{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
