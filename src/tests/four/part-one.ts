import { expect } from "chai";
import partOne from "../../solutions/four/part-one";
import Passport from "../../solutions/four/common";

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
});
