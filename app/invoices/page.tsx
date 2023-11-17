import Table from "../ui/table";

export default async function Invoices() {
  const query = '';
  const currentPage =  1;
  return (
    <div>
      <Table query={query} currentPage={currentPage} />
    </div>
  );
}
