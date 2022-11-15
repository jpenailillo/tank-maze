// Añade tu código aquí

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

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

    sprite: Sprite;
    direction: Direction;
    bullet : number = 3;
    gasoline: number = 14;

    constructor(x: number, y: number, direction: Direction) {
        this.sprite = sprites.create(this.getImage(direction));
        this.sprite.setPosition(x, y);
        this.direction = direction;
    }

    setDirection(direction: Direction) {
        this.sprite.setImage(this.getImage(direction));
        this.direction = direction;
    }

    shoot() {
        if (this.bullet > 0) {
            this.bullet -= 1;

            let x = this.sprite.x;
            let y = this.sprite.y;

            switch (this.direction) {
                case Direction.Up:
                    y = y - 8;
                    break;
                case Direction.Left:
                    x = x - 8;
                    break;
                case Direction.Down:
                    y = y + 8;
                    break;
                case Direction.Right:
                    x = x + 8;
                    break;
            }
            new Blast(x, y);
        }
        else {
            game.splash("Sin balas !!!");
        }
    }

    move() {
        if (this.gasoline > 0) {
            this.gasoline -= 1;

            switch (this.direction) {
                case Direction.Up:
                    this.sprite.setVelocity(0, -32);
                    break;
                case Direction.Left:
                    this.sprite.setVelocity(-32, 0);
                    break;
                case Direction.Down:
                    this.sprite.setVelocity(0, 32);
                    break;
                case Direction.Right:
                    this.sprite.setVelocity(32, 0);
                    break;
            }
            setTimeout(() => this.sprite.setVelocity(0, 0), 500);
        }
        else {
            game.splash("Sin gasolina !!!");
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
        switch (direction) {
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