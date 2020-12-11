import { expect } from "chai";
import partOne, { Password } from "../solutions/two/part-one";
import partTwo, { Password as PasswordTwo } from "../solutions/two/part-two";

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

  describe("Part 2", function () {
    it("should return 1", function () {
      const passwords: PasswordTwo[] = [
        { password: "abcde", letter: "a", posA: 1, posB: 3 },
        { password: "cdefg", letter: "b", posA: 1, posB: 3 },
        { password: "ccccccccc", letter: "c", posA: 2, posB: 9 },
      ];

      expect(partTwo(passwords)).to.equal(1);
    });
  });
});
