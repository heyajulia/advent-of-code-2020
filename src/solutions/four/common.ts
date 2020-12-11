// I'm sure more specific types are possible, but the "database" is a mess
// (likely intentionally).
export default interface Passport {
  birthYear: string;
  issueYear: string;
  expirationYear: string;
  height: string;
  hairColor: string;
  eyeColor: string;
  passportId: string;
  countryId?: string;
}

function dbKeyToObjectKey(dbKey: string): string {
  const keys = {
    byr: "birthYear",
    iyr: "issueYear",
    eyr: "expirationYear",
    hgt: "height",
    hcl: "hairColor",
    ecl: "eyeColor",
    pid: "passportId",
    cid: "countryId",
  };

  return (keys as any)[dbKey];
}

export function parsePassport(line: string): Partial<Passport> {
  const obj: any = {};
  const keyValues = line.split(/\s+/);

  for (const keyValue of keyValues) {
    const [key, value] = keyValue.split(":");

    obj[dbKeyToObjectKey(key)] = value;
  }

  return obj as Partial<Passport>;
}
