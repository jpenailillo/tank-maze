class Board {
    rows: number = 7;
    columns: number = 9;

    offsetx: number = 0;
    offsety: number = 0;
    color: number = 2;
    width: number;
    height: number;
    posx: number;
    posy: number;
    sprite: Sprite;
    cells: Cell[][] = [];
    image: Image;

    road: CellType[][] = [];

    stones: Stone[][] = [];

    gas: Gas[][] = [];

    start: Cell;

    end: Cell;

    constructor(level: ITankMazeLevel, offsetx?: number, offsety?: number) {
        this.width = this.columns * 14 + (this.columns - 1) * 1 + 2;
        this.height = this.rows * 14 + (this.rows - 1) * 1 + 2;

        this.offsetx = offsetx || this.offsetx;
        this.offsety = offsety || this.offsety;

        this.posx = this.width / 2 + this.offsetx;
        this.posy = this.height / 2 + this.offsety;

        this.image = image.create(this.width, this.height);

        this.image.drawLine(0, 0, this.width, 0, this.color);
        this.image.drawLine(
            0,
            this.height - 1,
            this.width,
            this.height - 1,
            this.color
        );

        this.image.drawLine(0, 0, 0, this.height, this.color);
        this.image.drawLine(
            this.width - 1,
            0,
            this.width - 1,
            this.height,
            this.color
        );

        this.sprite = sprites.create(this.image);
        this.sprite.setPosition(this.posx, this.posy);

        for (let c = 0; c < this.columns; c++) {
            this.cells[c] = [];
            for (let r = 0; r < this.rows; r++) {
                this.cells[c][r] = new Cell(
                    r,
                    c,
                    c * 16 + this.offsetx,
                    r * 16 + this.offsety
                );
            }
        }

        this.road = level.road.map((row) =>
            row.map((cell) => new CellType(cell[0], cell[1], cell[2], cell[3]))
        );
        this.stones = level.stones.map((row) => row.map((stone) => stone ? new Stone() : null));
        this.gas = level.gas.map((row) => row.map((gas) => gas ? new Gas() : null));

        for (let c = 0; c < this.columns; c++) {
            for (let r = 0; r < this.rows; r++) {
                this.cells[c][r].cellType = this.road[c][r];
                this.cells[c][r].drawCellType();

                if (this.stones[c][r]) {
                    let cell = this.cells[c][r];
                    this.stones[c][r].setPosition(cell.sprite.x, cell.sprite.y);
                }
                if (this.gas[c][r]) {
                    let cell = this.cells[c][r];
                    this.gas[c][r].setPosition(cell.sprite.x, cell.sprite.y);
                }
            }
        }
        
        const [startX, startY] = level.start;
        const [endX, endY] = level.end;
        this.start = this.getCell(startX, startY);
        this.end = this.getCell(endX, endY);
        this.start.sprite.image.drawRect(0, 3, 1, 10, 7);
        this.end.sprite.image.drawRect(15, 3, 1, 10, 7);
    }

    getCell(column: number, row: number): Cell {
        return this.cells[column][row];
    }
}
