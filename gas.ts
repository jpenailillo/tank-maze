const gasImage = img`
3 1 1 1 1 1 2 
3 1 1 1 1 1 1 
3 1 e e e 1 1 
3 1 e 1 1 1 1 
1 1 e e e 1 1 
1 1 e 1 1 1 2 
1 1 e e e 1 2 
3 1 1 1 1 1 2 
1 1 1 1 1 1 2 
`;
class Gas {
    sprite: Sprite;

    constructor(){
        this.sprite = sprites.create(gasImage);
    }

    setPosition(x: number, y: number): void {
        this.sprite.setPosition(x, y);
    }
}