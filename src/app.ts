import { Matrix } from "./Matrix/matrix";

let input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let matrix = new Matrix(input);
console.log(matrix.rotate(3));