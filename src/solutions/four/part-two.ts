import Passport from "./common";
import {
  validateBirthYear,
  validateEveryFieldPresent,
  validateExpirationYear,
  validateEyeColor,
  validateHairColor,
  validateHeight,
  validateIssueYear,
  validatePassportId,
  validatePassports,
} from "./validators";

function toInt(s: string): number {
  return parseInt(s, 10);
}

function validateFields(passport: Passport): boolean {
  const {
    birthYear,
    issueYear,
    expirationYear,
    height,
    hairColor,
    eyeColor,
    passportId,
  } = passport;

  return (
    validateBirthYear(toInt(birthYear)) &&
    validateIssueYear(toInt(issueYear)) &&
    validateExpirationYear(toInt(expirationYear)) &&
    validateHeight(height) &&
    validateHairColor(hairColor) &&
    validateEyeColor(eyeColor) &&
    validatePassportId(passportId)
  );
}

export default function partTwo(passports: Partial<Passport>[]): number {
  return validatePassports(passports, (passport) => {
    return (
      validateEveryFieldPresent(passport) &&
      validateFields(passport as Passport)
    );
  });
}
