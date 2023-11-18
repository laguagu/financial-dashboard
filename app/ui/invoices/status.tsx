import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span className={clsx(
        "inline-flex items-center px-2 py-1 rounded-full text-sm",
        {
            "bg-gray-100 text-gray-500":status === "pending",
            "bg-green-500 text-white":status === "paid"
        }
    )}>
      {status === "pending" ? (
        <>
          Pending
          <ClockIcon className="w-4 text-gray-500 ml-1" />
        </>
      ) : null}
      {status === "paid" && (
        <>
          Paid
          <CheckIcon className="w-4 ml-1 text-white"/>
        </>
      )}
    </span>
  );
}
