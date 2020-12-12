import { expect } from "chai";
import { Bags, Foo } from "../solutions/seven/common";
import partOne, { flattenBag } from "../solutions/seven/part-one";
import { flat, partTwo } from "../solutions/seven/part-two";

describe("Day 7", function () {
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
  });

  describe("Part 2", function () {
    it("should return 32", function () {
      const bags: Foo = {
        "light red": [
          [1, "bright white"],
          [2, "muted yellow"],
        ],
        "dark orange": [
          [3, "bright white"],
          [4, "muted yellow"],
        ],
        "bright white": [[1, "shiny gold"]],
        "muted yellow": [
          [2, "shiny gold"],
          [9, "faded blue"],
        ],
        "shiny gold": [
          [1, "dark olive"],
          [2, "vibrant plum"],
        ],
        "dark olive": [
          [3, "faded blue"],
          [4, "dotted black"],
        ],
        "vibrant plum": [
          [5, "faded blue"],
          [6, "dotted black"],
        ],
        "faded blue": [],
        "dotted black": [],
      };

      expect(partTwo(bags)).to.equal(32);
    });

    it("should return 126", function () {
      const bags: Foo = {
        "shiny gold": [[2, "dark red"]],
        "dark red": [[2, "dark orange"]],
        "dark orange": [[2, "dark yellow"]],
        "dark yellow": [[2, "dark green"]],
        "dark green": [[2, "dark blue"]],
        "dark blue": [[2, "dark violet"]],
        "dark violet": [],
      };

      expect(partTwo(bags)).to.equal(126);
    });

    describe("flat", function () {
      it("should return the expected value", function () {
        const bags: Foo = {
          "shiny gold": [[2, "dark red"]],
          "dark red": [[2, "dark orange"]],
          "dark orange": [],
        };

        expect(flat(bags, "shiny gold")).to.equal(7);
      });
    });
  });
});
