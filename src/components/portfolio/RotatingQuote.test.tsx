import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { RotatingQuote } from "./RotatingQuote";
import { testimonials } from "@/data/portfolio";

describe("RotatingQuote", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
    );
  });
  afterEach(() => {
    cleanup();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("rotates matching text and attribution, with pause and manual wraparound", () => {
    render(<RotatingQuote />);
    expect(screen.getByText(`“${testimonials[0]!.quote}”`)).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(15_000);
    });
    expect(screen.getByText(`— ${testimonials[1]!.by}`)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Pause quotes" }));
    act(() => {
      vi.advanceTimersByTime(30_000);
    });
    expect(screen.getByText(`— ${testimonials[1]!.by}`)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Previous quote" }));
    fireEvent.click(screen.getByRole("button", { name: "Previous quote" }));
    expect(screen.getByText(`— ${testimonials.at(-1)!.by}`)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Next quote" }));
    expect(screen.getByText(`— ${testimonials[0]!.by}`)).toBeInTheDocument();
  });

  it("pauses for hover and keyboard focus", () => {
    render(<RotatingQuote />);
    const region = screen.getByRole("region", { name: "Testimonials" });
    fireEvent.mouseEnter(region);
    act(() => {
      vi.advanceTimersByTime(15_000);
    });
    expect(screen.getByText(`— ${testimonials[0]!.by}`)).toBeInTheDocument();
    fireEvent.mouseLeave(region);
    fireEvent.focus(screen.getByRole("button", { name: "Next quote" }));
    act(() => {
      vi.advanceTimersByTime(15_000);
    });
    expect(screen.getByText(`— ${testimonials[0]!.by}`)).toBeInTheDocument();
  });

  it("starts paused when reduced motion is requested and cleans up timers", () => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({ matches: true, addEventListener: vi.fn(), removeEventListener: vi.fn() })),
    );
    const { unmount } = render(<RotatingQuote />);
    expect(screen.getByRole("button", { name: "Play quotes" })).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(30_000);
    });
    expect(screen.getByText(`— ${testimonials[0]!.by}`)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Play quotes" }));
    expect(vi.getTimerCount()).toBeGreaterThan(0);
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
