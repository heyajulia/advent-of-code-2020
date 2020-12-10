export default function partOne(expenseReport: number[]): number {
  let a = 0;
  let b = 0;

  for (const expenseA of expenseReport) {
    for (const expenseB of expenseReport) {
      if (expenseA + expenseB === 2020) {
        a = expenseA;
        b = expenseB;
      }
    }
  }

  return a * b;
}
