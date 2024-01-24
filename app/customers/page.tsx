import { Metadata } from "next";
import { UserIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
export const metadata: Metadata = {
  title: "Customers",
};

export default function CustomersPage() {
  return (
    <div className="bg-gray-100 flex items-center justify-around rounded-2xl m-10">
      <div className="flex items-center m-5 p-3">
        <div className="flex items-center justify-center bg-green-100 w-16 h-16 rounded-full mr-2">
          <UserIcon className="w-12 h-12 text-green-400" />
        </div>
        <div className="space-y-1 ml-4">
          <p className="text-gray-300">Total Customers</p>
          <p className={`${lusitana.className} text-4xl`}>5,423</p>
          <div className="flex items-center justify-center">
            <ArrowUpIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500">+16%</span>
            <p className="ml-1 text-sm font-medium">This month</p>
          </div>
        </div>
      </div>
      <div className="border-l-2 border-white h-24"></div>{" "}
      {/* Lisää pystyviiva */}
      <div className="flex items-center m-5 p-3">
        <div className="flex items-center justify-center bg-green-100 w-16 h-16 rounded-full mr-2">
          <UserIcon className="w-12 h-12 text-green-400" />
        </div>
        <div className="space-y-1 ml-4">
          <p className="text-gray-300">Total Customers</p>
          <p className={`${lusitana.className} text-4xl`}>5,423</p>
          <div className="flex items-center justify-center">
            <ArrowUpIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500">+16%</span>
            <p className="ml-1 text-sm font-medium">This month</p>
          </div>
        </div>
      </div>
      <div className="border-l-2 border-white h-24"></div>{" "}
      {/* Lisää pystyviiva */}
      <div className="flex items-center m-5 p-3">
        <div className="flex items-center justify-center bg-green-100 w-16 h-16 rounded-full mr-2">
          <UserIcon className="w-12 h-12 text-green-400" />
        </div>
        <div className="space-y-1 ml-4">
          <p className="text-gray-300">Total Customers</p>
          <p className={`${lusitana.className} text-4xl`}>5,423</p>
          <div className="flex items-center justify-center">
            <ArrowUpIcon className="w-4 h-4 text-green-500" />
            <span className="text-green-500">+16%</span>
            <p className="ml-1 text-sm font-medium">This month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
