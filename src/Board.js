// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {

  window.Board = Backbone.Model.extend({

    initialize: function(params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get('n'))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = +!this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function() {
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


    /*
             _             _     _
         ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
        / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
        \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
        |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

     */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict

/*
A)      B)      C)      D)      E)
1165    667     -       39      52
1128    578     -       74      -
16591   14067   11238   7517    4434
442     386     427     203     119
*/




    // --- A) ROW: our official turned in ---//
/*
    hasRowConflictAt: function(rowIndex) {
      var counter = 0;
      for (var i = 0; i < this.rows()[rowIndex].length; i++) {
        counter += this.rows()[rowIndex][i];
      }
      return counter > 1;
    },
    // time complexity? .rows inside

    hasAnyRowConflicts: function() {
      var n = this.get('n');
      for (var i = 0; i < n; i++) {
        if (this.hasRowConflictAt(i)) {
          return true;
        }
      }
      return false;
    },
*/


  // --- B) ROW: refactored for better time complexity ---//
/*

      hasRowConflictAt: function(rowIndex) {
      //var n = this.rows()[rowIndex].length;
      var n = this.get('n');
      var counter = 0;

      for (var i = 0; i < n; i++) {
        counter += this.rows()[rowIndex][i];
      }
      return counter > 1;
    },
    // time complexity? moved this.rows out of for loop

    hasAnyRowConflicts: function() {
      var n = this.get('n');

      for (var i = 0; i < n; i++) {
        if (this.hasRowConflictAt(i)) {
          return true;
        }
      }
      return false;
    },



*/


  // --- C) offical row code ---//
  // a fair amount faster using this code, but not exactly as you would expect



    hasRowConflictAt: function(rowIndex) {

      var row = this.get(rowIndex);
      var count = 0;

      for ( var i = 0; i < row.length; i++ ) {
        count += row[i];
      }

      return count > 1;
    },

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {

      var size = this.get('n');

      for ( var i = 0; i < size; i++ ) {
        if ( this.hasRowConflictAt(i) ) {
          return true;
        }
      }

      return false;
    },




    // COLUMNS - run from top to bottom
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict

/*


    // --- A) COL: official code ---//

    hasColConflictAt: function(colIndex) {
      var n = this.get('n');
      var counter = 0;

      for (var i = 0; i < n; i++) {
        counter += this.get(i)[colIndex];
      }
      return counter > 1;
    },

    hasAnyColConflicts: function() {
      var n = this.get('n');
      for (var i = 0; i < n; i++) {
        if (this.hasColConflictAt(i)) {
          return true;
        }
      }
      return false;
    },

*/


    // --- B) OUR original COL code ---//

    hasColConflictAt: function(colIndex) {
      var n = this.get('n');
      var counter = 0;

      for (var i = 0; i < n; i++) {
        counter += this.get(i)[colIndex];
      }
      return counter > 1;
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
      var n = this.get('n');
      for (var i = 0; i < n; i++) {
        if (this.hasColConflictAt(i)) {
          return true;
        }
      }
      return false;
    },



    // --- C) OFFICAL   COL code ---//
    // essentially no difference
/*

    hasColConflictAt: function(colIndex) {

      var size = this.get('n');
      var count = 0;

      for ( var i = 0; i < size; i++ ) {
        var row = this.get(i);
        count += row[colIndex];
      }

      return count > 1;
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {

      var size = this.get('n');

      for ( var i = 0; i < size; i++ ) {
        if ( this.hasColConflictAt(i) ) {
          return true;
        }
      }

      return false;
    },


*/



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict


    // --- A) Our original MAJOR-DIAGONAL code ---//
/*
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow, majorDiagonalRowIndex) {
      var counter = 0;
      var x = majorDiagonalRowIndex || 0;
      for (var y = majorDiagonalColumnIndexAtFirstRow; y < this.rows().length && x < this.rows().length; y++, x++) {
        counter += this.rows()[x][y];
      }
      return (counter > 1);
    },


    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
      var rowLength = this.rows().length;

      for (var x = 0; x < rowLength; x++) {
        for (var y = 0; y < rowLength; y++) {
          if (this.hasMajorDiagonalConflictAt(x, y)) {
            return true;
          }
        }
      }
      return false;
    },


*/
    // --- B) Refectored MAJOR-DIAGONAL code ---//

    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow, majorDiagonalRowIndex) {
      var n = this.rows().length;
      var counter = 0;
      var x = majorDiagonalRowIndex || 0;
      for (var y = majorDiagonalColumnIndexAtFirstRow; y < n && x < n; y++, x++) {
        counter += this.rows()[x][y];
      }
      return counter > 1;
    },


    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
      var rowLength = this.rows().length;

      for (var x = 0; x < rowLength; x++) {
        for (var y = 0; y < rowLength; y++) {
          if (this.hasMajorDiagonalConflictAt(x, y)) {
            return true;
          }
        }
      }
      return false;
    },







    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict



    // --- A) Our original MINOR-DIAGONAL code ---//
/*

    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow, minorDiagonalRowIndex) {
      var counter = 0;
      var x = minorDiagonalRowIndex || 0;
      for (var y = minorDiagonalColumnIndexAtFirstRow; y < this.rows().length && y >= 0 && x < this.rows().length; x++, y--) {
        counter += this.rows()[x][y];
      }
      return counter > 1;
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
      var rowLength = this.rows().length;

      for (var x = 0; x < rowLength; x++) {
        for (var y = 0; y < rowLength; y++) {
          if (this.hasMinorDiagonalConflictAt(x, y)) {
            return true;
          }
        }
      }
      return false;
    }


*/
    // --- B) Refactored MINOR-DIAGONAL code ---//

    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow, minorDiagonalRowIndex) {
      var counter = 0;
      var x = minorDiagonalRowIndex || 0;
      var n = this.rows().length;


      for (var y = minorDiagonalColumnIndexAtFirstRow; y < n && y >= 0 && x < n; x++, y--) {
        counter += this.rows()[x][y];
      }
      return counter > 1;
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
      var rowLength = this.rows().length;

      for (var x = 0; x < rowLength; x++) {
        for (var y = 0; y < rowLength; y++) {
          if (this.hasMinorDiagonalConflictAt(x, y)) {
            return true;
          }
        }
      }
      return false;
    }










    /*--------------------  End of Helper Functions  ---------------------*/ //


  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

}());
