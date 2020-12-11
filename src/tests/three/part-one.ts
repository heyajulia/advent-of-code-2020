import { expect } from "chai";
import partOne, { Forest, toSpaceArray } from "../../solutions/three/part-one";

describe("Day 3", function () {
  describe("Part 1", function () {
    it("should return 7", function () {
      const forest = new Forest(
        toSpaceArray([
          "..##.......",
          "#...#...#..",
          ".#....#..#.",
          "..#.#...#.#",
          ".#...##..#.",
          "..#.##.....",
          ".#.#.#....#",
          ".#........#",
          "#.##...#...",
          "#...##....#",
          ".#..#...#.#",
        ])
      );

      expect(partOne(forest)).to.equal(7);
    });
  });
});
