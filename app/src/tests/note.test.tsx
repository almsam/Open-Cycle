import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, describe, it, beforeEach, expect } from "vitest";
import Note from "@/pages/Note";

vi.mock("sonner", () => ({
  toast: vi.fn(),
}));

// mock setCycle
const mockSetCycle = vi.fn();
vi.mock("@/localforage/cycleStorage", () => ({
  setCycle: (...args: any[]) => mockSetCycle(...args),
}));

describe("Note component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(<Note />);

    expect(
      screen.getByLabelText(/Menstruation start date/i)
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Menstruation end date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Ovulation date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Note/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("allows user to fill the form", () => {
    render(<Note />);

    const startInput = screen.getByLabelText(/Menstruation start date/i);
    const endInput = screen.getByLabelText(/Menstruation end date/i);
    const ovulationInput = screen.getByLabelText(/Ovulation date/i);
    const noteInput = screen.getByLabelText(/Note/i);

    fireEvent.change(startInput, { target: { value: "2025-09-01" } });
    fireEvent.change(endInput, { target: { value: "2025-09-05" } });
    fireEvent.change(ovulationInput, { target: { value: "2025-09-14" } });
    fireEvent.change(noteInput, { target: { value: "Feeling good" } });

    expect(startInput).toHaveValue("2025-09-01");
    expect(endInput).toHaveValue("2025-09-05");
    expect(ovulationInput).toHaveValue("2025-09-14");
    expect(noteInput).toHaveValue("Feeling good");
  });

  it("submits form and calls setCycle + toast", async () => {
    const { toast } = await import("sonner");
    render(<Note />);

    const startInput = screen.getByLabelText(/Menstruation start date/i);
    const endInput = screen.getByLabelText(/Menstruation end date/i);
    const ovulationInput = screen.getByLabelText(/Ovulation date/i);
    const noteInput = screen.getByLabelText(/Note/i);

    fireEvent.change(startInput, { target: { value: "2025-09-01" } });
    fireEvent.change(endInput, { target: { value: "2025-09-05" } });
    fireEvent.change(ovulationInput, { target: { value: "2025-09-14" } });
    fireEvent.change(noteInput, { target: { value: "Feeling good" } });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(mockSetCycle).toHaveBeenCalledWith(
        expect.objectContaining({
          menstruationStarts: new Date("2025-09-01"),
          menstruationEnds: new Date("2025-09-05"),
          ovulationDate: new Date("2025-09-14"),
          userNote: "Feeling good",
        })
      );
      expect(toast).toHaveBeenCalledWith("Successfully logged!");
    });
  });
});
