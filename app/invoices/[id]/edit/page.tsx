import { fetchCustomersDB } from "@/app/lib/data";
import Form from "@/app/ui/invoices/form";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const customers = await fetchCustomersDB();
  const id = params.id
  console.log("Site id", id);
  
  return (
    <main className="p-3 mt-6 m-5">
      <h1 className="text-lg mb-5">Invoices</h1>
      <Form customers={customers} />
    </main>
  );
}
