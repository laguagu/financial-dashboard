import React from "react";
import { CustomerField } from "@/app/lib/definitions";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <form>
      {/* Choose Customers */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <label htmlFor="customers" className="mb-2 block font-medium">
          Choose customers
        </label>
        <div>
          <select className="block w-full border-gray-200 rounded-md border py-2 outline-2 text-sm pl-1">
            <option>Select Customer</option>
          </select>
        </div>
        {/* Choose an amounth */}
        <div className="mt-5">
          <label htmlFor="amount" className="mb-2 block font-medium">
            Choose an amount
          </label>
          <div className="relative">
            <input
              placeholder="Enter USD amount"
              type="number"
              className="block w-full border-gray-200 rounded-md border py-2 outline-2 text-sm pl-10"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        {/* Set the invoice status */}
        <div className="mt-5">
          <label htmlFor="customers" className="mb-2 block font-medium">
            Choose an amount
          </label>
          <div>
            <input
              placeholder="Enter USD amount"
              className="block w-full border-gray-200 rounded-md border py-2 outline-2 text-sm pl-1"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
