import Sidenav from "./ui/sidenav";
import { fetchCustomersFromDatabase, saveCustomerToDatabase } from "./lib/data";
import { Customers } from "@prisma/client";
import AllCustomers from "./ui/customers";
import LatestInvoices from "./ui/latest-invoices";
import CardWrapper from "./ui/cards";
import MonthlyRevenueChart from "./ui/revenue";
import { revenue } from "./lib/revenue-data";

async function fetchCustomersApi(): Promise<Customers[]> {
  const response = await fetch(
    "https://6549f6b1e182221f8d523a44.mockapi.io/api/Users"
    // { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}

export default async function Home() {
  const apiCustomers: Customers[] = await fetchCustomersApi();
  // await saveCustomerToDatabase(apiCustomers);
  // const customers = await fetchCustomersFromDatabase();

  return (
    <div className="flex h-screen">
      <Sidenav />
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
