import readInput from "../../common/read-input";
import partOne from "./part-one";
import { parsePassport } from "./Passport";

(async () => {
  const db = await readInput(4, "\n\n", (line) => parsePassport(line));

  console.log(`Part one: ${partOne(db)}`);
})();
