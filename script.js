//Capturamos los elementos del HTML
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scordBoard');
const startButton = document.getElementById('start');
const gameOverSing = document.getElementById('gameOver');

//Opciones para el juego
const boardSize = 10;
const gameSpeed = 100;
//Creamos un objeto para cada clase de cuadrados
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2
};
//Creamos un objeto para cada clase de dirección o movimiento
const directions = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowRight: 1,
  ArrowLeft: -1,
};

//Creamos variables que se van a modificar mediante las operacionbes del juego
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;
