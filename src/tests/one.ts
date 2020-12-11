import { expect } from "chai";
import partOne from "../solutions/one/part-one";
import partTwo from "../solutions/one/part-two";

describe("Day 1", function () {
  describe("Part 1", function () {
    it("should return 514579", function () {
      expect(partOne([1721, 979, 366, 299, 675, 1456])).to.equal(514579);
    });
  });

  describe("Part 2", function () {
    it("should return 241861950", function () {
      expect(partTwo([1721, 979, 366, 299, 675, 1456])).to.equal(241861950);
    });
  });
});
