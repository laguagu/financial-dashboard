const { db } = require("@vercel/postgres");
const prisma = require("../prisma/db.js").default;
const bcrypt = require("bcrypt");

const users = [
  {
    id: "1",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
  {
    id: "2",
    name: "User2",
    email: "user2@nextmail.com",
    password: "123456",
  },
];

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
      date: index % 2 === 0 ? "2022-12-06" : "2023-09-10",
    };
  });
}

async function seedUsers(client) {
  try {
    // Create the "users" table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL
      );
    `);
    console.log(`Created "users" table`);
    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );
    
    console.log(`Seeded ${insertedUsers.length} users`);
    return {
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error creating users table:", error);
    throw error;
  }
}

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
