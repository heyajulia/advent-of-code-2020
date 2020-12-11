import { expect } from "chai";
import { toSpaceArray } from "../../solutions/three/common";
import { Forest } from "../../solutions/three/Forest";
import partOne from "../../solutions/three/part-one";

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
