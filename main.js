class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.game_over = false;
    this.bars = [];
    this.ball = null;
  }

  get elements() {
    var elements = this.bars;
    elements.push(ball);
    return elements;
  }
}

// (function () {
//   var self.Board = function (width,height) {
//       this.width = width;
//       this.height = height;
//       this.playing = false;
//       this.game_over = false;
//       this.bars = [];
//       this.ball = null;

//   }

//   self.Board.prototype ={
//       get elements(){
//           var elements = this.bars;
//           elements.push(ball);
//           return elements;

//       }
//   }
// })();

window.addEventListener("load", main);

class BoardView {
  constructor(canvas, board) {
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.contexto = canvas.getContext("2d");
  }
}

// (function () {
//     self.BoardView = function(canvas, board) {
//         this.canvas = canvas;
//         this.canvas.width = board.width;
//         this.canvas.height = board.height;
//         this.board = board;
//         this.contexto = canvas.getContext("2d");

//     }

// })();

function main(params) {
  var board = new Board(800, 400);
  var canvas = document.getElementById("canvas");
  var board_view = new BoardView(canvas, board);
}
