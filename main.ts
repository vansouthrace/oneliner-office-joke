import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I put 'quick sync' on the calendar and now three departments are in a room arguing about what 'quick' means.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
