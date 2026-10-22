// 6. reverseString
/*
Plan:
- Initialize an empty string variable to hold the reversed word.
- Start a loop from the last index of the input string down to 0.
- In each iteration, append the character at the current index to the new string.
- Return the fully constructed reversed string.
*/
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("Kigali")); // ilagiK
console.log(reverseString("abc"));    // cba
console.log(reverseString(""));       // edge case: ""

// 7. countChar
/*
Plan:
- Initialize a counter variable starting at 0.
- Convert both the input string and the target character to lowercase to ensure case-insensitivity.
- Loop through each character of the string.
- If the current character matches the target character, increment the counter.
- Return the final count.
*/
function countChar(str, char) {
  let count = 0;
  const lowerStr = str.toLowerCase();
  const lowerChar = char.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === lowerChar) count++;
  }
  return count;
}
console.log(countChar("Apple", "P")); // 2
console.log(countChar("Hello", "z")); // 0
console.log(countChar("", "a"));      // edge case: 0

// 8. isPalindrome
/*
Plan:
- Convert the string to lowercase and use a regular expression to strip out all non-alphanumeric characters.
- If the cleaned string is empty, return true (edge case handling).
- Loop through the first half of the string.
- Compare each character with its counterpart from the end of the string.
- If a mismatch is found, return false immediately; otherwise, return true after the loop.
*/
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (cleaned.length === 0) return true; // edge case: empty or only punctuation
  for (let i = 0; i < Math.floor(cleaned.length / 2); i++) {
    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) return false;
  }
  return true;
}
console.log(isPalindrome("Never odd or even")); // true
console.log(isPalindrome("hello"));             // false
console.log(isPalindrome("   "));               // edge case: true

// 9. titleCase
/*
Plan:
- Split the input string into an array of words separated by spaces.
- Initialize an empty result string.
- Loop through the array of words.
- For each word, capitalize the first letter and convert the rest of the string to lowercase.
- Add a space between words and return the final joined string.
*/
function titleCase(str) {
  if (str.length === 0) return "";
  const words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      if (i < words.length - 1) result += " ";
    }
  }
  return result;
}
console.log(titleCase("welcome to kigali tech hub")); // Welcome To Kigali Tech Hub
console.log(titleCase("a")); // A
console.log(titleCase("")); // edge case: ""

// 10. maskPhone
/*
Plan:
- Verify that the input is a string, is exactly 10 characters long, and starts with "07".
- If any condition fails, return the string "Invalid".
- Use the slice method to grab the first 3 characters.
- Add "****" to represent the masked middle section.
- Use slice again to grab the final 3 characters and return the combined string.
*/
function maskPhone(phone) {
  if (typeof phone !== "string" || phone.length !== 10 || !phone.startsWith("07")) {
    return "Invalid";
  }
  return phone.slice(0, 3) + "****" + phone.slice(7);
}
console.log(maskPhone("0788123456")); // 078****456
console.log(maskPhone("0712345"));    // Invalid
console.log(maskPhone(""));           // edge case: Invalid

// 11. longestWord
/*
Plan:
- Use a regular expression to extract an array of words from the sentence, ignoring punctuation.
- Initialize an empty string to store the longest word found.
- Loop through the array of extracted words.
- If the current word's length is greater than the longest word's length, update the longest word variable.
- Return the longest word found.
*/
function longestWord(sentence) {
  const words = sentence.match(/[a-zA-Z0-9]+/g) || [];
  if (words.length === 0) return "";
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i];
  }
  return longest;
}
console.log(longestWord("I love programming")); // programming
console.log(longestWord("A cat"));              // cat
console.log(longestWord(""));                   // edge case: ""

// 12. compress
/*
Plan:
- Set up a result string and a counter variable initialized to 1.
- Loop through the characters in the input string.
- If the current character is identical to the next character, increment the counter.
- If they differ, append the current character and the current count to the result string, then reset the counter to 1.
- Return the final compressed string.
*/
function compress(str) {
  if (!str) return "";
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
}
console.log(compress("aaabccdddd")); // a3b1c2d4
console.log(compress("a"));          // a1
console.log(compress(""));           // edge case: ""