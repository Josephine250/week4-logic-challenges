// 1. isleap year 
// input year 
//if year% 4 return true and year% 100 return false
//if year % 100 return rezo 
//return false 
//this is leap year 
//otherwise is not leap year 
function isleap(year){
        if(year %400 == 0) return true
        if (year% 100 == 0) return false
        return year%4== 0 
}
console.log(isleap(2024))
console.log(isleap(2025))
console.log(isleap(2019))
//2. get BMI category
//if height <= 0
// return invalid message
//calculate BMI as weight/height^2%



// 1. isLeapYear
/*
Plan:
- Check if the year is divisible by 400; if so, return true.
- Check if the year is divisible by 100; if so, return false.
- Check if the year is divisible by 4; if so, return true.
- Otherwise, return false.
*/
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(-4));   // edge case: true (proleptic Gregorian)

// 2. getBMICategory
/*
Plan:
- Check if height <= 0 and return an invalid message if true.
- Calculate BMI by dividing weight by (height * height).
- Compare BMI against standard thresholds (< 18.5, < 25, < 30).
- Return the corresponding category string based on the checks.
*/
function getBMICategory(weightKg, heightM) {
  if (heightM <= 0) return "Invalid height";
  const bmi = weightKg / (heightM * heightM);
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}
console.log(getBMICategory(70, 1.75)); // Normal
console.log(getBMICategory(90, 1.75)); // Overweight
console.log(getBMICategory(70, 0));    // edge case: Invalid height

// 3. motoFare
/*
Plan:
- Return 0 immediately if km is less than or equal to 0.
- Round up the km distance using Math.ceil.
- If the rounded km is 2 or less, return the base fare of 300.
- Else, calculate extra distance (km - 2), multiply by 107, and add to base fare.
*/
function motoFare(km) {
  if (km <= 0) return 0;
  const roundedKm = Math.ceil(km);
  if (roundedKm <= 2) return 300;
  return 300 + (roundedKm - 2) * 107;
}
console.log(motoFare(2));   // 300
console.log(motoFare(2.1)); // 407
console.log(motoFare(0));   // edge case: 0

// 4. convertSeconds
/*
Plan:
- Calculate hours by dividing total seconds by 3600 and rounding down.
- Calculate minutes by taking the remainder of 3600, dividing by 60, and rounding down.
- Calculate seconds by taking the remainder of total seconds divided by 60.
- Convert minutes and seconds to strings, pad them with a leading zero if needed, and return the formatted string.
*/
function convertSeconds(total) {
  if (total < 0) return "0h 00m 00s"; // edge case
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return `${h}h ${String(m).padStart(2, '0')}m ${String(s).padStart(2, '0')}s`;
}
console.log(convertSeconds(7385)); // 2h 03m 05s
console.log(convertSeconds(61));   // 0h 01m 01s
console.log(convertSeconds(-10));  // edge case: 0h 00m 00s

// 5. changeMaker
/*
Plan:
- Create an array of note and coin denominations sorted from highest to lowest.
- Initialize an empty result string.
- Loop through each denomination in the array.
- If the remaining amount is greater than or equal to the note, calculate how many fit.
- Update the remaining amount and append the count and note value to the result string.
*/
function changeMaker(amount) {
  if (amount <= 0) return "No change";
  const notes = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];
  let result = "";
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    if (amount >= note) {
      const count = Math.floor(amount / note);
      result += `${count}x${note}, `;
      amount %= note;
    }
  }
  return result.slice(0, -2);
}
console.log(changeMaker(7385)); // 1x5000, 1x2000, 3x100...
console.log(changeMaker(50));   // 1x50
console.log(changeMaker(0));    // edge case: No change