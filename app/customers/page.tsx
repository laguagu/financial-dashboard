import { Metadata } from "next";
import CustomerCard from "../ui/customers/customer-card";

export const metadata: Metadata = {
  title: "Customers",
};

export default function CustomersPage() {
  return (
    <div>
      <CustomerCard />
    </div>
  );
}
