import readInput from "../../common/read-input";
import { parsePassport } from "./common";
import partOne from "./part-one";
import partTwo from "./part-two";

(async () => {
  const db = await readInput(4, "\n\n", (line) => parsePassport(line));

  console.log(`Part one: ${partOne(db)}`);
  console.log(`Part one: ${partTwo(db)}`);
})();
