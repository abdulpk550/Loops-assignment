// 1. Log fruits
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// 2. Add colors to paragraph
const colors = ["red", "green", "blue"];
let colorOutput = "";
for (let color of colors) {
    colorOutput += color + " ";
}
document.querySelector("#output").textContent = colorOutput.trim();

// 3. Print 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4. Print 5 to 1
let num = 5;
while (num >= 1) {
    console.log(num);
    num--;
}

// 5. Show names with commas
const names = ["Ali", "Sara", "Ahmed"];
document.querySelector("#names").textContent = names.join(", ");

// 6. Change status text
document.querySelector("#status").textContent = "Loading...";

// 7. Sum of numbers
const numbers = [5, 10, 15];
let sum = 0;
for (let number of numbers) {
    sum += number;
}
document.querySelector("#sum").textContent = sum;

// 8. Display cities
const cities = ["Karachi", "Lahore", "Quetta"];
document.querySelector("#cities").textContent = cities.join(", ");

// 9. Even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

// 10. Find largest number
const nums = [45, 22, 89, 100];
let max = nums[0];
for (let n of nums) {
    if (n > max) max = n;
}
document.querySelector("#max").textContent = max;

// 11. Change result text
document.querySelector("#result").textContent = "Task Complete";

// 12. Average temperature
const temps = [30, 35, 32, 40];
let totalTemp = 0;
for (let t of temps) totalTemp += t;
let avgTemp = totalTemp / temps.length;
document.querySelector("#averageTemp").textContent = avgTemp;

// 13. Sum 1 to 100
let totalSum = 0;
for (let i = 1; i <= 100; i++) totalSum += i;
document.querySelector("#totalSum").textContent = totalSum;

// 14. Print animals
const animals = ["dog", "cat", "bird"];
document.querySelector("#animals").textContent = animals.join(", ");

// 15. Change title text
document.querySelector("#title").textContent = "Welcome to JavaScript!";

// 16. Divisible by 5 from 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) console.log(i);
}

// 17. Scores above 75
const scores = [80, 60, 90, 70];
let highCount = 0;
for (let score of scores) {
    if (score > 75) highCount++;
}
document.querySelector("#highScores").textContent = highCount;

// 18. Update message text
document.querySelector("#message").textContent = "Updated successfully";

// 19. Show subjects
const subjects = ["Math", "Science", "English"];
document.querySelector("#subjectsList").textContent = subjects.join(", ");

// 20. Count down from 10 to 1
let countStr = "";
for (let i = 10; i >= 1; i--) countStr += i + " ";
console.log(countStr.trim());

// Sum of [5, 10, 15, 20]
const data = [5, 10, 15, 20];
let sum2 = 0;
for (let x of data) sum2 += x;
console.log(sum2);

// 21. Largest in array
const arr1 = [45, 67, 12, 89, 34];
let max1 = arr1[0];
for (let val of arr1) if (val > max1) max1 = val;
console.log(max1);

// 22. Count even numbers
const arr2 = [3, 8, 6, 1, 9, 2];
let evenCount = 0;
for (let v of arr2) if (v % 2 === 0) evenCount++;
console.log(evenCount);

// 23. Average of numbers
const arr3 = [20, 30, 40, 50];
let total3 = 0;
for (let x of arr3) total3 += x;
console.log(total3 / arr3.length);

// 24. Multiply by 3
const arr4 = [2, 4, 6, 8, 10];
const tripled = [];
for (let num of arr4) tripled.push(num * 3);
console.log(tripled);

// 25. Elements greater than 4
const arr5 = [1, 3, 5, 7, 9];
let countGreater = 0;
for (let x of arr5) if (x > 4) countGreater++;
console.log(countGreater);

// 26. Sum divisible by 5
const arr6 = [10, 15, 20, 25, 30];
let sumDiv5 = 0;
for (let x of arr6) if (x % 5 === 0) sumDiv5 += x;
console.log(sumDiv5);

// 27. Check if 25 exists
const arr7 = [10, 20, 30, 40, 25];
let found = false;
for (let x of arr7) if (x === 25) found = true;
console.log(found);

// 28. Sum of two arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const resultArr = [];
for (let i = 0; i < a1.length; i++) resultArr.push(a1[i] + a2[i]);
console.log(resultArr);

// 29. Second largest
const arr8 = [10, 99, 23, 87, 56];
let first = -Infinity, second = -Infinity;
for (let x of arr8) {
    if (x > first) {
        second = first;
        first = x;
    } else if (x > second && x !== first) {
        second = x;
    }
}
console.log(second);

// 30. Reverse array
const original = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = original.length - 1; i >= 0; i--) reversed.push(original[i]);
console.log(reversed);

// 31. Prime numbers from 1 to 50
for (let i = 2; i <= 50; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(i);
}

// 32. Difference between max and min
const arr9 = [11, 4, 99, 2, 47];
let maxVal = arr9[0], minVal = arr9[0];
for (let x of arr9) {
    if (x > maxVal) maxVal = x;
    if (x < minVal) minVal = x;
}
console.log(maxVal - minVal);

// 33. Count negative numbers
const arr10 = [0, -1, -5, 6, 8, -3];
let negCount = 0;
for (let x of arr10) if (x < 0) negCount++;
console.log(negCount);

// 34. New array with only odd numbers
const arr11 = [1, 2, 3, 4, 5, 6];
const oddArr = [];
for (let x of arr11) if (x % 2 !== 0) oddArr.push(x);
console.log(oddArr);

// 35. Remove zeroes
const arr12 = [0, 1, 0, 3, 0, 5];
const noZeros = [];
for (let x of arr12) if (x !== 0) noZeros.push(x);
console.log(noZeros);

// 36. Swap first and last
const arr13 = [1, 2, 3, 4, 5, 6];
let temp = arr13[0];
arr13[0] = arr13[arr13.length - 1];
arr13[arr13.length - 1] = temp;
console.log(arr13);

// 37. Check if all even
const arr14 = [2, 4, 6, 8];
let allEven = true;
for (let x of arr14) if (x % 2 !== 0) allEven = false;
console.log(allEven);

// 38. Count >= average
const arr15 = [5, 10, 15, 20, 25];
let total15 = 0;
for (let x of arr15) total15 += x;
let avg15 = total15 / arr15.length;
let countAbove = 0;
for (let x of arr15) if (x >= avg15) countAbove++;
console.log(countAbove);

// 39. Check if all elements equal
const arr16 = [2, 2, 2, 2, 2];
let allEqual = true;
for (let i = 1; i < arr16.length; i++) {
    if (arr16[i] !== arr16[0]) {
        allEqual = false;
        break;
    }
}
console.log(allEqual);
