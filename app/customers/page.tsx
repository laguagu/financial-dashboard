import { Metadata } from "next";
import { UserIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Customers",
};

export default function CustomersPage() {
  return (
    <div className="bg-gray-500 flex items-center justify-around w-full rounded-2xl m-4">
      <div className="flex items-center m-5">
        <div className="bg-slate-400 w-10 h-10 rounded-2xl">
          <UserIcon className="w-10 h-10 text-green-400"/>
        </div>
        <p>Total Customers</p>
      </div>
      <div className="border-l-2 border-white h-8"></div> {/* Lisää pystyviiva */}
      <div>
        <p>Total Customers</p>
      </div>
      <div className="border-l-2 border-white h-8"></div> {/* Lisää pystyviiva */}
      <div>
        <p>Total Customers</p>
      </div>
    </div>
  );
}

