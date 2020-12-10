import { expect } from "chai";
import partOne from "../../solutions/one/part-one";

describe("Day 1", function () {
  describe("Part 1", function () {
    it("should return 514579", function () {
      expect(partOne([1721, 979, 366, 299, 675, 1456])).to.equal(514579);
    });
  });
});
