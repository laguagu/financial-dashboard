import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Component", () => {
  it("should render customer data correctly", () => {
    render(<Home />);

    const user = screen.getByText("Nikita Kucherov");
    expect(user).toBeInTheDocument();
  });
});
