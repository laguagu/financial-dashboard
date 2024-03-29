import LatestInvoices from "../ui/latest-invoices";
import CardWrapper from "../ui/cards";
import MonthlyRevenueChart from "../ui/revenue";
import { revenue } from "../lib/revenue-data";
import { Metadata } from "next";
import LoggedIn from "../ui/user-logged";
import { Suspense } from "react";
import { CardSkeleton } from "../ui/skeletons";

export const metadata: Metadata = {
  title: 'Home screen invoices',
};

export default async function Home() {
  // const apiCustomers: Customers[] = await fetchCustomersApi();
  // await saveCustomerToDatabase(apiCustomers);
  // const customers = await fetchCustomersFromDatabase();

  return (
    <div className="flex h-screen">
      <div className="flex-grow flex flex-col">
        <div className="hidden md:flex justify-end pr-4 ">
          <LoggedIn/>
        </div>
        <div className="grid md:grid-cols-2 gap-6 px-4 m-5 grid-cols-1">
          <LatestInvoices />
          <div className="h-full w-full pt-10 flex-none">
            <MonthlyRevenueChart data={revenue} />
          </div>
        </div>
        <div className="justify-around items-start px-4 m-5">
          <Suspense fallback={<CardSkeleton/>} >
            <CardWrapper />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
