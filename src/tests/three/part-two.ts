import { expect } from "chai";
import { slopes, toSpaceArray } from "../../solutions/three/common";
import partTwo from "../../solutions/three/part-two";

describe("Day 3", function () {
  describe("Part 2", function () {
    it("should return 336 for slopes [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]", function () {
      const spaceArray = toSpaceArray([
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
      ]);

      expect(partTwo(spaceArray, slopes)).to.equal(336);
    });
  });
});
