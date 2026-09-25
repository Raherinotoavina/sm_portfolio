import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScrollReveal } from "./scroll-reveal";

afterEach(() => {
  vi.unstubAllGlobals();
  document.documentElement.classList.remove("motion-ready");
  document.body.innerHTML = "";
});

describe("ScrollReveal", () => {
  it("reveals content immediately when IntersectionObserver is unavailable", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    document.body.innerHTML = '<section data-reveal="section"></section>';
    render(<ScrollReveal />);
    expect(document.querySelector("[data-reveal]")).toHaveAttribute("data-visible", "true");
  });

  it("reveals observed content once it intersects and cleans up", () => {
    const observe = vi.fn();
    const unobserve = vi.fn();
    const disconnect = vi.fn();
    let callback: IntersectionObserverCallback = () => undefined;
    class ObserverMock {
      constructor(received: IntersectionObserverCallback) { callback = received; }
      observe = observe;
      unobserve = unobserve;
      disconnect = disconnect;
    }
    vi.stubGlobal("IntersectionObserver", ObserverMock);
    document.body.innerHTML = '<section data-reveal="section"></section>';
    const element = document.querySelector<HTMLElement>("[data-reveal]")!;
    const view = render(<ScrollReveal />);

    expect(observe).toHaveBeenCalledWith(element);
    callback([{ isIntersecting: false, target: element }, { isIntersecting: true, target: element }] as unknown as IntersectionObserverEntry[], {} as IntersectionObserver);
    expect(element).toHaveAttribute("data-visible", "true");
    expect(unobserve).toHaveBeenCalledWith(element);

    view.unmount();
    expect(disconnect).toHaveBeenCalled();
    expect(document.documentElement).not.toHaveClass("motion-ready");
  });
});
