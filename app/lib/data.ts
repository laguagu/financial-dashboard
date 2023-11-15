import prisma from "@/prisma/db";
import { Customers } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';
import { sql } from "@vercel/postgres";
import { LatestInvoice } from "./definitions";

export async function saveCustomerToDatabase(customers: Customers[]): Promise<void> {
  const promises = customers.map((customer) => {
    return prisma.customers.upsert({
      where: { email: customer.email },
      update: {},
      create: {
        id: uuidv4(),
        name: customer.name,
        email: customer.email,
        image_url: customer.image_url,
      },
    });
  });
  await Promise.all(promises);
  console.log("customers saved to database");
}

export async function fetchCustomersFromDatabase(): Promise<Customers[]> {
  const customers = await prisma.customers.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return customers;
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql<LatestInvoice>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}
