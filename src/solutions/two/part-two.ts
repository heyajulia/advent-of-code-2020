import countValidPasswords, { BasePassword } from "./common";

export interface Password extends BasePassword {
  posA: number;
  posB: number;
}

export default function partTwo(passwords: Password[]): number {
  return countValidPasswords(passwords, (pass) => {
    const { password, letter, posA, posB } = pass;

    const a = password[posA - 1] === letter;
    const b = password[posB - 1] === letter;

    return (a || b) && !(a && b);
  });
}
