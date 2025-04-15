const numArray = [1, 2, 3, 4, 5, 13];

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}

for (const num of numArray) {
    console.log(num);
}

const numArray2 = Array(5).fill("+10");
console.log(numArray2);

const numArray3 = numArray.filter(num => num % 2 === 0);
console.log(numArray3);

const numArray4 = [10, 20, 51, 30, 21, 52];
console.log(numArray4.findIndex(num => num > 50));

const numArray5 = [10, 20, 30, 40, 100];
const numArray6 = [10, 20, 30, 40, 50];
console.log("Тут есть 100? - ",numArray5.some(num => num === 100));
console.log("Тут есть 100? - ",numArray6.some(num => num === 100));

const numArray7 = [23, 10, 30, 1, 12];
numArray7.sort((a, b) => a - b);
console.log(numArray7);

const numArray8 = [1, 2, 3, 4, 5];
numArray8.reverse();
console.log(numArray8);