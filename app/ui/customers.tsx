import { Customers } from "@prisma/client";


type AllCustomersProps = {
  customers: Customers[];
};

export default function AllCustomers({ customers }: AllCustomersProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <ul>
        {customers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}