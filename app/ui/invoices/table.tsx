import Image from "next/image";
import { fetchFilteredInvoices } from "../../lib/data";

export default async function InvoiceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  console.log(invoices);

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
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
                  <td className="py-2 pl-5">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
