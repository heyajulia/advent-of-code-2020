import { expect } from "chai";
import { slopes, toSpaceArray } from "../solutions/three/common";
import { Forest } from "../solutions/three/Forest";
import partOne from "../solutions/three/part-one";
import partTwo from "../solutions/three/part-two";

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
