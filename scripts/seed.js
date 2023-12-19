const { db } = require("@vercel/postgres");
const prisma = require("../prisma/db.js").default;;

async function fetchCustomersFromDatabase() {
  const customers = await prisma.customers.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return customers;
}

async function createInvoices(customers) {
  return customers.map((customer, index) => {
    return {
      customer_id: customer.id,
      amount: Math.round(1000 * (Math.random() + index)),
      status: index % 2 === 0 ? "pending" : "paid",
      date: index % 2 === 0 ? '2022-12-06': '2023-09-10',
    };
  });
}

// If Syntax error: operator does not exist: uuid = text. Then run this on db query:
// ALTER TABLE invoices
// ALTER COLUMN customer_id TYPE UUID USING customer_id::UUID;

async function seedInvoices(client, invoices) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL, 
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;
    console.log(`Created "invoices" table`);
    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
          INSERT INTO invoices (customer_id, amount, status, date)
          VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);
    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error("Error seeding invoices:", error);
    throw error;
  }
}

async function seedUsers(client) {
  try {
    // Create the "users" table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `);
    console.log(`Created "users" table`);
  } catch (error) {
    console.error("Error creating users table:", error);
    throw error;
  }
}
    // Insert data into the "users" table
    // const insertedUsers = await Promise.all([
    //   client.query(`
    //     INSERT INTO users (email, password)
    //     VALUES ('

async function main() {
  const client = await db.connect();
  // const customers = await fetchCustomersFromDatabase();
  // const invoices = await createInvoices(customers)

  // await seedInvoices(client,invoices);
    await seedUsers(client);
  //   await seedCustomers(client);
  //   await seedRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
