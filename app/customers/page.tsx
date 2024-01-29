import { Metadata } from "next";
import CustomerCard from "../ui/customers/customer-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../ui/toggle-theme";
import CustomerSearch from "../ui/customers/searchbar";
import AllCustomersCard from "../ui/customers/all-customers";

export const metadata: Metadata = {
  title: "Customers",
};

export default function CustomersPage() {
  return (
    <div>
      <div className="flex flex-row justify-end mt-2 mr-2 mb-4">
        <Avatar className="mr-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <ModeToggle />
      </div>
      <div className="grid grid-cols-2 mx-9">
        <div className="col-span-1 flex items-center justify-center">
          <p>Hei Matti! 👋</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <CustomerSearch />
        </div>
      </div>
      <div>
        <CustomerCard />
      </div>
      <div>
        <AllCustomersCard />
      </div>
    </div>
  );
}
