import { describe, it, expect, vi, beforeEach } from "vitest";

describe("i18n initialization", () => {
  beforeEach(() => {
    vi.resetModules();
    localStorage.clear();
  });

  it("initializes with language from localStorage", async () => {
    localStorage.setItem("language", "es");

    // Import i18n after setting localStorage to test initialization
    const i18n = (await import("../src/i18n/index")).default;

    expect(i18n.language).toBe("es");
  });

  it("defaults to 'en' when localStorage is empty", async () => {
    const i18n = (await import("../src/i18n/index")).default;

    expect(i18n.language).toBe("en");
  });

  it("updates localStorage when language is changed", async () => {
    const i18n = (await import("../src/i18n/index")).default;

    await i18n.changeLanguage("ca");
    expect(localStorage.getItem("language")).toBe("ca");
  });
});
