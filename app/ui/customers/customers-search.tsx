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
            <DatePickerDemo/>
          </div>
        </div>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
      </div>
    </div>
  );
}

export default AllCustomersCard;
