import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "../components/ui/sidebar";
import { vi, describe, it, beforeEach, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

// Mock toast
vi.mock("sonner", () => ({
  toast: vi.fn(),
}));

// Mock react-router-dom
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({ pathname: "/" }),
  };
});

describe("Sidebar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders sidebar title", () => {
    render(<Sidebar />);
    expect(screen.getByText("Open Cycle")).toBeInTheDocument();
  });

  it("navigates to home when Home button clicked", () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText("Home"));
    expect(mockNavigate).toHaveBeenCalledWith("home");
  });

  it("navigates to note when Note button clicked", () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText("Note"));
    expect(mockNavigate).toHaveBeenCalledWith("note");
  });

  test("calls sign out when 'Sign Out' in profile dialog is clicked", async () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );

    const profileButton = screen.getByRole("button", { name: /Profile/i });
    fireEvent.click(profileButton);
    const alertDialogTrigger = await screen.findByRole("button", {
      name: /Sign out/i,
    });
    fireEvent.click(alertDialogTrigger);

    const confirmButton = await screen.findByRole("button", {
      name: /Sign Out/i,
    });
    fireEvent.click(confirmButton);

    expect(mockNavigate).toHaveBeenCalledWith("login");
  });

  it("calls deleteAccount when Delete Account is confirmed", () => {
    render(<Sidebar />);

    fireEvent.click(screen.getByText("Profile"));
    fireEvent.click(screen.getByText("Delete Account"));
    const deleteButton = screen.getAllByText("Delete account")[0];
    fireEvent.click(deleteButton);

    expect(mockNavigate).toHaveBeenCalledWith("login");
  });
});
