import readInput from "../../common/read-input";
import partTwo from "../three/part-two";
import partOne from "../three/part-one";
import { slopes, toSpaceRow } from "./common";
import { Forest } from "./Forest";

(async () => {
  const spaces = await readInput(3, (line) => toSpaceRow(line));
  let forest = new Forest(spaces);

  console.log(`Part one: ${partOne(forest)}`);
  console.log(`Part two: ${partTwo(spaces, slopes)}`);
})();
