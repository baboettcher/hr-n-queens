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
  var solution = new Board({n: n});


/*  //recursive function
  var callback = function(row) {
    //base case: stop the search when row is equal to n
    if (row === n) {
      return solution;
    }
    //iterate through n staring at the first column
    for (var colIndex = 0; colIndex < n; colIndex++) {
      //toggle the piece at that coordinate
      solution.togglePiece(row, colIndex);
      //check if toggling that piece creates any rooks conflicts
      if (solution.hasAnyRooksConflicts()) {
        //if it does, toggle that piece back
        solution.togglePiece(row, colIndex);
        //else call inner recursive function on the next row
      } else {
        callback(row + 1);
      }
    }
  };
  //call recursive function on row 0
  callback(0);

  // for (var i = 0; i < n; i++) {
  //   console.log(solution.rows()[i]);
  // }


  */
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();


};





// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

window.countNRooksSolutions = function(n) {

 var solutionCount = 0;

  // create a new board of zeros
  var board = new Board({n: n});

  // instaniate a function / sub-routine, pass in the board
  var callback = function(row) {
    //base case: once i hit n, increase solution count
    if (row === n) {
      solutionCount++;
      return;
    }

    //iterate through n staring at the first column
    for (var colIndex = 0; colIndex < n; colIndex++) {

      //place piece and check for conflicts
      board.togglePiece(row, colIndex);

      //Recurse into remaining solutions if no rook conflict
      if (!board.hasAnyRooksConflicts()){
        // increment row and
        callback(row+1);
      } //  QUESTION#1


      //unplace piece -- but why does this not affect future tests?
      board.togglePiece(row, colIndex);
    }
  };

  //call recursive function on row 0
  callback(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);


  return solutionCount;


};





// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

/*var solution = new Board({n: n});
  //recursive function
  var callback = function(row) {
    //base case: stop the search when row is equal to n
    if (row === n) {
      return solution;
    }
    //iterate through n staring at the first column
    for (var colIndex = 0; colIndex < n; colIndex++) {
      // toggle the piece at that coordinate
      solution.togglePiece(row, colIndex);
      //check if there are any queens conflicts
      if (!solution.hasAnyQueensConflicts()) {
      //if there aren't any conflicts, call inner recursive function on the next row
        callback(row + 1);
      }
      // unplace piece at that coordinate
      solution.togglePiece(row, colIndex);
    }

  };
  //call recursive function on row 0
  callback(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;

  */
};





// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {



  var solutionCount = undefined; //fixme

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