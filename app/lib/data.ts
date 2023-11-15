import prisma from "@/prisma/db";
import { Customers } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { sql } from "@vercel/postgres";
import { LatestInvoice, LatestInvoiceRaw } from "./definitions";
import { formatCurrency } from "./utils";

export async function saveCustomerToDatabase(
  customers: Customers[]
): Promise<void> {
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
    const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.id, invoices.amount, "Customers".name, "Customers".image_url, "Customers".email
      FROM invoices
      JOIN "Customers" ON invoices.customer_id = "Customers".id
      ORDER BY invoices.date DESC
      LIMIT 5`;

    const latestInvoices = data.rows.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));

    return latestInvoices;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}
