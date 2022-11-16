
class Cell {
    cellBackground: Image = img`
    . . . . . . . . . . . . . . . . 
    3 . . . . . . . . . . . . . . . 
    3 . . . . . . . . . 3 3 3 3 . . 
    3 . . . . . . . . 3 . . . 3 3 . 
    3 . . . . . 3 3 3 . . . . . 3 3 
    3 . . . . . 3 . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . . 3 
    3 . . . . . . . . . 3 3 3 . . 3 
    3 3 3 3 3 3 3 3 3 3 . . . 3 3 3 
    . . . . . . . . . . . . . . . . 
    `;
    row: number;
    column: number;

    offsetx: number = 0;
    offsety: number = 0;
    color: number = 10;
    width: number = 16;
    height: number = 16;
    posx: number;
    posy: number;
    sprite: Sprite;
    image: Image;
    cellType: CellType;

    constructor(row: number, column: number, offsetx: number, offsety: number) {
        this.row = row;
        this.column = column;

        this.offsetx = offsetx;
        this.offsety = offsety;

        this.posx = this.width / 2 + this.offsetx;
        this.posy = this.height / 2 + this.offsety;

        this.image = image.create(this.width, this.height);

        this.image.fill(13);

        this.image.drawLine(0, 0, this.width, 0, 12);
        // this.image.drawLine(0, this.height - 1, this.width, this.height - 1, 12);

        this.image.drawLine(0, 0, 0, this.height, 12);
        // this.image.drawLine(this.width - 1, 0, this.width - 1, this.height, 12);

        this.image.drawLine(2, 1, this.width - 1, 1, 11);
        this.image.drawLine(1, 2, 1, this.height - 1, 11);

        this.sprite = sprites.create(this.image);
        this.sprite.setPosition(this.posx, this.posy);
    }

    drawCellType(): void {
        
        if (this.cellType.left) 
            this.image.drawLine(0, this.height / 2, this.width / 2, this.height / 2, this.color);
        if (this.cellType.right)
            this.image.drawLine(this.width / 2, this.height / 2, this.width, this.height / 2, this.color);
        if (this.cellType.up)
            this.image.drawLine(this.width / 2, 0, this.width / 2, this.height / 2, this.color);
        if (this.cellType.down)
            this.image.drawLine(this.width / 2, this.height / 2, this.width / 2, this.height, this.color);
    }
}