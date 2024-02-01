export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type RevenueData = {
  month: string;
  revenue: number;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {
  amount: number;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
  date: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
}

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type Members = {
  id: string,
  name: string,
  company: string,
  phonenumber: string,
  email: string,
  country: string,
  status: "Active" | "Inactive"
}
