import { Metadata } from "next";
import CustomerCard from "../ui/customers/customer-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const metadata: Metadata = {
  title: "Customers",
};

export default function CustomersPage() {
  return (
    <div>
      <div className="flex flex-col items-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <CustomerCard />
      </div>
    </div>
  );
}
