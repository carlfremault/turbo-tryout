import { subtract } from "@/utils/subtract";
import { expect, test } from "vitest";

test("adds", () => {
  expect(subtract(3, 2)).toBe(1);
});
