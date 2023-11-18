import Link from "next/link";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

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
  return(
    <button className="border p-2 rounded-lg hover:bg-gray-100">
      <TrashIcon className="w-4" />
      <span className="sr-only">Delete</span>
    </button>
    ) 
}
