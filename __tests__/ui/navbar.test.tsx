import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavLinks from "@/app/ui/navlinks";

describe("Navlinks", () => {
  it("renders all navlinks", async () => {
    render(<NavLinks />);

    const home = screen.getByText(/Home/);
    const invoices = screen.getByText(/Invoices/);
    const customers = screen.getByText(/Customers/);

    expect(home).toBeInTheDocument();
    expect(invoices).toBeInTheDocument();
    expect(customers).toBeInTheDocument();
  });
});
