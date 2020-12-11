import { Space } from "./common";

export class Forest {
  private x = 0;
  private y = 0;

  private spaces: Space[][];

  private slopeX: number;
  private slopeY: number;

  private forestHeight: number;
  private inputWidth: number; // The *forest* is infinitely wide.

  public constructor(
    spaces: Space[][],
    [slopeX, slopeY]: [number, number] = [3, 1]
  ) {
    this.spaces = spaces;

    this.slopeX = slopeX;
    this.slopeY = slopeY;

    this.forestHeight = spaces.length;
    this.inputWidth = spaces[0].length;
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
      this.x += this.slopeX;
      this.y += this.slopeY;

      space = this.getSpace(this.x, this.y);

      if (space === Space.Tree) {
        trees++;
      }
    }

    return trees;
  }
}
