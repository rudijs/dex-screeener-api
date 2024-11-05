import { describe, test, expect } from "vitest";
import { main } from "../../lib/demo";

describe("demo", () => {
  test("main", () => {
    expect(main()).toBe(101);
  });
});
