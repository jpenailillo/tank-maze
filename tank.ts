class Tank {

    upImage: Image = img`
. . . . c c f f . . . . 
f f f . f f f f . f f f 
f c c . . c f . . c c f 
f f f . 3 c f 3 . f f f 
f c c 3 3 c c 3 3 c c f 
f f f 2 c 6 5 f 3 f f f 
f c c 2 f 4 5 f 2 c c f 
f f f 3 c c c f 3 f f f 
f c c 2 2 2 3 2 3 c c f 
f f f 3 2 2 3 3 2 f f f 
f c c . 3 1 1 3 . c c f 
f f f . . . . . . f f f 
`;
    downImage: Image = img`
f f f . . . . . . f f f 
f c c . 3 1 1 3 . c c f 
f f f 2 3 3 2 2 3 f f f 
f c c 3 2 3 2 2 2 c c f 
f f f 3 f c c c 3 f f f 
f c c 2 f 5 4 f 2 c c f 
f f f 3 f 5 6 c 2 f f f 
f c c 3 3 c c 3 3 c c f 
f f f . 3 f c 3 . f f f 
f c c . . f c . . c c f 
f f f . f f f f . f f f 
. . . . f f c c . . . . 
`;
    leftImage: Image = img`
. f f f f f f f f f f f 
. f c f c f c f c f c f 
. f c f c f c f c f c f 
. . . . 3 3 2 3 3 2 . . 
f f . 3 3 f f f 2 3 3 . 
f f f f c 5 5 c 3 3 1 . 
c f c c c 6 4 c 2 2 1 . 
c f . 3 3 c f c 2 2 3 . 
. . . . 3 2 2 3 2 3 . . 
. f c f c f c f c f c f 
. f c f c f c f c f c f 
. f f f f f f f f f f f 
`;
    rightImage: Image = img`
f f f f f f f f f f f . 
f c f c f c f c f c f . 
f c f c f c f c f c f . 
. . 3 2 3 2 2 3 . . . . 
. 3 2 2 c f c 3 3 . f c 
. 1 2 2 c 4 6 c c c f c 
. 1 3 3 c 5 5 c f f f f 
. 3 3 2 f f f 3 3 . f f 
. . 2 3 3 2 3 3 . . . . 
f c f c f c f c f c f . 
f c f c f c f c f c f . 
f f f f f f f f f f f . 
`;
    bullet: number = 3;
    gasoline: number = 14;
    
    cell: Cell;
    board: Board 
    sprite: Sprite;
    direction: Direction;

    constructor(board: Board, cell: Cell, direction: Direction) {
        this.sprite = sprites.create(this.getImage(direction));
        this.direction = direction;
        this.board = board;
        this.cell = cell;

        this.setPosition();
    }

    setPosition(): void {
        this.sprite.setPosition(this.cell.posx, this.cell.posy);
    }

    setDirection(direction: Direction){
        this.sprite.setImage(this.getImage(direction));
        this.direction = direction;
    } 

    destroyStone(): void {
        let column: number;
        let row: number;

        switch (this.direction){
            case Direction.Up:
                column = this.cell.column;
                row = this.cell.row - 1;
                if (row < 0 || this.board.stones[column][row] == null)
                    return;
                break;
            case Direction.Down:
                column = this.cell.column;
                row = this.cell.row + 1;
                if (row == this.board.rows || this.board.stones[column][row] == null)
                    return;

                break;
            case Direction.Left:
                column = this.cell.column -1;
                row = this.cell.row;
                if (column < 0 || this.board.stones[column][row] == null)
                    return;
                break;
            case Direction.Right:
                column = this.cell.column + 1;
                row = this.cell.row;
                if (column == this.board.columns || this.board.stones[column][row] == null)
                    return;
                break;
        }
        this.board.stones[column][row].destroy();
        this.board.stones[column][row] = null;
    }

    shoot() {
        if (this.bullet > 0) {
            this.bullet -= 1;
            panel.drawLeftBullets(this.bullet);

            let x = this.sprite.x;
            let y = this.sprite.y;

            switch (this.direction) {
                case Direction.Up:
                    y = y - 6;
                    break;
                case Direction.Left:
                    x = x - 6;
                    break;
                case Direction.Down:
                    y = y + 6;
                    break;
                case Direction.Right:
                    x = x + 6;
                    break;
            }
            new Blast(x, y);

            this.destroyStone();
        }
        else {
            game.splash("Sin balas !!!");
        }
    }

    isValid(column: number, row: number): boolean {
        if (this.board.stones[column][row]) {
            game.splash("Roca en el camino !!!");
            return false;
        }
        return true;
    }

    move(){
        if (this.gasoline == 0) {
            game.splash("Sin gasolina !!!");
            return;
        }

        switch (this.direction) {
            case Direction.Up:
            {
                if (this.cell.row == 0) return;
                if (!this.isValid(this.cell.column, this.cell.row - 1)) return;
                let cell = this.board.getCell(this.cell.column, this.cell.row - 1);
                if (!cell.cellType.down) { game.splash("Camino no valido !!!"); return; }
                this.cell = cell;
                break;
            }
            case Direction.Down:
            {
                if (this.cell.row == this.board.rows - 1) return;
                if (!this.isValid(this.cell.column, this.cell.row + 1)) return;
                let cell = this.board.getCell(this.cell.column, this.cell.row + 1);
                if (!cell.cellType.up) { game.splash("Camino no valido !!!"); return; }
                this.cell = cell;
                break;
            }
            case Direction.Left:
            {
                if (this.cell.column == 0) return;
                if (!this.isValid(this.cell.column - 1, this.cell.row)) return;
                let cell = this.board.getCell(this.cell.column - 1, this.cell.row);
                if (!cell.cellType.right) { game.splash("Camino no valido !!!"); return; }
                this.cell = cell;
                break;
            }
            case Direction.Right:
            {
                if (this.cell.column == this.board.columns - 1) return;
                if (!this.isValid(this.cell.column + 1, this.cell.row)) return;
                let cell = this.board.getCell(this.cell.column + 1, this.cell.row);
                if (!cell.cellType.left) { game.splash("Camino no valido !!!"); return; }
                this.cell = cell;
                break;
            }
        }

        
        this.gasoline -= 1;
        panel.drawLeftEnergy(this.gasoline);

        for (let i = 0; i < 16; i++) {
            switch (this.direction) {
                case Direction.Up:
                    this.sprite.setPosition(this.sprite.x, this.sprite.y - 1);
                    break;
                case Direction.Left:
                    this.sprite.setPosition(this.sprite.x - 1, this.sprite.y);
                    break;
                case Direction.Down:
                    this.sprite.setPosition(this.sprite.x, this.sprite.y + 1);
                    break;
                case Direction.Right:
                    this.sprite.setPosition(this.sprite.x + 1, this.sprite.y);
                    break;
            }
            basic.pause(50);
        }


        if (this.board.gas[this.cell.column][this.cell.row]){
            this.gasoline = 14;
            panel.drawLeftEnergy(this.gasoline);
            this.board.gas[this.cell.column][this.cell.row].destroy();
            this.board.gas[this.cell.column][this.cell.row] = null;
        }
    }

    rotateLeft() {
        switch (this.direction) {
            case Direction.Up:
                this.setDirection(Direction.Left);
                break;
            case Direction.Left:
                this.setDirection(Direction.Down);
                break;
            case Direction.Down:
                this.setDirection(Direction.Right);
                break;
            case Direction.Right:
                this.setDirection(Direction.Up);
                break;
        }
    }

    rotateRight() {
        switch (this.direction) {
            case Direction.Up:
                this.setDirection(Direction.Right);
                break;
            case Direction.Right:
                this.setDirection(Direction.Down);
                break;
            case Direction.Down:
                this.setDirection(Direction.Left);
                break;
            case Direction.Left:
                this.setDirection(Direction.Up);
                break;
            default:
                break;
        }
    }

    getImage(direction: Direction): Image {
        switch(direction){
            case Direction.Up: 
                return this.upImage;
            case Direction.Down:
                return this.downImage;
            case Direction.Left:
                return this.leftImage;
            case Direction.Right:
                return this.rightImage;
            default:
                return null;
        }
    }
}