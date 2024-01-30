import {
  UserIcon,
  UserPlusIcon,
  ComputerDesktopIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

function CustomerCard() {
  return (
    <div className="bg-gray-100 flex items-center justify-around rounded-2xl m-10 align-middle">
      <div className="flex items-center m-5 p-3">
        <div className="flex items-center justify-center bg-green-100 w-16 h-16 rounded-full mr-2">
          <UserIcon className="w-12 h-12 text-green-400" />
        </div>
        <div className="space-y-1 ml-4">
          <p className="text-stone-400">Total Customers</p>
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
          <UserPlusIcon className="w-12 h-12 text-green-400" />
        </div>
        <div className="space-y-1 ml-4">
          <p className="text-stone-400">Paid Members</p>
          <p className={`${lusitana.className} text-4xl`}>1,193</p>
          <div className="flex items-center justify-center">
            <ArrowDownIcon className="w-4 h-4 text-red-500" />
            <span className="text-red-500">+2%</span>
            <p className="ml-1 text-sm font-medium">This month</p>
          </div>
        </div>
      </div>
      <div className="border-l-2 border-white h-24"></div>{" "}
      {/* Lisää pystyviiva */}
      <div className="flex items-center m-5 p-3">
        <div className="flex items-center justify-center bg-green-100 w-16 h-16 rounded-full mr-2">
          <ComputerDesktopIcon className="w-12 h-12 text-green-400" />
        </div>
        <div className="space-y-1 ml-4">
          <p className="text-stone-400">Active Now</p>
          <p className={`${lusitana.className} text-4xl`}>189</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
