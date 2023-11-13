import prisma from "@/prisma/db";
import { Customers } from "@prisma/client";
import { uuid } from 'uuidv4';

export async function saveCustomerToDatabase(customers: Customers[]): Promise<void> {
  const promises = customers.map((customer) => {
    return prisma.customers.upsert({
      where: { email: customer.email },
      update: {},
      create: {
        id: uuid(),
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
