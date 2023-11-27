import React from "react";
import { CustomerField } from "@/app/lib/definitions";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useFormState } from "react-dom";
import { createInvoice } from "@/app/lib/actions";

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = { message: null, errors: {} };  
  // const [state, dispatch] = useFormState(createInvoice, initialState)
  return (
    <form action={createInvoice}>
      {/* Choose Customers */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <label htmlFor="customers" className="mb-2 block font-medium">
          Choose customers
        </label>
        <div className="relative">
          <select
            className="block w-full border-gray-200 rounded-md border py-2 outline-2 text-sm pl-10"
            id="cutomer"
            name="customerId"
          >
            <option>Select Customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
          <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
        {/* Choose an amounth */}
        <div className="mt-5">
          <label htmlFor="amount" className="mb-2 block font-medium">
            Choose an amount
          </label>
          <div className="relative">
            <input
              id="amount"
              name="amount"
              placeholder="Enter USD amount"
              type="number"
              className="block w-full border-gray-200 rounded-md border py-2 outline-2 text-sm pl-10"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        {/* Set the invoice status */}
        <fieldset className="mt-5">
          <legend className="mb-2 block font-medium">
            Set the invoice status
          </legend>
          <div className="bg-white px-[14px] py-3 border rounded-">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="border-gray-200 rounded-md border py-2 outline-2 text-sm pl-1"
                />
                <label
                  htmlFor="pending"
                  className="flex items-center gap-1.5 px-3 font-medium bg-gray-100 text-gray-600 border rounded-full ml-2 border-gray-200"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="border-gray-200 rounded-md border py-2 outline-2 text-sm pl-1 "
                />
                <label
                  className="flex items-center gap-1.5 px-3 font-medium bg-green-500 text-white border rounded-full ml-2"
                  htmlFor="paid"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="flex mt-6 justify-end gap-4">
        <Link
          href={"/invoices"}
          className="px-4 flex items-center transition-colors border rounded-lg bg-gray-100 text-gray-600 ml-2 p-2 hover:bg-gray-200"
        >
          Cancel
        </Link>
        <button
          className="px-4 flex items-center hover:bg-blue-500 transition-colors border rounded-lg bg-blue-600 text-white ml-2 p-2"
          type="submit"
        >
          Create Invoice
        </button>
      </div>
    </form>
  );
}
