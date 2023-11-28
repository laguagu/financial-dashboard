import Link from "next/link";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deleteInvoice } from "@/app/lib/actions";

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/invoices/${id}/edit`}
      className="border p-2 rounded-lg hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceId = deleteInvoice.bind(null, id)
  
  return (
    <form action={deleteInvoiceId}>
      <button className="border p-2 rounded-lg hover:bg-gray-100">
        <TrashIcon className="w-4" />
        <span className="sr-only">Delete</span>
      </button>
    </form>
  );
}

export function CreateInvoice() {
  return (
    <Link
      href="invoices/create"
      className="px-4 flex items-center hover:bg-blue-500 transition-colors border rounded-lg bg-blue-600 text-white ml-2 p-2"
    >
      Create Invoice
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}
