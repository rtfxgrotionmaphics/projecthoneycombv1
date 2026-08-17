import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

const preservedCopy = [
  "Honeycomb's mission is to support and empower those who have experienced or witnessed a UFO, UAP, or anything related to the Phenomenon",
  "We have built an ever-evolving platform to share anomalous experiences with others",
  "For too long stigma and secrecy have caused us to keep these profound encounters to ourselves",
  "We are here to change that.",
  "Over the past decade, we have been documenting these interactions to build a visual, searchable database.",
  "This is our path to disclosure. This information belongs to all of us.",
  "We are building this archive with you. One person at a time. One experience at a time.",
  "Paul Werenko is the visionary behind Honeycomb.",
  "With a lifelong fascination in the question of consciousness",
  "In late 2022, award-winning reporter, writer, producer, news anchor and podcaster James Faulk",
  "Liz Perez’s personal experiences with the anomalous span the breadth of her life",
  "Driven by the idea of aiding connection and expansion of the human story within the phenomenon",
  "Prefer to remain anonymous? Send us your thoughts through this survey.",
];

test("preserves all major source-copy sections verbatim", () => {
  for (const excerpt of preservedCopy) assert.ok(page.includes(excerpt), `Missing: ${excerpt}`);
});

test("keeps all named portraits and the confirmed Paul portrait", () => {
  for (const name of ["Mark", "Walter P", "Karen Fine", "Pricilla", "Cydney", "Finn", "George Kendle", "Ramiro", "Paul Werenko"]) {
    assert.ok(page.includes(name), `Missing portrait: ${name}`);
  }
  assert.ok(page.includes('/people/paul-werenko.png'));
  assert.equal((page.match(/\["\/people\//g) ?? []).length, 15);
});

test("retains the approved interaction boundaries", () => {
  assert.ok(page.includes('onClick={() => openPanel("explore")}'));
  assert.ok(page.includes('aria-label="Future archive video"'));
  assert.ok(!page.includes('onMouseEnter={() => openPanel'));
});
