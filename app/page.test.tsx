import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
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
  it("connects every internal navigation link to an existing section", () => {
    render(<Home />);
    expect(screen.getByRole("navigation", { name: "Navigation principale" })).toBeVisible();
    for (const link of screen.getAllByRole("link")) {
      const href = link.getAttribute("href")!;
      if (href.startsWith("#")) {
        expect(document.getElementById(href.slice(1))).toBeInTheDocument();
      }
    }
    expect(screen.getByRole("link", { name: "Explorer mon univers" })).toHaveAttribute("href", "#exploration");
  });
  it("keeps navigation and primary actions accessible in keyboard order", async () => {
    const user = userEvent.setup();
    render(<Home />);
    for (const name of ["Ramasama — accueil", "Exploration", "Parlons ensemble", "Explorer mon univers", "Me contacter", "Voir mon GitHub"]) {
      await user.tab();
      expect(screen.getByRole("link", { name })).toHaveFocus();
    }
  });
  it("presents confirmed experience without overstating project ownership", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "Frontend chez VA-Mada" })).toBeVisible();
    expect(screen.getByText(/maintenance de tous les modules frontend existants/)).toBeVisible();
    expect(screen.getByText("LA CURIOSITÉ COMME GRAVITÉ.").parentElement).toHaveAttribute("aria-hidden", "true");
  });
});
