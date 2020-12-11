import countValidPasswords, { BasePassword } from "./common";

export interface Password extends BasePassword {
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

export default function partOne(passwords: Password[]): number {
  return countValidPasswords(passwords, (pass) => {
    const { password, letter, min, max } = pass;
    const count = countLetterInString(letter, password);

    return count >= min && count <= max;
  });
}
