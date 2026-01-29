/**
 * Generates the Fibonacci sequence up to n terms
 * Perfect for Agile estimation scales (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...)
 *
 * @param n - Number of terms to generate
 * @returns Array containing the Fibonacci sequence
 */

function generateFibonacciSequence(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const fibonacci = [0, 1];
  Array.from({ length: n - 2 }, (_, i) => i + 2).forEach((i) => {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  });
  return fibonacci;
}

console.log(generateFibonacciSequence(12));
// Output [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
