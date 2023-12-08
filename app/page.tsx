import Sidenav from "./ui/sidenav";
import { fetchCustomersFromDatabase, saveCustomerToDatabase } from "./lib/data";
import { Customers } from "@prisma/client";
import AllCustomers from "./ui/customers";
import LatestInvoices from "./ui/latest-invoices";
import CardWrapper from "./ui/cards";
import MonthlyRevenueChart from "./ui/revenue";
import { revenue } from "./lib/revenue-data";
import { fetchCustomersApi } from "./lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home screen invoices',
};

export default async function Home() {
  const apiCustomers: Customers[] = await fetchCustomersApi();
  // await saveCustomerToDatabase(apiCustomers);
  // const customers = await fetchCustomersFromDatabase();

  return (
    <div className="flex h-screen">
      <div className="flex-grow flex flex-col">
        <div className="grid grid-cols-2 gap-6 px-4 m-5">
          <LatestInvoices />
          <div className="h-full w-full pt-10 flex-none">
            <MonthlyRevenueChart data={revenue} />
          </div>
        </div>
        <div className="m-7 justify-around items-start">
          <CardWrapper />
        </div>
      </div>
    </div>
  );
}
