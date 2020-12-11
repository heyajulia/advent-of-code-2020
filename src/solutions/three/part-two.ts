import { Space } from "./common";
import { Forest } from "./Forest";

export default function partTwo(
  spaces: Space[][],
  slopes: [number, number][]
): number {
  let answer = 1;

  for (const slope of slopes) {
    const forest = new Forest(spaces, slope);

    answer *= forest.countTrees();
  }

  return answer;
}
