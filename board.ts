// Add your code here

enum CellType {
    horizontal = 1,
    vertical = 2,
    horizontalLeft = 3,
    horizontalRight = 4,
    horizontalBoth = 5,
    horizontalLeftReverse = 6,
    horizontalRightReverse = 7,
    horizontalBothReverse = 8,
    verticalalLeft = 9,
    verticalalRight = 10,
    verticalalBoth = 11,
    verticalalLeftReverse = 12,
    verticalalRightReverse = 13,
    verticalalBothReverse = 14
};

class Cell {

    offsetx: number = 0;
    offsety: number = 0;
    color: number = 2;
    width: number = 16;
    height: number = 16;
    posx: number;
    posy: number;
    sprite: Sprite;
    image: Image;
    cellType: CellType;

    constructor(offsetx?: number, offsety?: number) {

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

        this.cellType = CellType.horizontal;
    }

    drawCellType() : void {
        this.color = 4;

        if ([CellType.horizontal].find(i => i === this.cellType))
            this.image.drawLine(0, this.height / 2, this.width / 2, this.height / 2, this.color);
        if ([CellType.horizontal].find(i => i === this.cellType))
            this.image.drawLine(this.width / 2, this.height / 2, this.width, this.height / 2, this.color);
    }
}

class Board {

    horizontal: number = 7;
    vertical: number = 9;
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

    constructor(offsetx?: number, offsety?: number) {

        this.width = (this.vertical * 14) + ((this.vertical - 1) * 1) + 2;
        this.height = (this.horizontal * 14) + ((this.horizontal - 1) * 1) + 2;

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

        for (let v = 0; v < this.vertical; v++) {
            this.cells[v] = [];
            for (let c = 0; c < this.horizontal; c++) {
                this.cells[v][c] = new Cell(v * 15 + this.offsetx, c * 15 + this.offsety);
            }
        }

        for (let v = 0; v < this.vertical; v++) {
            for (let c = 0; c < this.horizontal; c++) {
                this.cells[v][c].drawCellType();
            }
        }
    }
}