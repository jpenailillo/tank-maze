class CellType {
    up: boolean = false;
    down: boolean = false;
    left: boolean = false;
    right: boolean = false;

    constructor(up: boolean, down: boolean, left: boolean, right: boolean)
    {
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
    }
}