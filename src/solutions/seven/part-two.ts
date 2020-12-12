import { Foo } from "./common";

export function flat(bags: Foo, bagColor: string = "shiny gold"): number {
  let n = 1;

  if (typeof bags[bagColor] === "undefined") {
    console.log(bagColor);
    return 1;
  }

  for (const [i, b] of bags[bagColor]) {
    n += i * flat(bags, b);
  }

  return n;
}

export function partTwo(bags: Foo): number {
  return flat(bags) - 1;
}
