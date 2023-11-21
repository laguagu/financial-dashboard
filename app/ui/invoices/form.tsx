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
        <div className="relative">
          <select className="block w-full border-gray-200 rounded-md border py-2 outline-2 text-sm pl-1 pl-10">
            <option>Select Customer</option>
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
                  name="invoiceStatus"
                  type="radio"
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
                  name="invoiceStatus"
                  type="radio"
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
    </form>
  );
}
