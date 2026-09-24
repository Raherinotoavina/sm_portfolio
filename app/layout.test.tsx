import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import RootLayout, { metadata } from "./layout";

describe("RootLayout", () => {
  it("sets document language, preserves children and offers a skip link", () => {
    const markup = renderToStaticMarkup(<RootLayout><main id="contenu">Contenu du portfolio</main></RootLayout>);
    const document = new DOMParser().parseFromString(markup, "text/html");
    expect(document.documentElement.lang).toBe("fr");
    expect(document.querySelector("main")?.textContent).toBe("Contenu du portfolio");
    expect(document.querySelector("a")?.getAttribute("href")).toBe("#contenu");
    expect(document.querySelector("a")?.textContent).toBe("Aller au contenu");
  });
  it("publishes the owner's identity in metadata", () => {
    expect(metadata.title).toContain("RAHERINOTOAVINA Safidy Mariël");
    expect(metadata.description).toContain("intelligence artificielle");
  });
});
