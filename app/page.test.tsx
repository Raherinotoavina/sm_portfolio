import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("Home", () => {
  it("introduces the owner with one main heading and a skip-link target", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("RAHERINOTOAVINA Safidy Mariël");
    expect(screen.getByRole("main")).toHaveAttribute("id", "contenu");
    expect(screen.getByText("Développeur fullstack")).toBeVisible();
  });
  it("provides working contact and professional profile destinations", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Me contacter" })).toHaveAttribute("href", "mailto:raherinotoavinasa@gmail.com");
    expect(screen.getByRole("link", { name: "Voir mon GitHub" })).toHaveAttribute("href", "https://github.com/raherinotoavina");
  });
});
