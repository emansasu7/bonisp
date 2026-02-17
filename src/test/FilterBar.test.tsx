import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import FilterBar from "../components/Dashboard/FilterBar";

describe("FilterBar", () => {
  it("should render all period buttons", () => {
    render(
      <FilterBar
        activePeriod="30d"
        selectedCategory="All"
        onPeriodChange={vi.fn()}
        onCategoryChange={vi.fn()}
      />,
    );

    expect(screen.getByText("7 Days")).toBeInTheDocument();
    expect(screen.getByText("30 Days")).toBeInTheDocument();
    expect(screen.getByText("90 Days")).toBeInTheDocument();
    expect(screen.getByText("1 Year")).toBeInTheDocument();
  });

  it("should call onPeriodChange when period button clicked", async () => {
    const onPeriodChange = vi.fn();
    const user = userEvent.setup();

    render(
      <FilterBar
        activePeriod="30d"
        selectedCategory="All"
        onPeriodChange={onPeriodChange}
        onCategoryChange={vi.fn()}
      />,
    );

    await user.click(screen.getByText("7 Days"));
    expect(onPeriodChange).toHaveBeenCalledWith("7d");
  });

  it("should call onCategoryChange when category button clicked", async () => {
    const onCategoryChange = vi.fn();
    const user = userEvent.setup();

    render(
      <FilterBar
        activePeriod="30d"
        selectedCategory="All"
        onPeriodChange={vi.fn()}
        onCategoryChange={onCategoryChange}
      />,
    );

    await user.click(screen.getByText("Groceries"));
    expect(onCategoryChange).toHaveBeenCalledWith("Groceries");
  });

  it("should render all category options", () => {
    render(
      <FilterBar
        activePeriod="30d"
        selectedCategory="All"
        onPeriodChange={vi.fn()}
        onCategoryChange={vi.fn()}
      />,
    );

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Groceries")).toBeInTheDocument();
    expect(screen.getByText("Entertainment")).toBeInTheDocument();
    expect(screen.getByText("Transportation")).toBeInTheDocument();
  });
});
