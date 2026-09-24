import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("supports keyboard activation and forwards the click handler", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Contacter</Button>);
    await user.tab();
    expect(screen.getByRole("button", { name: "Contacter" })).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onClick).toHaveBeenCalledOnce();
  });
  it("does not activate when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Envoyer</Button>);
    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("composes with a link without nesting interactive elements", () => {
    render(<Button asChild variant="outline" size="sm" className="px-8"><a href="mailto:test@example.com">Écrire</a></Button>);
    const link = screen.getByRole("link", { name: "Écrire" });
    expect(link).toHaveAttribute("href", "mailto:test@example.com");
    expect(link).toHaveClass("px-8", "border");
    expect(link).not.toHaveClass("px-3");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
