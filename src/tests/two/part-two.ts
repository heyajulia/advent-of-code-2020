import { expect } from "chai";
import partTwo, { Password } from "../../solutions/two/part-two";

describe("Day 2", function () {
  describe("Part 2", function () {
    it("should return 1", function () {
      const passwords: Password[] = [
        { password: "abcde", letter: "a", posA: 1, posB: 3 },
        { password: "cdefg", letter: "b", posA: 1, posB: 3 },
        { password: "ccccccccc", letter: "c", posA: 2, posB: 9 },
      ];

      expect(partTwo(passwords)).to.equal(1);
    });
  });
});
