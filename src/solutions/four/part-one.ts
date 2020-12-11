import Passport from "./common";
import { validatePassports, validateEveryFieldPresent } from "./validators";

export default function partOne(passports: Partial<Passport>[]): number {
  return validatePassports(passports, validateEveryFieldPresent);
}
