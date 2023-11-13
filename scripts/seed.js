// import { db } from '@vercel/postgres';
const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  users,
} = require('../app/lib/placeholder-data.js');


async function main() {
  const client = await db.connect();
  console.log(client)
  
//   await seedUsers(client);
//   await seedCustomers(client);
//   await seedInvoices(client);
//   await seedRevenue(client);

//   await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
