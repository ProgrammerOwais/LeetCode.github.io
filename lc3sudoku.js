/******************************* Valid Sudoku *************************
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells 
 * need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 
1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner 
being modified to 8. Since there are two 8's in the top left 3x3 sub-box, 
it is invalid.
*/
var isValidSudoku = function (board) {
    let size = board.length;
    for (let l = 0; l < size; l++) {
        for (let i = 0; i < size; i++) {
            if (board[l][i] == ".") continue;

            for (let j = i + 1; j < size; j++) {
                if (board[l][i] == board[l][j]) return false;
            }
            for (let k = l + 1; k < size; k++) {
                if (board[l][i] == board[k][i]) return false;
            }
        }
    }
    let Subboxes = [
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ];
    let row = 0; // tracing rows in sub box
    let col = 0; // tracing cols in sub box
    for (let i = 0; i < size; i++) {
        if (i == 0 || i == 1 || i == 2) {
            row = 0;
        } else if (i == 3 || i == 4 || i == 5) {
            row = 3;
        } else if (i == 6 || i == 7 || i == 8) {
            row = 6;
        }
        if (i == 0 || i == 3 || i == 6) {
            col = 0;
        } else if (i == 1 || i == 4 || i == 7) {
            col = 3;
        } else if (i == 2 || i == 5 || i == 8) {
            col = 6;
        }
        // puting data into the sub box "making it like a 3x3 sub box"
        let y = 0; // subbox columns field
        for (let j = row; j < row + 3; j++) {
            for (let k = col; k < col + 3; k++) {
                Subboxes[i][y] = board[j][k];
                y++;
            }
        }
        // The above code will make a sub 3x3 sudoku box into a 1d array;
        // checking the repited element
        for (let j = 0; j < size; j++) {
            for (let k = j + 1; k < size; k++) {
                if (Subboxes[i][j] == ".") continue;
                if (Subboxes[i][j] == Subboxes[i][k]) {
                    return false;
                }
            }
        }
    }

    return Subboxes;
};
let sdk1 = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
let sdk2 = [
    [".", ".", ".", ".", ".", ".", "5", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["9", "3", ".", ".", "2", ".", "4", ".", "."],
    [".", ".", "7", ".", ".", ".", "3", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "3", "4", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "."],
    [".", ".", ".", ".", ".", "5", "2", ".", "."],
];
console.log("lets check the result: ", isValidSudoku(sdk2));

/*************************** Other solution 
 * 
 *  Time complexity: O(n^2)



function isValidSudoku(board) {
    let rows = getListOfSets(board.length);
    let cols = getListOfSets(board.length);
    let boxes = getListOfSets(board.length);
  
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        let c = board[i][j];
  
        if (c === '.') { continue };
  
        let box = getBox(i, j);
  
        if (rows[i].has(c) || cols[j].has(c) || boxes[box].has(c)) {
          return false;
        } else {
          rows[i].add(c);
          cols[j].add(c);
          boxes[box].add(c);
        }
      }
    }
  
    return true;
  }
  
  const getBox = (i, j) => 3 * Math.floor(j / 3) + Math.floor(i / 3);
  const getListOfSets = (n) => new Array(n).fill().map(_ => new Set());

 */
