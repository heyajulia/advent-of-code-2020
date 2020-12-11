import readInput from "../../common/read-input";
import partOne, { Forest, toSpaceRow } from "./part-one";

(async () => {
  const spaces = await readInput(3, (line) => toSpaceRow(line));
  const forest = new Forest(spaces);

  console.log(`Part one: ${partOne(forest)}`);
})();
