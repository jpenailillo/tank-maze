
class Panel {
    battery: Image;
    bullets: Sprite[] = [];
    energy = img`
3 1 1 1 1 1 2 
3 1 1 1 1 1 1 
3 1 e e e 1 1 
3 1 e 1 1 1 1 
1 1 e e e 1 1 
1 1 e 1 1 1 2 
1 1 e e e 1 2 
3 1 1 1 1 1 2 
1 1 1 1 1 1 2 
`
    bullet = img`
6 6 5 5 5 5 4 
f f c c c b 9 
f f c c c b 9 
6 6 5 5 5 4 4 
6 5 5 5 5 5 4 
6 5 5 5 5 5 4 
6 5 5 5 5 5 4 
6 5 5 5 5 4 4 
6 6 5 5 5 4 4 
6 6 5 5 5 4 4 
. 6 5 5 e 4 . 
. . 6 5 4 . . 
`;
    bulletDisabled = img`
b b a a a a 8 
f f c c c b 9 
f f c c c b 9 
b b a a a 8 8 
b a a a a a 8 
b a a a a a 8 
b a a a a a 8 
b a a a a 8 8 
b b a a a 8 8 
b b a a a 8 8 
. b a a e 8 . 
. . b a 8 . . 
`;

	constructor() {
		this.draw();
        this.drawLeftEnergy(14);
        this.drawLeftBullets(3);
	}

	draw() {
        this.battery = image.create(7, 54);
        sprites.create(this.battery).setPosition(7, 43);
        sprites.create(this.energy).setPosition(7, 9);
        this.bullets = [
            sprites.create(this.bullet),
            sprites.create(this.bullet),
            sprites.create(this.bullet),
        ];
        this.bullets.forEach((bullet, i) => bullet.setPosition(7, 82 + i*14));
	}

    drawLeftEnergy(count: number){
        for(let i = 0; i < 14; i++) {
            this.battery.fillRect(0, 4*i, 7, 2, 14 -i > count ? 11 : 2);
        }
    }

    drawLeftBullets(count: number) {
        this.bullets.forEach((bullet, i) => bullet.setImage(this.bullets.length - i > count ? this.bulletDisabled : this.bullet));
    }

}
