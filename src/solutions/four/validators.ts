import Passport from "./common";

function inRange(min: number, max: number): (value: number) => boolean {
  return (value) => value >= min && value <= max;
}

export const validateBirthYear = inRange(1920, 2002);

export const validateIssueYear = inRange(2010, 2020);

export const validateExpirationYear = inRange(2020, 2030);

export function validateHeight(s: string): boolean {
  const acceptableHeight = {
    cm: {
      min: 150,
      max: 193,
    },
    in: {
      min: 59,
      max: 76,
    },
  };

  const heightRegex = /^(?<height>\d+)(?<unit>cm|in)$/;
  const match = s.match(heightRegex);

  if (match === null) {
    return false;
  }

  let [, height, unit] = match as [unknown, string | number, "cm" | "in"];
  height = parseInt(height as string, 10);
  const { min, max } = acceptableHeight[unit];

  return height >= min && height <= max;
}

export function validateHairColor(hairColor: string): boolean {
  return /^#[0-9a-f]{6}$/.test(hairColor);
}

export function validateEyeColor(eyeColor: string): boolean {
  const eyecolors = "amb blu brn gry grn hzl oth".split(" ");

  return eyecolors.includes(eyeColor);
}

export function validatePassportId(passportId: string): boolean {
  return /^\d{9}$/.test(passportId);
}

export function validateEveryFieldPresent(
  passport: Partial<Passport>
): boolean {
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

export function validatePassports(
  passports: Partial<Passport>[],
  validator: (passport: Partial<Passport>) => boolean
): number {
  let validPassports = 0;

  for (const passport of passports) {
    if (validator(passport)) {
      validPassports++;
    }
  }

  return validPassports;
}
