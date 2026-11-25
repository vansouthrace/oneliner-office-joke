import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke, at most 200 characters.
const joke = "I told HR my spirit animal is the office printer: I only work when nobody's watching, and I jam under pressure.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke);
