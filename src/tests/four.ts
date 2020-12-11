import { expect } from "chai";
import partOne from "../solutions/four/part-one";
import Passport from "../solutions/four/common";
import {
  validateBirthYear,
  validateIssueYear,
  validateHeight,
  validateHairColor,
  validateEyeColor,
  validatePassportId,
} from "../solutions/four/validators";

describe("Day 4", function () {
  describe("Part 1", function () {
    it("should return 2", function () {
      const passports: Partial<Passport>[] = [
        {
          eyeColor: "gry",
          passportId: "860033327",
          expirationYear: "2020",
          hairColor: "#fffffd",
          birthYear: "1937",
          issueYear: "2017",
          countryId: "147",
          height: "183cm",
        },
        {
          issueYear: "2013",
          eyeColor: "amb",
          countryId: "350",
          expirationYear: "2023",
          passportId: "028048884",
          hairColor: "#cfa07d",
          birthYear: "1929",
        },
        {
          hairColor: "#ae17e1",
          issueYear: "2013",
          expirationYear: "2024",
          eyeColor: "brn",
          passportId: "760753108",
          birthYear: "1931",
          height: "179cm",
        },
        {
          hairColor: "#cfa07d",
          expirationYear: "2025",
          passportId: "166559648",
          issueYear: "2011",
          eyeColor: "brn",
          height: "59in",
        },
      ];

      expect(partOne(passports)).to.equal(2);
    });
  });

  describe("Part 2", function () {
    describe("validators", function () {
      describe("validateBirthYear", function () {
        it("should accept 2002", function () {
          expect(validateBirthYear(2002)).to.be.true;
        });

        it("should reject 2003", function () {
          expect(validateBirthYear(2003)).to.be.false;
        });
      });

      describe("validateIssueYear", function () {
        it("should accept 2010", function () {
          expect(validateIssueYear(2010)).to.be.true;
        });

        it("should reject 2021", function () {
          expect(validateIssueYear(2021)).to.be.false;
        });
      });

      describe("validateHeight", function () {
        it("should accept 69 in", function () {
          expect(validateHeight("69in")).to.be.true;
        });

        it("should accept 190 cm", function () {
          expect(validateHeight("190cm")).to.be.true;
        });

        it("should reject 190 in", function () {
          expect(validateHeight("190in")).to.be.false;
        });

        it("should reject 190 (without units)", function () {
          expect(validateHeight("190")).to.be.false;
        });
      });

      describe("validateHairColor", function () {
        it("should accept #123abc", function () {
          expect(validateHairColor("#123abc")).to.be.true;
        });

        it("should reject #123abcz", function () {
          expect(validateHairColor("#123abcz")).to.be.false;
        });

        it("should reject 123abc (no leading #)", function () {
          expect(validateHairColor("123abc")).to.be.false;
        });
      });

      describe("validateEyeColor", function () {
        it("should accept brn", function () {
          expect(validateEyeColor("brn")).to.be.true;
        });

        it("should reject wat", function () {
          expect(validateEyeColor("wat")).to.be.false;
        });
      });

      describe("validatePassportId", function () {
        it("should accept 000000001", function () {
          expect(validatePassportId("000000001")).to.be.true;
        });

        it("should reject 0123456789", function () {
          expect(validatePassportId("0123456789")).to.be.false;
        });
      });
    });
  });
});
