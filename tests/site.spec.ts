import { test, expect } from "@playwright/test";
test("archive links, lesson structure, and case breakdown work", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Fear is not",
  );
  await page.getByRole("link", { name: "Explore the anatomy" }).click();
  await expect(page).toHaveURL(/concepts$/);
  await page
    .getByRole("link")
    .filter({
      has: page.getByRole("heading", { name: "Subverted expectations" }),
    })
    .click();
  await expect(
    page.getByRole("heading", { name: "Experience it." }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Apply it." })).toBeAttached();
  await page.goto("/case-studies/pulse");
  await page.getByRole("button", { name: "03 Disruption" }).click();
  await expect(page.locator(".breakdown-copy dd")).toContainText([
    "The movement resists a reassuring explanation.",
  ]);
});
test("all laboratory experiments respond to their controls", async ({
  page,
}) => {
  await page.goto("/laboratory");
  await page.getByRole("button", { name: /THE SUBVERTED RESPONSE/ }).click();
  await expect(page.locator(".scene-dialogue strong")).toHaveText(
    "“That isn’t me breathing.”",
  );
  await page.getByRole("button", { name: /THE EXPECTED RESPONSE/ }).click();
  await expect(page.locator(".scene-dialogue strong")).toHaveText(
    "“Sorry. I’m trying.”",
  );
  await page.getByRole("tab", { name: /Under the table/ }).click();
  await page.getByRole("button", { name: "Aware", exact: true }).click();
  await expect(
    page.getByRole("img", { name: /audience can see/ }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Next beat" }).click();
  await expect(page.locator(".conversation")).toContainText("Did you leave");
  for (let i = 0; i < 5; i++)
    await page.getByRole("button", { name: "Next beat" }).click();
  await expect(page.locator(".conversation")).toContainText("hidden danger");
  await page.getByRole("button", { name: "Restart scene" }).click();
  await expect(page.locator(".conversation")).toContainText("Begin the scene");
  await page.getByRole("tab", { name: /Tension simulator/ }).click();
  const previous = await page.locator(".tension-reading strong").textContent();
  await page.getByRole("slider", { name: "Anticipation of danger" }).fill("5");
  await expect(page.locator(".tension-reading strong")).not.toHaveText(
    previous!,
  );
  await page.getByRole("tab", { name: /Uncanny movement/ }).click();
  await page.getByRole("slider", { name: "Posture asymmetry" }).fill("90");
  await expect(page.getByRole("img", { name: /90 percent/ })).toBeVisible();
  await page.getByRole("button", { name: "Run comparison" }).click();
  await expect(
    page.getByRole("button", { name: "Pause comparison" }),
  ).toBeVisible();
  await page.getByRole("tab", { name: /almost-human/ }).click();
  await page.getByRole("slider", { name: "Eye proportions" }).fill("85");
  await page.getByRole("button", { name: "Compare with baseline" }).click();
  await expect(
    page.getByRole("img", { name: "Baseline illustrated face" }),
  ).toBeVisible();
});
test("workshop saves separate drafts and reflections, and exports", async ({
  page,
}) => {
  await page.goto("/workshop");
  await page.getByLabel("YOUR DRAFT").fill("She smiled. Her shadow did not.");
  await expect(page.getByRole("status")).toContainText("Saved");
  await page.getByRole("button", { name: "Compare with an example" }).click();
  await page
    .getByLabel("What does your version")
    .fill("The mismatch is left unexplained.");
  await page.reload();
  await expect(page.getByLabel("YOUR DRAFT")).toHaveValue(
    "She smiled. Her shadow did not.",
  );
  await page.getByRole("button", { name: "Compare with an example" }).click();
  await expect(page.getByLabel("What does your version")).toHaveValue(
    "The mismatch is left unexplained.",
  );
  await page
    .locator(".workshop-sidebar")
    .getByRole("button", { name: /Subverted expectations/ })
    .click();
  await expect(page.getByLabel("YOUR DRAFT")).toHaveValue("");
  await page
    .locator(".workshop-sidebar")
    .getByRole("button", { name: /uncanny valley/ })
    .click();
  await expect(page.getByLabel("YOUR DRAFT")).toHaveValue(
    "She smiled. Her shadow did not.",
  );
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Export draft" }).click();
  expect((await download).suggestedFilename()).toContain("the-uncanny");
});
test("mobile navigation and reduced motion are usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "The laboratory" })
    .click();
  await expect(page).toHaveURL(/laboratory$/);
  await expect(page.locator("html")).toHaveAttribute("data-motion", "off");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBeTruthy();
  await page.getByRole("tab", { name: /almost-human/ }).click();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBeTruthy();
});
test("required routes render without browser errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const url of [
    "/",
    "/concepts",
    "/concepts/the-uncanny",
    "/concepts/subverted-expectations",
    "/concepts/building-tension",
    "/concepts/fear-of-the-unseen",
    "/concepts/dramatic-irony",
    "/case-studies",
    "/case-studies/pulse",
    "/case-studies/the-others",
    "/case-studies/hitchcock",
    "/case-studies/obsession",
    "/laboratory",
    "/workshop",
    "/about",
  ]) {
    const response = await page.goto(url);
    expect(response?.status(), url).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
  }
  expect(errors).toEqual([]);
});
