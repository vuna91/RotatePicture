import { Matrix } from "./matrix/matrix";
const readline = require("readline");

let matrixInputed: any;
let numberOfRotations: number;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const inputMatrix = (): void => {
    rl.question("Please enter square matrix with format as [[1,2],[3,4]]: ", (input: string) => {
        if (!input.startsWith("[[") || !input.endsWith("]]")) {
            inputMatrix();
        } else {
            let inputSubstr = input.substr(2, input.length - 4);
            matrixInputed = inputSubstr.split("],[").map((i) => {
                return i.split(",").map((no) => {
                    return parseInt(no);
                })
            });
            rl.write("\n");
        }
    });
};

const inputTimes = (): void => {
    rl.question("Please enter number of rotation times (>= 1): ", (input: string) => {
        numberOfRotations = parseInt(input);
        if (numberOfRotations < 1) {
            inputTimes();
        }
        rl.write("\n");
    });
};

const quitOrContinue = (): void => {
    rl.question("Press 'q' to quit or 'c' to continue: ", (input: string) => {
        if (input === "q") {
            process.exit(0);
        } else if (input === "c") {
            matrixInputed = null;
            numberOfRotations = 0;
            rl.write("\n");
        } else {
            quitOrContinue();
        }
    });
}

rl.on("line", function (input: string) {
    if (!matrixInputed) {
        inputMatrix();
    } else if (!numberOfRotations) {
        inputTimes();
    } else {
        const matrix = new Matrix(matrixInputed);
        console.log("Result: ", matrix.rotate(numberOfRotations), "\n");

        quitOrContinue();
    }
});

rl.write("\n");