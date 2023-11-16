import Sidenav from "./ui/sidenav";
import { fetchCustomersFromDatabase, saveCustomerToDatabase } from "./lib/data";
import { Customers } from "@prisma/client";
import AllCustomers from "./ui/customers";
import LatestInvoices from "./ui/latest-invoices";
import CardWrapper from "./ui/cards";

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
      <div className="flex-grow flex flex-col ">
        {/* yläosa, jossa on kolme pientä laatikkoa */}
        <div className="grid grid-cols-2 gap-6 px-4 ">
          <LatestInvoices />
          {/* <LatestInvoices />
          <LatestInvoices /> */}
          {/* <AllCustomers customers={customers} />
          <AllCustomers customers={customers} />
        <AllCustomers customers={customers} /> */}
        </div>
        {/* alaosa, jossa on kaksi isompaa laatikkoa */}
        <div className="m-7 justify-around items-start">
          <CardWrapper />
        </div>
      </div>
    </div>
  );
}
