export class Matrix {
  readonly _matrix: number[][];

  constructor(input: string) {
    this._matrix = input.split("\n").map(row => row.split(" ").map(n => Number(n)));
  }

  get rows(): number[][] {
    return this._matrix;
  }

  get columns(): number[][] {
    /*
     * example matrix:
     * [ 1, 2, 3]
     * [ 4, 5, 6]
     * [ 7, 8, 9]
     * [ 8, 7, 6]
     * after transfrom:
     * [ 1, 4, 7, 8]
     * [ 2, 5, 8, 7]
     * [ 3, 6, 9, 6]
     * 
     * create an empty matrix for transform by swapping inner and outter length of array 
     * as example, original is 4 and 3, transfrom will be 3 and 4 (as first and second line in return shows)
     * then, indexing reversly in original matrix (col_ind to row(outer), and row_ind to col(inner))
     */
    return [...Array(this._matrix[0].length)]
      .map(() => ([...Array(this._matrix.length)]))
      .map((row, row_ind) => row.map((_, col_ind) => this._matrix[col_ind][row_ind]))
  }
}
