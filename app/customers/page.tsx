import { Metadata } from "next";
import CustomerCard from "../ui/customers/customer-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../ui/toggle-theme";
export const metadata: Metadata = {
  title: "Customers",
};

export default function CustomersPage() {
  return (
    <div className="">
      <div className="flex flex-row justify-end mt-2 mr-2">
        <Avatar className="mr-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ModeToggle/>
      </div>
      <div>
        <CustomerCard />
      </div>
    </div>
  );
}
