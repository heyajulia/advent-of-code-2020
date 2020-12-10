import readInput from "../../common/read-input";
import partOne from "./part-one";
import Password from "./Password";

(async () => {
  const re = /(?<min>\d+)-(?<max>\d+) (?<letter>[a-z]): (?<password>[a-z]+)/;
  const passwords = await readInput(2, (line) => {
    const match = line.match(re);

    if (match === null) {
      return null;
    }

    const { groups } = match as any;

    const password: string = groups.password;
    const letter: string = groups.letter;
    const min = parseInt(groups.min, 10);
    const max = parseInt(groups.max, 10);

    return { password, letter, min, max } as Password;
  });

  console.log("Part one:", partOne(passwords));
})();
