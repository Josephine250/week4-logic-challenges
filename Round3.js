// 13. sumTo
/*
Plan (Loop version):
- Initialize a sum variable to 0.
- Create a loop that starts at 1 and runs up to the given number n.
- On each iteration, add the loop counter to the sum.
- Return the final sum.
Comparison comment:
- The math formula n*(n+1)/2 is O(1) and much more efficient (cleverness).
- However, the loop is immediately readable for beginners tracking state iteration.
*/
function sumTo(n) {
  if (n <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i;
  return sum; 
}
console.log(sumTo(4));  // 10
console.log(sumTo(10)); // 55
console.log(sumTo(0));  // edge case: 0

// 14. isPrime
/*
Plan:
- If the number is 1 or less, return false immediately.
- Start a loop at 2 and run it up to the square root of the number.
- Inside the loop, check if the number modulo the loop counter equals 0.
- If it does, the number is not prime, return false.
- If the loop finishes without finding divisors, return true.
*/
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(-5)); // edge case: false

// 15. printPyramid
/*
Plan:
- Guard clause: return an error message if rows is 0 or negative.
- Loop from 1 up to the target number of rows.
- Calculate the needed spaces per row using (total rows - current row).
- Calculate the needed stars per row using (2 * current row - 1).
- Append the spaces, stars, and a newline character to a master string, and return it.
*/
function printPyramid(rows) {
  if (rows <= 0) return "No rows";
  let pyramid = "";
  for (let i = 1; i <= rows; i++) {
    const spaces = " ".repeat(rows - i);
    const stars = "*".repeat(2 * i - 1);
    pyramid += spaces + stars + "\n";
  }
  return pyramid;
}
console.log(printPyramid(4)); 
console.log(printPyramid(2)); 
console.log(printPyramid(0)); // edge case: "No rows"

// 16. fibonacci
/*
Plan:
- Initialize an array with the first two Fibonacci numbers: [0, 1].
- Check for edge cases (n <= 0 returns empty string, n = 1 returns "0").
- Create a loop starting at index 2 up to n.
- In each iteration, calculate the next number by adding the two preceding array elements and push it to the array.
- Join the array into a comma-separated string and return it.
*/
function fibonacci(n) {
  if (n <= 0) return "";
  if (n === 1) return "0";
  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.join(", ");
}
console.log(fibonacci(8)); // 0, 1, 1, 2, 3, 5, 8, 13
console.log(fibonacci(2)); // 0, 1
console.log(fibonacci(0)); // edge case: ""

// 17. guessingGameSimulator
/*
Plan:
- Set up a minimum boundary (1), a maximum boundary (100), and a guess counter (0).
- Run a while loop that continues as long as min is less than or equal to max.
- Inside the loop, calculate the middle point by taking Math.floor of (min + max) / 2.
- Increment the guess counter and log the guess.
- If the guess matches the secret, return the guess count.
- If the guess is too low, update the minimum bound to guess + 1; if too high, update maximum bound to guess - 1.
*/
function guessingGameSimulator(secret) {
  if (secret < 1 || secret > 100) return "Out of range";
  let min = 1, max = 100, count = 0, guess = 0;
  while (min <= max) {
    count++;
    guess = Math.floor((min + max) / 2);
    console.log(`Guess ${count}: ${guess}`);
    if (guess === secret) return count;
    if (guess < secret) min = guess + 1;
    else max = guess - 1;
  }
}
console.log("Total:", guessingGameSimulator(73));
console.log("Total:", guessingGameSimulator(50));
console.log(guessingGameSimulator(0)); // edge case: Out of range