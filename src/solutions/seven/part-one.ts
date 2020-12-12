import { BagColor, Bags } from "./common";

export function flattenBag(bags: Bags, bagColor: BagColor): BagColor[] {
  const flattened = [];

  for (const bag of bags[bagColor]) {
    flattened.push(bag);

    if (bag !== "shiny gold") {
      flattened.push(...flattenBag(bags, bag));
    }
  }

  return Array.from(new Set(flattened));
}

export default function partOne(bags: Bags): number {
  let n = 0;

  for (const color of Object.keys(bags)) {
    if (flattenBag(bags, color).includes("shiny gold")) {
      n++;
    }
  }

  return n;
}
