const arr = [11, 20, 21, 1, 5, 6, 41];
for (const num of arr) {
    if (num > 10) console.log(num);
}

const arr2 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr2.length; i++) {
    arr2[i] = arr2[i] * 2;
}
for (const num of arr2) {
    console.log(num);
}

const arr3 = [1, 25, 21, 0, -5, 101, 10]
let max = 0;
for (const num of arr3) {
    if (num > max) max = num;
}
console.log(max);