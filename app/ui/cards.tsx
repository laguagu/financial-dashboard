import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

const iconMap = {
  collected: BanknotesIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
  customers: UserGroupIcon,
};

export default function CardWrapper() {
  return (
    <div className="grid grid-cols-4 gap-11">
      <Card title="Collected" value="200" type="collected" />
      <Card title="Pending" value="200" type="pending" />
      <Card title="Total Invoices" value="200" type="invoices" />
      <Card title="Total Customers" value="200" type="customers" />
    </div>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="bg-gray-50 p-4 mt-3 rounded-xl shadow-md ">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="text-sm font-medium ml-2">{title}</h3>
      </div>
      <p
        className={`${lusitana.className} bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
