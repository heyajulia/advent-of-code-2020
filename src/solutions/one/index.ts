import readInput from "../../common/read-input";
import partOne from "./part-one";
import partTwo from "./part-two";

(async () => {
  const expenseReport = await readInput(1, (line) => parseInt(line, 10));

  console.log("Part one:", partOne(expenseReport));
  console.log("Part two:", partTwo(expenseReport));
})();
