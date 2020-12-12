import { expect } from "chai";
import { Bags } from "../solutions/seven/common";
import partOne, { flattenBag } from "../solutions/seven/part-one";

describe("Day 7", function () {
  describe("flattenBag", function () {
    it("should return the expected value", function () {
      const bags: Bags = {
        "light red": ["bright white", "muted yellow"],
        "bright white": ["shiny gold"],
        "muted yellow": ["shiny gold", "faded blue"],
        "faded blue": [],
      };
      const expected = [
        "bright white",
        "muted yellow",
        "shiny gold",
        "faded blue",
      ];
      const flattened = flattenBag(bags, "light red");

      expect(flattened).to.have.members(expected);
    });
  });

  describe("Part 1", function () {
    it("should return 4", function () {
      const bags: Bags = {
        "light red": ["bright white", "muted yellow"],
        "dark orange": ["bright white", "muted yellow"],
        "bright white": ["shiny gold"],
        "muted yellow": ["shiny gold", "faded blue"],
        "dark olive": ["faded blue", "dotted black"],
        "vibrant plum": ["faded blue", "dotted black"],
        "faded blue": [],
        "dotted black": [],
      };

      expect(partOne(bags)).to.equal(4);
    });
  });
});
