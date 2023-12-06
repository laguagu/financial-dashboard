import prisma from "@/prisma/db";
import { Customers } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { sql } from "@vercel/postgres";
import { InvoiceForm, LatestInvoiceRaw, InvoicesTable, CustomerField } from "./definitions";
import { formatCurrency } from "./utils";
import { unstable_noStore as noStore } from 'next/cache';

// applied SQL query Logics from https://nextjs.org/learn tutorial

export async function fetchCustomersApi(): Promise<Customers[]> {
  const response = await fetch(
    "https://6549f6b1e182221f8d523a44.mockapi.io/api/Users"
    // { cache: "no-store" }
  );
  const data = await response.json();
  return data;
}

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
  noStore();
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

export async function fetchCardData() {
  noStore();
  try {
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM "Customers"`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);

    const numberOfInvoices = Number(data[0].rows[0].count ?? "0");
    const numberOfCustomers = Number(data[1].rows[0].count ?? "0");
    const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? "0");
    const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? "0");

    return {
      numberOfCustomers,
      numberOfInvoices,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to card data.");
  }
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE; // Which row search start
  noStore();
  try {
    const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        "Customers".name,
        "Customers".email,
        "Customers".image_url
      FROM invoices
      JOIN "Customers" ON invoices.customer_id = "Customers".id
      WHERE
        "Customers".name ILIKE ${`%${query}%`} OR
        "Customers".email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}

export async function fetchCustomersDB() {
  noStore();
  try {
    const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM "Customers"
      ORDER BY name ASC
    `;

    const customers = data.rows;
    return customers;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all customers.');
  }
}

export async function fetchInvoiceById(id: string) {
  noStore();
  try {
    const data = await sql<InvoiceForm>`
    SELECT
    invoices.id,
    invoices.customer_id,
    invoices.amount,
    invoices.status
    FROM invoices
    WHERE invoices.id = ${id};
    `;
    const invoice = data.rows.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      amount: invoice.amount / 100,
    }));
    
    console.log("TESTING",invoice); // Invoice is an empty array []
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
  }
}

export async function fetchInvoicesPages(query: string) {
  noStore();
  try {
    const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN "Customers" ON invoices.customer_id = "Customers".id
    WHERE
      "Customers".name ILIKE ${`%${query}%`} OR
      "Customers".email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of invoices.');
  }
}