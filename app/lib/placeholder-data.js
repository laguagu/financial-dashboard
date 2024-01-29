// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data


const customers = [
  { id: '1', name: 'Customer 1' },
  { id: '2', name: 'Customer 2' },
  // Lisää tarvittavat asiakkaat tähän
];

const users = [
    {
      id: '1',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
    {
      id: '2',
      name: 'User2',
      email: 'user2@nextmail.com',
      password: '123456',
    },
  ];

  const revenue = [
    { month: 'Jan', revenue: 2000 },
    { month: 'Feb', revenue: 1800 },
    { month: 'Mar', revenue: 2200 },
    { month: 'Apr', revenue: 2500 },
    { month: 'May', revenue: 2300 },
    { month: 'Jun', revenue: 3200 },
    { month: 'Jul', revenue: 3500 },
    { month: 'Aug', revenue: 3700 },
    { month: 'Sep', revenue: 2500 },
    { month: 'Oct', revenue: 2800 },
    { month: 'Nov', revenue: 3000 },
    { month: 'Dec', revenue: 4800 },
  ];

  const paidMembers = [
    {
      name: 'Matti Nykänen',
      company: 'Microsoft',
      phoneNumber: '050505050',
      email: 'Matti@microsoft.com',
      country: 'United States',
      status: 'Active',
    },
    {
      name: 'Jane Cooper',
      company: 'Yahoo',
      phoneNumber: '043043958',
      email: 'Jana@yahoo.com',
      country: 'Hong Kong',
      status: 'Inactive',
    },
    {
      name: 'John Doe',
      company: 'Google',
      phoneNumber: '123456789',
      email: 'john.doe@google.com',
      country: 'Canada',
      status: 'Active',
    },
    {
      name: 'Alice Smith',
      company: 'Apple',
      phoneNumber: '987654321',
      email: 'alice.smith@apple.com',
      country: 'United Kingdom',
      status: 'Inactive',
    },
    {
      name: 'Bob Johnson',
      company: 'Amazon',
      phoneNumber: '555555555',
      email: 'bob.johnson@amazon.com',
      country: 'Brazil',
      status: 'Active',
    },
    {
      name: 'Eva Martinez',
      company: 'Samsung',
      phoneNumber: '777777777',
      email: 'eva.martinez@samsung.com',
      country: 'Spain',
      status: 'Inactive',
    },
    {
      name: 'Daniel Lee',
      company: 'Facebook',
      phoneNumber: '333333333',
      email: 'daniel.lee@facebook.com',
      country: 'South Korea',
      status: 'Active',
    },
    {
      name: 'Sophie Wang',
      company: 'Microsoft',
      phoneNumber: '111111111',
      email: 'sophie.wang@microsoft.com',
      country: 'China',
      status: 'Inactive',
    },
  ];

  module.exports = {
    customers,
    users,
    revenue,
    paidMembers,
  };