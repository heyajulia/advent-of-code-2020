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

export class Forest {
  private x = 0;
  private y = 0;

  private spaces: Space[][];
  private forestHeight: number;
  private inputWidth: number; // The *forest* is infinitely wide.

  public constructor(spaces: Space[][]) {
    this.forestHeight = spaces.length;
    this.inputWidth = spaces[0].length;
    this.spaces = spaces;
  }

  private getSpace(x: number, y: number): Space | null {
    if (y >= this.forestHeight) {
      return null;
    }

    return this.spaces[y][x % this.inputWidth];
  }

  public countTrees(): number {
    let trees = 0;
    let space;

    while (space !== null) {
      this.x += 3;
      this.y++;

      space = this.getSpace(this.x, this.y);

      if (space === Space.Tree) {
        trees++;
      }
    }

    return trees;
  }
}

export default function partOne(forest: Forest): number {
  return forest.countTrees();
}
