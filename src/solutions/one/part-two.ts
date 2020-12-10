export default function partTwo(expenseReport: number[]): number {
  let a = 0;
  let b = 0;
  let c = 0;

  for (const expenseA of expenseReport) {
    for (const expenseB of expenseReport) {
      for (const expenseC of expenseReport) {
        if (expenseA + expenseB + expenseC === 2020) {
          a = expenseA;
          b = expenseB;
          c = expenseC;
        }
      }
    }
  }

  return a * b * c;
}
