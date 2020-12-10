import fs from "fs/promises";
import path from "path";

export default async function readInput<T>(
  day: number,
  convert: (line: string) => T
): Promise<T[]> {
  const fileName = path.join(
    __filename,
    "..",
    "..",
    "..",
    "inputs",
    `${day}.txt`
  );

  const buf = await fs.readFile(fileName);
  const text = buf.toString();
  const input = [];

  for (const line of text.split("\n")) {
    input.push(convert(line));
  }

  return input;
}
