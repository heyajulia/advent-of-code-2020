import Passport from "./Passport";

function isValidPassport(passport: Partial<Passport>): boolean {
  const {
    birthYear,
    issueYear,
    expirationYear,
    height,
    hairColor,
    eyeColor,
    passportId,
  } = passport;

  // Every field needs to be present, except countryId.
  return ((birthYear &&
    issueYear &&
    expirationYear &&
    height &&
    hairColor &&
    eyeColor &&
    passportId) as unknown) as boolean;
}

export default function partOne(passports: Partial<Passport>[]): number {
  let validPassports = 0;

  for (const passport of passports) {
    if (isValidPassport(passport)) {
      validPassports++;
    }
  }

  return validPassports;
}
