let board = new Board(14, 4);
let tank = new Tank(board, board.getCell(0, 1), Direction.Right);
let panel = new Panel({ x: 0, y: 0 });
scene.setBackgroundColor(15);