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