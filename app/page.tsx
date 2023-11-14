import Sidenav from "./ui/sidenav";
import { fetchCustomersFromDatabase, saveCustomerToDatabase } from "./lib/data";
import { Customers } from "@prisma/client";
import AllCustomers from "./ui/customers";

async function fetchCustomersApi(): Promise<Customers[]> {
  const response = await fetch(
    "https://6549f6b1e182221f8d523a44.mockapi.io/api/Users",
    { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}

export default async function Home() {
  const apiCustomers: Customers[] = await fetchCustomersApi();
  // await saveCustomerToDatabase(apiCustomers);

  const customers = await fetchCustomersFromDatabase();
  
  return (
    <div className="flex h-screen">
      <Sidenav />
      <div className="flex-grow flex flex-col">
        {/* yläosa, jossa on kolme pientä laatikkoa */}
        <div className="grid grid-cols-3 gap-2 px-4">
          <AllCustomers customers={customers} />
          <AllCustomers customers={customers} />
          <AllCustomers customers={customers} />
        </div>
        {/* alaosa, jossa on kaksi isompaa laatikkoa */}
        <div className="flex-grow flex justify-around items-start">
          <AllCustomers customers={customers} />
          <AllCustomers customers={customers} />
        </div>
      </div>
    </div>
  );
}
