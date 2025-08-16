// 1
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 2
const colors = ["red", "green", "blue"];
let colorOutput = "";
for (let i = 0; i < colors.length; i++) {
    colorOutput += colors[i] + " ";
}
document.querySelector("#output").textContent = colorOutput.trim();

//3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4
let num = 5;
while (num >= 1) {
    console.log(num);
    num--;
}

// 5
const names = ["Ali", "Sara", "Ahmed"];
let namesStr = "";
for (let i = 0; i < names.length; i++) {
    namesStr += names[i];
    if (i < names.length - 1) namesStr += ", ";
}
document.querySelector("#names").textContent = namesStr;

// 6
document.querySelector("#status").textContent = "Loading...";

// 7
const numbers = [5, 10, 15];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
document.querySelector("#sum").textContent = sum;

// 8
const cities = ["Karachi", "Lahore", "Quetta"];
let cityStr = "";
for (let i = 0; i < cities.length; i++) {
    cityStr += cities[i];
    if (i < cities.length - 1) cityStr += ", ";
}
document.querySelector("#cities").textContent = cityStr;

// 9
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

// 10
const nums = [45, 22, 89, 100];
let max = nums[0];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
}
document.querySelector("#max").textContent = max;

// 11
document.querySelector("#result").textContent = "Task Complete";

// 12
const temps = [30, 35, 32, 40];
let totalTemp = 0;
for (let i = 0; i < temps.length; i++) {
    totalTemp += temps[i];
}
let avgTemp = totalTemp / temps.length;
document.querySelector("#averageTemp").textContent = avgTemp;

// 13
let totalSum = 0;
for (let i = 1; i <= 100; i++) {
    totalSum += i;
}
document.querySelector("#totalSum").textContent = totalSum;

// 14
const animals = ["dog", "cat", "bird"];
let animalStr = "";
for (let i = 0; i < animals.length; i++) {
    animalStr += animals[i];
    if (i < animals.length - 1) animalStr += ", ";
}
document.querySelector("#animals").textContent = animalStr;

// 15
document.querySelector("#title").textContent = "Welcome to JavaScript!";

// 16
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) console.log(i);
}

// 17
const scores = [80, 60, 90, 70];
let highCount = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 75) highCount++;
}
document.querySelector("#highScores").textContent = highCount;

// 18
document.querySelector("#message").textContent = "Updated successfully";

// 19
const subjects = ["Math", "Science", "English"];
let subjectStr = "";
for (let i = 0; i < subjects.length; i++) {
    subjectStr += subjects[i];
    if (i < subjects.length - 1) subjectStr += ", ";
}
document.querySelector("#subjectsList").textContent = subjectStr;

// 20
let countStr = "";
for (let i = 10; i >= 1; i--) {
    countStr += i + " ";
}
console.log(countStr.trim());

// 21
const arr1 = [45, 67, 12, 89, 34];
let max1 = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max1) max1 = arr1[i];
}
console.log(max1);

// 22
const arr2 = [3, 8, 6, 1, 9, 2];
let evenCount = 0;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) evenCount++;
}
console.log(evenCount);

// 23
const arr3 = [20, 30, 40, 50];
let total3 = 0;
for (let i = 0; i < arr3.length; i++) {
    total3 += arr3[i];
}
console.log(total3 / arr3.length);

// 24
const arr4 = [2, 4, 6, 8, 10];
const tripled = [];
for (let i = 0; i < arr4.length; i++) {
    tripled.push(arr4[i] * 3);
}
console.log(tripled);

// 25
const arr5 = [1, 3, 5, 7, 9];
let countGreater = 0;
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] > 4) countGreater++;
}
console.log(countGreater);

// 26
const arr6 = [10, 15, 20, 25, 30];
let sumDiv5 = 0;
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] % 5 === 0) sumDiv5 += arr6[i];
}
console.log(sumDiv5);

// 27
const arr7 = [10, 20, 30, 40, 25];
let found = false;
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] === 25) {
        found = true;
        break;
    }
}
console.log(found);

// 28
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const resultArr = [];
for (let i = 0; i < a1.length; i++) {
    resultArr.push(a1[i] + a2[i]);
}
console.log(resultArr);

// 29
const arr8 = [10, 99, 23, 87, 56];
let first = -Infinity, second = -Infinity;
for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] > first) {
        second = first;
        first = arr8[i];
    } else if (arr8[i] > second && arr8[i] !== first) {
        second = arr8[i];
    }
}
console.log(second);

// 30
const original = [1, 2, 3, 4, 5];
const reversed = [];
for (let i = original.length - 1; i >= 0; i--) {
    reversed.push(original[i]);
}
console.log(reversed);

// 31
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

// 32
const arr9 = [11, 4, 99, 2, 47];
let maxVal = arr9[0], minVal = arr9[0];
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] > maxVal) maxVal = arr9[i];
    if (arr9[i] < minVal) minVal = arr9[i];
}
console.log(maxVal - minVal);

// 33
const arr10 = [0, -1, -5, 6, 8, -3];
let negCount = 0;
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] < 0) negCount++;
}
console.log(negCount);

// 34
const arr11 = [1, 2, 3, 4, 5, 6];
const oddArr = [];
for (let i = 0; i < arr11.length; i++) {
    if (arr11[i] % 2 !== 0) oddArr.push(arr11[i]);
}
console.log(oddArr);

// 35
const arr12 = [0, 1, 0, 3, 0, 5];
const noZeros = [];
for (let i = 0; i < arr12.length; i++) {
    if (arr12[i] !== 0) noZeros.push(arr12[i]);
}
console.log(noZeros);

// 36
const arr13 = [1, 2, 3, 4, 5, 6];
let temp = arr13[0];
arr13[0] = arr13[arr13.length - 1];
arr13[arr13.length - 1] = temp;
console.log(arr13);

// 37
const arr14 = [2, 4, 6, 8];
let allEven = true;
for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] % 2 !== 0) {
        allEven = false;
        break;
    }
}
console.log(allEven);

// 38
const arr15 = [5, 10, 15, 20, 25];
let total15 = 0;
for (let i = 0; i < arr15.length; i++) {
    total15 += arr15[i];
}
let avg15 = total15 / arr15.length;
let countAbove = 0;
for (let i = 0; i < arr15.length; i++) {
    if (arr15[i] >= avg15) countAbove++;
}
console.log(countAbove);

// 39
const arr16 = [2, 2, 2, 2, 2];
let allEqual = true;
for (let i = 1; i < arr16.length; i++) {
    if (arr16[i] !== arr16[0]) {
        allEqual = false;
        break;
    }
}
console.log(allEqual);
