export class Matrix {
    private _matrix: Array<Array<number>>;

    constructor(matrix: Array<Array<number>>) {
        this._matrix = matrix;
    }

    private reverseColumns(): void {
        for (let i = 0; i < this._matrix.length; i++) {
            this._matrix[i].reverse();
        }
    }

    private reverseRows(): void {
        this._matrix.reverse();
    }

    private transpose(): void {
        for (let i = 0; i < this._matrix.length; i++) {
            for (let j = i; j < this._matrix[0].length; j++) {
                let temp = this._matrix[j][i];
                this._matrix[j][i] = this._matrix[i][j];
                this._matrix[i][j] = temp;
            }
        }
    }

    private rotate90Clockwise(): void {
        this.reverseRows();
        this.transpose();
    }

    private rotate90AntiClockwise(): void {
        this.transpose();
        this.reverseRows();
    }

    private rotate180(): void {
        this.reverseColumns();
        this.reverseRows();
    }

    private validate(): void {
        let n = this._matrix.length;

        for (let row of this._matrix) {
            if (row.length !== n) {
                throw new Error("Square matrix is required");
            }

            for (let no of row) {
                if (no < 0 || no > 255) {
                    throw new Error("Value is invalid");
                }
            }
        }
    }

    public rotate(n: number): Array<Array<number>> {
        this.validate();

        let times = n % 4;

        if (times === 1) {
            this.rotate90Clockwise();
        } else if (times === 2) {
            this.rotate180();
        } else if (times === 3) {
            this.rotate90AntiClockwise();
        }

        return this._matrix;
    };
}
