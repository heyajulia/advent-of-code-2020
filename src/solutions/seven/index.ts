import readInput from "../../common/read-input";
import { BagColor, Bags } from "./common";
import partOne from "./part-one";
import { partTwo } from "./part-two";

(async () => {
  const input = await readInput(7, (line) => {
    const regex = /([a-z]+ [a-z]+)/g;

    if (!regex.test(line)) {
      return null;
    }

    const matches = line.match(regex)!;

    return matches.filter((v) => v !== "bags contain" && v !== "no other");
  });

  const bags = {} as Bags;

  for (const bagColors of input) {
    const [main, ...rest] = bagColors;

    if (bagColors.length === 1) {
      bags[main] = [];
    } else {
      bags[main] = rest;
    }
  }

  const inputTwo = await readInput(7, (line) => {
    const colorName = line.split(" ").slice(0, 2).join(" ");
    const matches = line.match(/(\d+ [a-z]+ [a-z]+)/g);

    if (matches === null) {
      return null;
    }

    return [
      colorName,
      matches
        .map((match) => match.split(" "))
        .map(([n, ...name]) => [parseInt(n, 10), name.join(" ")]),
    ] as [BagColor, [number, BagColor][]];
  });

  const foo = {} as any;

  for (const arr of inputTwo) {
    const [colorName, contents] = arr;

    foo[colorName] = contents;
  }

  console.log(`Part one: ${partOne(bags)}`);
  console.log(`Part two: ${partTwo(foo)}`);
})();
