import Sidenav from "./ui/sidenav";
import { fetchCustomersFromDatabase, saveCustomerToDatabase } from "./lib/data";
import { Customers } from "@prisma/client";

async function fetchCustomersApi(): Promise<Customers[]> {
  const response = await fetch("https://6549f6b1e182221f8d523a44.mockapi.io/api/Users", {cache: "no-store"});
  const data = await response.json();
  return data;
}

export default async function Home() {
  const apiUsers: Customers[] = await fetchCustomersApi()
  await saveCustomerToDatabase(apiUsers)

  const users = await fetchCustomersFromDatabase();
  return (
    <div className="flex">
      <Sidenav />
      <div className="flex-grow flex justify-center items-center">
        <ul>
          {users.map((user: Customers) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
