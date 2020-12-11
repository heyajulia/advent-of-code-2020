export const enum Space {
  Open,
  Tree,
}

export function toSpaceRow(row: string): Space[] {
  const spaces = [];

  for (const space of row) {
    if (space === ".") {
      spaces.push(Space.Open);
    } else {
      spaces.push(Space.Tree);
    }
  }

  return spaces;
}

export function toSpaceArray(input: string[]): Space[][] {
  const spaces = [];

  for (const line of input) {
    spaces.push(toSpaceRow(line));
  }

  return spaces;
}

export const slopes: [number, number][] = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
