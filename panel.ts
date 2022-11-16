interface IPanelConfig {
	x: number;
	y: number;
};

class Panel {
	config: IPanelConfig;
    battery: Image;

	constructor(config: IPanelConfig) {
		this.config = config;
		this.draw();
        this.drawEnergy(5);
	}

	draw() {
        this.battery = image.create(7, 54);
        sprites.create(this.battery).setPosition(6, 44);
        const energy = img`
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
        sprites.create(energy).setPosition(6, 9);
	}

    drawEnergy(count: number){
        for(let i = 0; i < 14; i++) {
            this.battery.fillRect(0, 4*i, 7, 2, 14 -i > count ? 11 : 2);
        }
    }

}
