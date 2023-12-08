import { fetchCustomersDB } from '@/app/lib/data'
import Form from '@/app/ui/invoices/form'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Create new invoice',
};

export default async function Page() {
const customers = await fetchCustomersDB()

  return (
    <main className='p-3 mt-6 m-5'>
      <h1 className='text-lg mb-5'>Invoices</h1>
        <Form customers={customers}/>
    </main>
  )
}
