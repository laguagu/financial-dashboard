import React from "react";
import { fetchLatestInvoices } from "../lib/data";
import Image from "next/image";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default async function LatestInvoices() {
  const invoices = await fetchLatestInvoices();

  return (
    <div>
      <h2 className="mb-4 text-xl">Latest Invoices</h2>
      <div className="border bg-gray-100 p-3 shadow-sm rounded-xl ">
        {invoices.map((invoice) => {
          return (
            <div
              key={invoice.id}
              className="p-2 flex flex-row items-center justify-between font-normal pt-3 border bg-white rounded-sm  hover:text-blue-600 duration-100 "
            >
              <p className="truncate">{invoice.amount}</p>

              <div className="flex items-center text-right truncate">
                <div className="items-end pr-2">
                  <p className="items-end font-semibold ">{invoice.name}</p>
                  <p className="font-light text-sm font-mono">
                {`${invoice.email.replace(/\s+/g, '')}@gmail.com`}
                  </p>
                </div>
                <Image
                  src={"/customers/happyCustomer.png"}
                  alt={`${invoice.email} profile picture`}
                  className="rounded-full"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          );
        })}
        <div className="flex items-center pb-2 pt-6 justify-end">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
