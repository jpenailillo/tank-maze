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

    road: CellType[][] = [
        [new CellType(false, false, false, false), new CellType(false, true, true, true), new CellType(true, true, false, false), new CellType(true, true, false, true), new CellType(true, true, false, false), new CellType(true, true, false, true), new CellType(true, false, false, true)],
        [new CellType(false, true, false, true), new CellType(true, true, true, true), new CellType(true, true, false, false), new CellType(true, true, true, false), new CellType(true, true, false, false), new CellType(true, false, true, true), new CellType(false, false, true, true)],
        [new CellType(false, false, true, true), new CellType(false, false, true, true), new CellType(false, true, false, true), new CellType(true, true, false, true), new CellType(true, true, false, true), new CellType(true, true, true, false), new CellType(true, false, true, true)],
        [new CellType(false, true, true, false), new CellType(true, true, true, true), new CellType(true, true, true, true), new CellType(true, true, true, true), new CellType(true, false, true, true), new CellType(false, true, false, true), new CellType(true, false, true, false)],
        [new CellType(false, true, false, true), new CellType(true, true, true, true), new CellType(true, true, true, true), new CellType(true, false, true, true), new CellType(false, false, true, true), new CellType(false, true, true, false), new CellType(true, false, false, true)],
        [new CellType(false, true, true, false), new CellType(true, true, true, false), new CellType(true, true, true, true), new CellType(true, true, true, true), new CellType(true, true, true, true), new CellType(true, true, false, true), new CellType(true, false, true, false)],
        [new CellType(false, true, false, true), new CellType(true, true, false, false), new CellType(true, false, true, false), new CellType(false, true, true, false), new CellType(true, true, true, false), new CellType(true, true, true, true), new CellType(true, false, false, true)],
        [new CellType(false, true, true, true), new CellType(true, true, false, false), new CellType(true, true, false, true), new CellType(true, true, false, true), new CellType(true, false, false, true), new CellType(false, true, true, false), new CellType(true, false, true, true)],
        [new CellType(false, true, true, false), new CellType(true, true, false, false), new CellType(true, true, true, false), new CellType(true, false, true, true), new CellType(false, true, true, false), new CellType(true, true, false, false), new CellType(true, false, true, false)],
    ];

    stones: Stone[][] = [
        [null, null, null, null, null, new Stone(), null],
        [null, null, null, new Stone(), null, null, null],
        [null, new Stone(), null, null, null, null, new Stone()],
        [null, null, null, null, new Stone(), null, null],
        [null, new Stone(), null, new Stone(), null, null, null],
        [null, null, null, null, null, null, null],
        [null, new Stone(), null, new Stone(), null, new Stone(), null],
        [new Stone(), null, new Stone(), null, null, null, null],
        [null, new Stone(), null, null, new Stone(), new Stone(), new Stone()],
    ];

    constructor(offsetx?: number, offsety?: number) {

        this.width = (this.columns * 14) + ((this.columns - 1) * 1) + 2;
        this.height = (this.rows * 14) + ((this.rows - 1) * 1) + 2;

        this.offsetx = offsetx || this.offsetx;
        this.offsety = offsety || this.offsety;

        this.posx = this.width / 2 + this.offsetx;
        this.posy = this.height / 2 + this.offsety;

        this.image = image.create(this.width, this.height);

        this.image.drawLine(0, 0, this.width, 0, this.color);
        this.image.drawLine(0, this.height - 1, this.width, this.height - 1, this.color);

        this.image.drawLine(0, 0, 0, this.height, this.color);
        this.image.drawLine(this.width - 1, 0, this.width - 1, this.height, this.color);

        this.sprite = sprites.create(this.image);
        this.sprite.setPosition(this.posx, this.posy);

        for (let c = 0; c < this.columns; c++) {
            this.cells[c] = [];
            for (let r = 0; r < this.rows; r++) {
                this.cells[c][r] = new Cell(r, c, c * 15 + this.offsetx, r * 15 + this.offsety);
            }
        }

        for (let c = 0; c < this.columns; c++) {
            for (let r = 0; r < this.rows; r++) {
                this.cells[c][r].cellType = this.road[c][r];
                this.cells[c][r].drawCellType();

                if (this.stones[c][r]) {
                    let cell = this.cells[c][r];
                    this.stones[c][r].setPosition(cell.sprite.x, cell.sprite.y);
                }
            }
        }
    }

    getCell(column: number, row: number): Cell {
        return this.cells[column][row];
    }
}