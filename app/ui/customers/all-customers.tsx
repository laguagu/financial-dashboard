import { DatePickerDemo } from "./datepicker";
import { fetchMembersDB } from "@/app/lib/data";
import { Members } from "@/app/lib/definitions";

async function AllCustomersCard() {
  const members: Members[] = await fetchMembersDB();
  console.log(members);

  return (
    <div className="flex m-10 ">
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
        <table className="w-full mt-8">
          <thead className="text-stone-400 text-left">
            <tr className="w-full px-5 py-3">
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
              <th scope="col" className="flex-1 font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="w-full px-5 py-3">
                <td className="flex-1 font-medium py-3">{member.name}</td>
                <td className="flex-1 font-medium py-3">{member.company}</td>
                <td className="flex-1 font-medium py-3">{member.phonenumber}</td>
                <td className="flex-1 font-medium py-3">{member.email}</td>
                <td className="flex-1 font-medium py-3">{member.country}</td>
                <td className="flex-1 font-medium py-3">{member.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllCustomersCard;
