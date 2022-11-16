class Blast {   

    sprite: Sprite;

    images: Image[] = [img`
. . . . . . . . 
. . . . . . . . 
. . 5 5 5 5 . . 
. . 5 4 4 5 . . 
. . 5 4 4 5 . . 
. . 5 5 5 5 . . 
. . . . . . . . 
. . . . . . . . 
`, img`
. . . . . . . . 
. . . 5 5 . . . 
. . 5 6 6 5 . . 
. 5 6 4 4 6 5 . 
. 5 6 4 4 6 5 . 
. . 5 6 6 5 . . 
. . . 5 5 . . . 
. . . . . . . . 
`, img`
4 . . . . . . 4 
. 5 . 5 5 . 5 . 
. . 5 6 6 5 . . 
. 5 6 4 4 6 5 . 
. 5 6 4 4 6 5 . 
. . 5 6 6 5 . . 
. 5 . 5 5 . 5 . 
4 . . . . . . 4 
`, img`
4 . . 4 4 . . 4 
. 5 . 5 5 . 5 . 
. . 5 6 6 5 . . 
4 5 6 4 4 6 5 4 
4 5 6 4 4 6 5 4 
. . 5 6 6 5 . . 
. 5 . 5 5 . 5 . 
4 . . 4 4 . . 4 
`, img`
b . . a a . . b 
. b . a a . b . 
. . b a a b . . 
a a a 4 4 a a a 
a a a 4 4 a a a 
. . b a a b . . 
. b . a a . b . 
b . . a a . . b 
`, img`
. . . . . . . . 
. b . b b . b . 
. . b a a b . . 
. b a c c a b . 
. b a c c a b . 
. . b a a b . . 
. b . b b . b . 
. . . . . . . . 
`, img`
. . . . . . . . 
. . . . . . . . 
. . . d d . . . 
. . d b b d . . 
. . d b b d . . 
. . . d d . . . 
. . . . . . . . 
. . . . . . . . 
`];
    
    constructor(x: number, y: number) {
        this.sprite = sprites.create(this.images[0], SpriteKind.Enemy);
        this.sprite.setPosition(x, y);

        for (let i = 1; i < this.images.length; i++) {
            this.sprite.setImage(this.images[i]);
            basic.pause(100);
        }

        this.sprite.destroy();
    }
}