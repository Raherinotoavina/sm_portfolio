import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Home from "./page";
import { codingame, hackerRankCertifications } from "@/content/career";

describe("Home", () => {
  it("identifies the owner and provides the skip-link target", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: "RAHERINOTOAVINA Safidy Mariël" })).toBeVisible();
    expect(screen.getByRole("main")).toHaveAttribute("id", "contenu");
    expect(screen.getByText(/Développeur fullstack à la croisée/)).toBeVisible();
  });

  it("connects every in-page link to an existing section", () => {
    render(<Home />);
    for (const link of screen.getAllByRole("link")) {
      const href = link.getAttribute("href")!;
      if (href.startsWith("#")) expect(document.getElementById(href.slice(1))).toBeInTheDocument();
    }
    expect(screen.getByRole("link", { name: "Explorer" })).toHaveAttribute("href", "#projets");
  });

  it("presents a case study with the confirmed contribution and source context", async () => {
    const user = userEvent.setup();
    render(<Home />);
    expect(screen.getByRole("heading", { name: "SIRH & Plus" })).toBeVisible();
    expect(screen.getByText("Migration d’une structure monolithique vers des micro-frontends")).toBeVisible();
    expect(screen.getByText("Gestion des maintenances · Formation · GTA")).toBeVisible();
    await user.click(screen.getByText("Lire l’étude de cas"));
    expect(screen.getByText(/GTA \(Gestion des temps d’activité\)/)).toBeVisible();
    expect(screen.getByText(/Période exacte de contribution/)).toBeVisible();
    expect(screen.getByRole("link", { name: /Découvrir le site du produit/ })).toHaveAttribute("href", "https://www.sirhplus.fr/");
  });

  it("links to contact and professional profiles", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: "Écrivez-moi" })).toHaveAttribute("href", "mailto:raherinotoavinasa@gmail.com");
    expect(screen.getByRole("link", { name: /Explorer mes dépôts GitHub/ })).toHaveAttribute("href", "https://github.com/raherinotoavina");
    expect(screen.getByRole("link", { name: /LinkedIn/ })).toHaveAttribute("href", "https://www.linkedin.com/in/safidy-mariel-raherinotoavina-659612262");
  });

  it("presents confirmed experience dates and the ongoing Master II", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /Quelques.*jalons/ })).toBeVisible();
    expect(screen.getByRole("heading", { name: "Développeur frontend" })).toBeVisible();
    expect(screen.getByText("Depuis juin 2024")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Stagiaire développeur fullstack" })).toBeVisible();
    expect(screen.getByText("Février 2023 · 3 mois")).toBeVisible();
    expect(screen.getByRole("heading", { name: "Master II en intelligence artificielle" })).toBeVisible();
    expect(screen.getByText(/En cours ; établissement/)).toBeVisible();
  });

  it("links each public certification and distinguishes platform achievements", () => {
    render(<Home />);
    for (const certificate of hackerRankCertifications) {
      expect(screen.getByRole("link", { name: new RegExp(certificate.name.replace(/[()]/g, "\\$&")) })).toHaveAttribute("href", certificate.href);
    }
    expect(screen.getByRole("link", { name: "Voir le profil CodinGame" })).toHaveAttribute("href", codingame.href);
    expect(screen.getByText(/ne remplacent pas les diplômes/)).toBeVisible();
  });

  it("keeps primary navigation keyboard accessible", async () => {
    const user = userEvent.setup();
    render(<Home />);
    for (const name of ["Ramasama — accueil", "Travaux 01", "Profil 02", "Parcours 03", "Disponible pour échanger"]) {
      await user.tab();
      expect(screen.getByRole("link", { name })).toHaveFocus();
    }
  });
});
