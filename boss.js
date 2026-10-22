// 18. validatePassword
/*
Plan:
- Initialize an empty array to collect error messages.
- Test the password against six distinct rules using string properties and regex (length >= 8, contains uppercase, contains lowercase, contains digit, contains special character, contains no spaces).
- If any rule fails its test, push a clear, readable error string to the array.
- Return an object containing a valid boolean (true if errors array is empty) and the errors array itself.
*/
function validatePassword(pw) {
  const errors = [];
  if (pw.length < 8) errors.push("Needs at least 8 characters");
  if (!/[A-Z]/.test(pw)) errors.push("Needs one uppercase letter");
  if (!/[a-z]/.test(pw)) errors.push("Needs one lowercase letter");
  if (!/[0-9]/.test(pw)) errors.push("Needs one digit");
  if (!/[!@#$%^&*]/.test(pw)) errors.push("Needs one special character");
  if (/\s/.test(pw)) errors.push("Cannot contain spaces");
  return { valid: errors.length === 0, errors };
}
console.log(validatePassword("SecureP@ss1")); // { valid: true, errors: [] }
console.log(validatePassword("weak 123"));    // { valid: false, errors: [...] }
console.log(validatePassword(""));            // edge case: all errors triggered

// 19. romanNumeral
/*
Plan:
- Define parallel arrays that map integer thresholds (like 1000, 900, 500) to their Roman numeral strings (like "M", "CM", "D") in descending order.
- Loop through the integer thresholds array.
- Run a while loop that checks if the input number is greater than or equal to the current threshold value.
- Subtract the value from the input number, and append the matching Roman numeral string to the result.
Comparison comment:
- Iterating over parallel lookup arrays (readability/cleverness) is far cleaner and more scalable than writing a massive block of if-else or switch statements for Roman numerals.
*/
function romanNumeral(n) {
  if (n < 1 || n > 3999) return "Invalid";
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = "";
  for (let i = 0; i < val.length; i++) {
    while (n >= val[i]) {
      result += rom[i];
      n -= val[i];
    }
  }
  return result;
}
console.log(romanNumeral(1994)); // MCMXCIV
console.log(romanNumeral(3));    // III
console.log(romanNumeral(0));    // edge case: Invalid

// 20. nationalIdCheck
/*
Plan:
- Ensure the ID length is exactly 16 and consists only of digits using regex.
- Check that the first digit is '1'.
- Extract digits at indices 1 through 4 using slice and parse them as an integer to get the birth year.
- Verify the extracted year falls between 1900 and the current calendar year.
- Check that the digit at index 5 is either a '7' or an '8'.
- Return true if all checks pass, otherwise return a specific string explaining which check failed.
*/
function nationalIdCheck(id) {
  if (id.length !== 16 || !/^\d+$/.test(id)) return "ID must be exactly 16 digits.";
  if (id[0] !== '1') return "First digit must be 1.";
  const year = parseInt(id.slice(1, 5), 10);
  const currentYear = new Date().getFullYear();
  if (year < 1900 || year > currentYear) return `Birth year must be between 1900 and ${currentYear}.`;
  if (id[5] !== '7' && id[5] !== '8') return "6th digit must be 7 or 8.";
  return true;
}
console.log(nationalIdCheck("1199570000000000")); // true
console.log(nationalIdCheck("2199570000000000")); // First digit must be 1.
console.log(nationalIdCheck("1189970000000000")); // edge case: Birth year out of bounds