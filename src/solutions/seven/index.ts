import readInput from "../../common/read-input";
import partOne from "./part-one";

(async () => {
  const input = await readInput(7, (line) => {
    const regex = /([a-z]+ [a-z]+)/g;

    if (!regex.test(line)) {
      return null;
    }

    const matches = line.match(regex)!;

    return matches.filter((v) => v !== "bags contain" && v !== "no other");
  });

  const bags = {} as any;

  for (const bagColors of input) {
    const [main, ...rest] = bagColors;

    if (bagColors.length === 1) {
      bags[main] = [];
    } else {
      bags[main] = rest;
    }
  }

  console.log(partOne(bags));
})();
