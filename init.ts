const level = levels[0];
const board = new Board(level, 13, 4);
const tank = new Tank(board, board.getCell(0, 1), Direction.Right);
const panel = new Panel();
scene.setBackgroundColor(15);
