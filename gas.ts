
class Gas {
    sprite: Sprite;

    constructor(){
        this.sprite = sprites.create(img`
3 1 1 1 1 1 2 
3 1 1 1 1 1 1 
3 1 e e e 1 1 
3 1 e 1 1 1 1 
1 1 e e e 1 1 
1 1 e 1 1 1 2 
1 1 e e e 1 2 
3 1 1 1 1 1 2 
1 1 1 1 1 1 2 
`);
    }

    setPosition(x: number, y: number): void {
        this.sprite.setPosition(x, y);
    }

    destroy(): void {
        this.sprite.destroy();
    }
}