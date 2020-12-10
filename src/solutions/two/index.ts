import readInput from "../../common/read-input";
import partOne, { Password as PasswordOne } from "./part-one";
import partTwo, { Password as PasswordTwo } from "./part-two";

(async () => {
  const reOne = /(?<min>\d+)-(?<max>\d+) (?<letter>[a-z]): (?<password>[a-z]+)/;
  const passwordsOne = await readInput(2, (line) => {
    const match = line.match(reOne);

    if (match === null) {
      return null;
    }

    const { groups } = match as any;

    const password: string = groups.password;
    const letter: string = groups.letter;
    const min = parseInt(groups.min, 10);
    const max = parseInt(groups.max, 10);

    return { password, letter, min, max } as PasswordOne;
  });

  const reTwo = /(?<posA>\d+)-(?<posB>\d+) (?<letter>[a-z]): (?<password>[a-z]+)/;
  const passwordsTwo = await readInput(2, (line) => {
    const match = line.match(reTwo);

    if (match === null) {
      return null;
    }

    const { groups } = match as any;

    const password: string = groups.password;
    const letter: string = groups.letter;
    const posA = parseInt(groups.posA, 10);
    const posB = parseInt(groups.posB, 10);

    return { password, letter, posA, posB } as PasswordTwo;
  });

  console.log("Part one:", partOne(passwordsOne));
  console.log("Part two:", partTwo(passwordsTwo));
})();
