import { DatePickerDemo } from "./datepicker";
import { fetchMembersDB } from "@/app/lib/data";
import { Members } from "@/app/lib/definitions";
import clsx from "clsx";
import PaginationBar from "./pagination-bar";

async function AllCustomersCard() {
  const members: Members[] = await fetchMembersDB();
  console.log(members);

  return (
    <div className="flex m-10">
      <div className="flex flex-col flex-grow bg-gray-100 w-full items-center mx-auto p-6 border rounded-2xl">
        <div className="flex justify-between w-full items-center">
          <div>
            <p className="text-2xl font-bold">All Customers</p>
            <p className="text-green-500 text-sm">Active Paid Members</p>
          </div>
          <div>
            <DatePickerDemo />
          </div>
        </div>
        <table className="w-full mt-10">
          <thead className="text-neutral-300 text-left border-b-2 mb-5 ">
            <tr>
              <th scope="col" className="flex-1 font-medium">
                Customer Name
              </th>
              <th scope="col" className="flex-1 font-medium">
                Company
              </th>
              <th scope="col" className="flex-1 font-medium">
                Phone Number
              </th>
              <th scope="col" className="flex-1 font-medium">
                Email
              </th>
              <th scope="col" className="flex-1 font-medium">
                Country
              </th>
              <th scope="col" className="flex-1 font-medium text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="border-b border-b-stone-200 ">
                <td className="flex-1 py-3 font-semibold ">{member.name}</td>
                <td className="flex-1 py-3 font-semibold">{member.company}</td>
                <td className="flex-1 py-3 font-semibold">
                  {member.phonenumber}
                </td>
                <td className="flex-1 py-3 font-semibold">{member.email}</td>
                <td className="flex-1 py-3 font-semibold">{member.country}</td>
                <td
                  className={clsx("flex-1 py-3 font-semibold ", {
                    "text-green-400 text-center p-4":
                      member.status === "Active",
                    "text-red-400 text-center p-4":
                      member.status === "Inactive",
                  })}
                >
                  {member.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4 w-full  pt-3 items-center">
          <p className="text-gray-500 text-sm">
            Showind data 1 to 8 of 256k entries
          </p>
          <div className="flex">
            <PaginationBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCustomersCard;
