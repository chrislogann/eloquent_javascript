
/*
script to print a chessboard pattern of # and space characters, with 8 rows and 8 columns, like this:
# # # #
 # # # #
*/

let row_1 = "# # # #\n"
let row_2 = " # # # #\n"

let chessboard = ""

let size = 10
for (let i = 0; i < size/2; i++) {
    chessboard += row_1
    chessboard += row_2
}

console.log(chessboard)

