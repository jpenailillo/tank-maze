const boardCells = [
  [0, 6, 3, 7, 6, 7, 6, 5, 7],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

class BoardTank {

}

class Board {
  grid: Grid;
  tank: BoardTank;
	position: Position;
	cells: Cell[][] = [];

  constructor(cells: CellType[][]) {
    this.grid = new Grid(12, 4);
    this.tank = new BoardTank();
		this.position = [0, 0];
		this.cells = cells.map((row, y) => row.map((type, x) => new Cell(type, [x, y])));
	}


}
