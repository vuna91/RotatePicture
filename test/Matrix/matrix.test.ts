import { Matrix } from "../../src/Matrix/matrix";

test("Invalid square matrix should throw Error", () => {
    let input = [
        [1, 2, 3],
        [4, 5]
    ];
    let matrix = new Matrix(input);

    expect(() => matrix.rotate(1)).toThrow("Square matrix is required");
});

test("Invalid value in matrix should throw Error", () => {
    let input = [
        [1, 256],
        [4, 5]
    ];
    let matrix = new Matrix(input);

    expect(() => matrix.rotate(1)).toThrow("Value is invalid");
});

test("Rotation once successfully", () => {
    let input = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];
    let matrix = new Matrix(input);
    let expectedResult = [
        [13, 9, 5, 1],
        [14, 10, 6, 2],
        [15, 11, 7, 3],
        [16, 12, 8, 4]
    ];

    expect(matrix.rotate(1)).toEqual(expectedResult);
});

test("Rotation twice successfully", () => {
    let input = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];
    let matrix = new Matrix(input);
    const expectedResult = [
        [16, 15, 14, 13],
        [12, 11, 10, 9],
        [8, 7, 6, 5],
        [4, 3, 2, 1]
    ];

    expect(matrix.rotate(2)).toEqual(expectedResult);
});

test("Rotation three times successfully", () => {
    let input = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ];
    let matrix = new Matrix(input);
    const expectedResult = [
        [4, 8, 12, 16],
        [3, 7, 11, 15],
        [2, 6, 10, 14],
        [1, 5, 9, 13]
    ];

    expect(matrix.rotate(3)).toEqual(expectedResult);
});
