import fs from "fs/promises";
import path from "path";

export interface ReadInputOptions {
  /**
   * The delimiter to split the file on. `\n` by default.
   */
  delimiter?: string;
}

/**
 * Reads the input file for the given day.
 *
 * @param day The day
 * @param transform A function that transforms a line input from its to a
 * runtime representation. If `transform` returns `null`, that particular line
 * is silently dropped.
 * @param options Options. See `ReadInputOptions` for details.
 *
 * @example
 *
 * // Read the input for day 1.
 * const dayOneInput = await readInput(1, (line) => parseInt(line, 10));
 */
export default async function readInput<T>(
  day: number,
  transform: (line: string) => T | null,
  options: ReadInputOptions = {}
): Promise<T[]> {
  const delimiter = options.delimiter ?? "\n";

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

  for (const line of text.split(delimiter)) {
    const transformed = transform(line);

    if (transformed !== null) {
      input.push(transformed);
    }
  }

  return input;
}
