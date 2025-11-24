import HelloWorld from "@/app/utils/HelloWorld";
import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

test("renders name", async () => {
  const { getByText } = await render(<HelloWorld name="Vitest" />);
  await expect.element(getByText("Hello Vitest!")).toBeInTheDocument();
});
