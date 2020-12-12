export type BagColor = string;

export interface Bags {
  [color: string]: BagColor[];
}

export type Foo = {
  [color: string]: [number, BagColor][];
};
