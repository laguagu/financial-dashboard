import { Customers } from "@prisma/client";


type AllCustomersProps = {
  customers: Customers[];
};

// Käytä tätä tyyppiä komponentin propsien määrittelyssä
export default function AllCustomers({ customers }: AllCustomersProps) {
  return (
    <div>
      <ul>
        {customers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}