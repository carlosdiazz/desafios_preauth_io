import { findArray } from "./src/game-1";

//Examples Game 1
const arr_1: number[] = [3, 3, 2, 1];
const number_1: number = 4;
const example1: number[] = findArray(arr_1, number_1);
console.log(`Arr => ${arr_1} Number => ${number_1} Result => ${example1}`);

const arr_2: number[] = [2, 5, 8, 14, 0];
const number_2: number = 10;
const example2: number[] = findArray(arr_2, number_2);
console.log(`Arr => ${arr_2} Number => ${number_2} Result => ${example2}`);

const arr_3: number[] = [0, 0, 30, 19, 3, 5, 10, 1, 10];
const number_3: number = 20;
const example3: number[] = findArray(arr_3, number_3);
console.log(`Arr => ${arr_3} Number => ${number_3} Result => ${example3}`);
