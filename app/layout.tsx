import type { Metadata } from "next";
import type { ReactNode } from "react";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: `${profile.fullName} — ${profile.role}`,
  description: profile.introduction,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full">
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:p-3 focus:text-primary-foreground">
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
