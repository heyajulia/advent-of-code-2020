import { expect } from "chai";
import partOne, { Password } from "../../solutions/two/part-one";

describe("Day 2", function () {
  describe("Part 1", function () {
    it("should return 2", function () {
      const passwords: Password[] = [
        { password: "abcde", letter: "a", min: 1, max: 3 },
        { password: "cdefg", letter: "b", min: 1, max: 3 },
        { password: "ccccccccc", letter: "c", min: 2, max: 9 },
      ];

      expect(partOne(passwords)).to.equal(2);
    });
  });
});
