import { fetchCustomersDB } from '@/app/lib/data'
import Form from '@/app/ui/invoices/form'
import React from 'react'



export default async function Page() {
const customers = await fetchCustomersDB()

  return (
    <main>
        <Form customers={customers}/>
    </main>
  )
}
