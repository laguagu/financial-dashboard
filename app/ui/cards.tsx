import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function Card() {
  return (
    <div className="bg-gray-50 p-4 mt-3 rounded-xl">
      <div className="flex p-4">
        <BanknotesIcon className="h-5 w-5 text-gray-700" />
        <h3 className="text-sm font-medium ml-2">Collected</h3>
      </div>
      <p
        className={`${lusitana.className}
        truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
      200$
      </p>
    </div>
  );
}
