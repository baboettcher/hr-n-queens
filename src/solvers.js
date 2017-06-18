/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



// window.findNRooksSolution = function(n) {
//   //create a new board
//   var solution = new Board({n: n});
//   //use nested for loops to go through every coordinate on the board
//   for (var x = 0; x < n; x++) {
//     for (var y = 0; y < n; y++) {
//       //at each coordinte, toggle the piece to 1
//       solution.togglePiece(x, y);
//       //if when you toggle that piece, it creates a rooks conflict on the board
//       if (solution.hasAnyRooksConflicts()) {
//         //toggle that piece back to 0 to get rid of conflict
//         solution.togglePiece(x, y);
//
//       }
//     }
//   }
//   for (var i = 0; i < n; i++) {
//     console.log(solution.rows()[i]);
//   }
//   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
//   return solution.rows();
// };



window.findNRooksSolution = function(n) {
  //create a new board
  var solution = undefined;

  var board = new Board({n:n});

  oldInner_findSolution(0,n, board, "hasAnyRooksConflicts", function(){
    //solution = boards.rows(); // callback returns the whole board
    solution = _.map(board.rows(), function(row){
      return row.slice();
    })
    // QUESTION #3 - 29:03 in video; to return a copy of the row
  })



  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;


};





// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

window.countNRooksSolutions = function(n) {

 var solutionCount = 0;

  // create a new board
  var board = new Board({n: n});

  //call recursive function on row 0
  window.oldInner_findSolution(0, n, board, "hasAnyRooksConflicts",function(){
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);

  return solutionCount;

};


window.oldInner_findSolution = function(row, n, board, validator, callback) {

  var solutionCount = 0;

    //base case: once i hit n, increase solution count
    if (row === n) {
      //solutionCount++;
      callback();
      return;
    }

    //iterate through n staring at the first column
    for (var colIndex = 0; colIndex < n; colIndex++) {

      //place piece and check for conflicts
      board.togglePiece(row, colIndex);

      //Recurse into remaining solutions if no rook conflict
      if (!board[validator]() ){
        // increment row and
        window.oldInner_findSolution(row+1, n, board, validator, callback);
      } //  QUESTION#1


      //unplace piece -- but why does this not affect future tests?
      board.togglePiece(row, colIndex);
    }
  };







// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

};





// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

 var solutionCount = 0;

  // create a new board of zeros
  var board = new Board({n: n});

  //call recursive function on row 0
  window.oldInner_findSolution(0, n, board, "hasAnyQueensConflicts", function(){
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;

};







/*
var b = new Board({
  n: 4
});
b.togglePiece(0, 0);
b.togglePiece(0, 1);
console.log(b.hasAnyRooksConflicts());
*/