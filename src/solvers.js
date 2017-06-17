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



window.findNRooksSolution = function(n) {
  //create a new board
  var solution = new Board({n: n});
  //use nested for loops to go through every coordinate on the board
  for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
      //at each coordinte, toggle the piece to 1
      solution.togglePiece(x, y);
      console.log(solution);
      //if when you toggle that piece, it creates a rooks conflict on the board
      if (solution.hasAnyRooksConflicts()) {
        //toggle that piece back to 0 to get rid of conflict
        solution.togglePiece(x, y);
        console.log(solution.rows());

      }
    }
  }

  console.log(solution.rows()[0]);
  console.log(solution.rows()[1]);
  console.log(solution.rows()[2]);
  console.log(solution.rows()[3]);


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

    // create a new board of zeros

    // instaniate a function / sub-routine, pass in the board

      // establish a base case that once i hit n, increase solution count

      // else iterate through columns looking for place w/o conflict

        // place piece and check for conflicts

          // if conflict, do not toggle and continue iteration

          // if not conflict then advance the...





  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};



var b = new Board({n:4});
b.togglePiece(0,0);
b.togglePiece(0,1);
console.log(b.hasAnyRooksConflicts());
