export interface Password {
  password: string;
  letter: string;
  min: number;
  max: number;
}

function countLetterInString(letter: string, s: string): number {
  let occurrences = 0;

  for (const char of s) {
    if (char === letter) {
      occurrences++;
    }
  }

  return occurrences;
}

function isValidPassword(pass: Password): boolean {
  const { letter, min, max, password } = pass;
  const count = countLetterInString(letter, password);

  return count >= min && count <= max;
}

export default function partOne(passwords: Password[]): number {
  let validPasswords = 0;

  for (const pass of passwords) {
    if (isValidPassword(pass)) {
      validPasswords++;
    }
  }

  return validPasswords;
}
