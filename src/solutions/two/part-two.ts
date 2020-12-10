export interface Password {
  password: string;
  letter: string;
  posA: number;
  posB: number;
}

function isValidPassword(pass: Password): boolean {
  const { password, letter, posA, posB } = pass;

  const a = password[posA - 1] === letter;
  const b = password[posB - 1] === letter;

  return (a || b) && !(a && b);
}

export default function partTwo(passwords: Password[]): number {
  let validPasswords = 0;

  for (const pass of passwords) {
    if (isValidPassword(pass)) {
      validPasswords++;
    }
  }

  return validPasswords;
}
