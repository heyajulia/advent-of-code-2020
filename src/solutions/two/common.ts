export interface BasePassword {
  password: string;
  letter: string;
}

export default function countValidPasswords<T extends BasePassword>(
  passwords: T[],
  validate: (pass: T) => boolean
): number {
  let validPasswords = 0;

  for (const password of passwords) {
    if (validate(password)) {
      validPasswords++;
    }
  }

  return validPasswords;
}
