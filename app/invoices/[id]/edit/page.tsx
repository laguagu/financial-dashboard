import { fetchCustomersDB, fetchInvoiceById } from "@/app/lib/data";
import Form from "@/app/ui/invoices/edit-form";
import React from "react";
import { notFound } from "next/navigation";


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const customers = await fetchCustomersDB();
  const invoice = await fetchInvoiceById(id)

  if (!invoice) {
    notFound();
  }
  
  // const [invoice,customers] = await Promise.all([
  //   fetchInvoiceById(id),
  //   fetchCustomersDB
  // ])
  
  
  return (
    <main className="p-3 mt-6 m-5">
      <h1 className="text-lg mb-5">Invoices</h1>
      <Form customers={customers} invoice={invoice}/>
    </main>
  );
}
