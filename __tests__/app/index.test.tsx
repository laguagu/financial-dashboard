import { render, screen, waitFor } from "@testing-library/react";
import Home from "@/app/(overview)/page";

describe("Home Component", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it("renders the home page", () => {
    const homeElement = screen.getByRole("main");
    expect(homeElement).toBeInTheDocument();
  });
});
