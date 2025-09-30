import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, describe, it, beforeEach, expect } from "vitest";
import Settings from "@/pages/Settings";

vi.mock("sonner", () => ({
  toast: vi.fn(),
}));

describe("Settings component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(<Settings />);

    expect(screen.getByLabelText(/Your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password Confirmation/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("shows error for invalid email", async () => {
    render(<Settings />);

    fireEvent.change(screen.getByLabelText(/Your email address/i), {
      target: { value: "invalid-email" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/You have to enter a valid email address/i)
      ).toBeInTheDocument();
    });
  });

  it("shows error when passwords do not match", async () => {
    render(<Settings />);

    fireEvent.change(screen.getByLabelText(/Your password/i), {
      target: { value: "secret123" },
    });
    fireEvent.change(screen.getByLabelText(/Password Confirmation/i), {
      target: { value: "different" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/Password do not match/i)).toBeInTheDocument();
    });
  });

  it("submits form with valid data and calls toast", async () => {
    const { toast } = await import("sonner");
    render(<Settings />);

    fireEvent.change(screen.getByLabelText(/Your name/i), {
      target: { value: "Alice" },
    });
    fireEvent.change(screen.getByLabelText(/Your email address/i), {
      target: { value: "alice@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/Your password/i), {
      target: { value: "secret123" },
    });
    fireEvent.change(screen.getByLabelText(/Password Confirmation/i), {
      target: { value: "secret123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith("Your information has been updated.");
    });
  });

  it("calls toast when Request Your Data is clicked", async () => {
    const { toast } = await import("sonner");
    render(<Settings />);

    const requestButton = screen.getByRole("button", {
      name: /Request Your Data/i,
    });
    fireEvent.click(requestButton);

    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith("Coming soon");
    });
  });
});
