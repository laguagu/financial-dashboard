import { DatePickerDemo } from "./datepicker";

function AllCustomersCard() {
  return (
    <div className="flex m-10 ">
      <div className="flex flex-col flex-grow bg-gray-100 w-full items-center mx-auto p-6 border rounded-2xl">
        <div className="flex justify-between w-full items-center">
          <div>
            <p className="text-2xl font-bold">All Customers</p>
            <p className="text-green-500 text-sm">Active Members</p>
          </div>
          <div>
            <DatePickerDemo />
          </div>
        </div>
        <table className="w-full mt-8">
          <thead className="text-stone-400 text-left">
            <tr className="w-full px-5 py-3">
              <th className="flex-1 font-medium">Customer Name</th>
              <th className="flex-1 font-medium">Company</th>
              <th className="flex-1 font-medium">Phone Number</th>
              <th className="flex-1 font-medium">Email</th>
              <th className="flex-1 font-medium">Country</th>
              <th className="flex-1 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full px-5 py-3">
              <td className="flex-1 font-medium">Matti Nykänen</td>
              <td className="flex-1 font-medium">Microsoft</td>
              <td className="flex-1 font-medium">04012304534</td>
              <td className="flex-1 font-medium">Matti@gmail.com</td>
              <td className="flex-1 font-medium">United States</td>
              <td className="flex-1 font-medium">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllCustomersCard;
