// Source éditoriale : PORTFOLIO_CONTENT.md. Ne pas compléter les inconnues ici.
export const experiences = [
  {
    period: "Depuis juin 2024",
    role: "Développeur frontend",
    organization: "VA-Mada",
    description: "Expérience professionnelle frontend. Les missions et résultats détaillés restent à documenter.",
  },
  {
    period: "Février 2023 · 3 mois",
    role: "Stagiaire développeur fullstack",
    organization: "MTEFoP",
    description: "Stage de développement fullstack auprès du ministère. Projet, technologies et réalisations restent à documenter.",
  },
] as const;

export const education = [
  { year: "2024", title: "Licence en intelligence artificielle", note: "Diplôme déclaré ; établissement et intitulé exact à confirmer." },
  { year: "2026", title: "Master II en intelligence artificielle", note: "En cours ; établissement et intitulé officiel à confirmer." },
] as const;

export const hackerRankCertifications = [
  { name: "JavaScript (Basic)", href: "https://www.hackerrank.com/certificates/4d5fbffbb290" },
  { name: "Problem Solving (Basic)", href: "https://www.hackerrank.com/certificates/fa194f2a7d9a" },
  { name: "JavaScript (Intermediate)", href: "https://www.hackerrank.com/certificates/2b291237ebcc" },
  { name: "SQL (Basic)", href: "https://www.hackerrank.com/certificates/cee2614e1216" },
  { name: "SQL (Intermediate)", href: "https://www.hackerrank.com/certificates/77a527af5f71" },
  { name: "Frontend Developer (React)", href: "https://www.hackerrank.com/certificates/192a1a3bfa87" },
  { name: "React (Basic)", href: "https://www.hackerrank.com/certificates/7fbd05d30fb5" },
] as const;

export const codingame = {
  href: "https://www.codingame.com/profile/06943dbc0adef2805260cd186b19aa6e2450384",
  certifiedLanguages: ["JavaScript", "TypeScript", "Rust", "C++"],
  domains: ["Algorithmes · Légende", "Intelligence artificielle · Argent", "Optimisation · Bronze"],
} as const;
