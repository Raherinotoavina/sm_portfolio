import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("merges conditional classes and resolves conflicting Tailwind utilities", () => {
    expect(cn("px-2 py-4", false, undefined, { hidden: false, flex: true }, ["px-6"]))
      .toBe("py-4 flex px-6");
  });
  it("accepts no classes", () => { expect(cn()).toBe(""); });
});
