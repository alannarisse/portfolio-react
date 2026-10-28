import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { featuredProjects, projects } from "@/data/portfolio";
import { FeaturedJob } from "./FeaturedJob";

afterEach(cleanup);

it("features Send a Boop with distinct device images and an expandable case study", () => {
  const project = featuredProjects.find((item) => item.id === "send-a-boop")!;
  render(<FeaturedJob job={project} />);
  expect(screen.getByRole("link", { name: "Send a Boop" })).toHaveAttribute(
    "href",
    "https://sendaboop.app/",
  );
  expect(screen.getByAltText("Send a Boop desktop")).toHaveAttribute("src", project.desktop);
  expect(screen.getByAltText("Send a Boop mobile")).toHaveAttribute("src", project.mobile);
  expect(project.desktop).not.toBe(project.mobile);
  expect(projects.some((item) => item.name === project.name)).toBe(false);
  fireEvent.click(screen.getByRole("button", { name: /Read case study/ }));
  expect(screen.getByRole("heading", { name: "Build & testing approach" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Results" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /Close case study/ }));
  expect(screen.queryByRole("heading", { name: "Results" })).not.toBeInTheDocument();
});
