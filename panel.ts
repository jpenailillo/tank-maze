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
		// const background = image.create(14, 220);
		// background.fill(4);
		// sprites.create(background).setPosition(6 + this.config.x, 8 + this.config.y);
        this.battery = image.create(7, 54);
        sprites.create(this.battery).setPosition(6, 44);
	}

    drawEnergy(count: number){
        // this.battery.fill(10)
        for(let i = 0; i < 14; i++) {
            // this.battery.fill(2)
            this.battery.fillRect(0, 4*i, 7, 2, 11);
        }
    }

}
