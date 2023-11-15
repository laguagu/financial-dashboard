import React from "react";
import { fetchLatestInvoices } from "../lib/data";
import Image from "next/image";

export default async function LatestInvoices() {
  const invoices = await fetchLatestInvoices();
  console.log(invoices);
  return (
    <div>
      <h2 className="mb-4 text-xl">Latest Invoices</h2>
      <ul className="border bg-white px-2">
        {invoices.map((invoice) => {
          return (
        <div key={invoice.id} className="flex flex-row items-center justify-between font-medium">
            {invoice.amount}
            <div>
                <Image
                src={"/customers/image_url 2.png"}
                alt={`${invoice.name} profile picture`}
                width={32}
                height={32}
                />
            </div>
        </div>
          )})}
      </ul>
    </div>
  );
}
