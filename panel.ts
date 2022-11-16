interface IPanelConfig {
	x: number;
	y: number;
};

class Panel {
	config: IPanelConfig;

	constructor(config: IPanelConfig) {
		this.config = config;
		this.draw();
	}

	draw() {
		const background = image.create(40, 220);
		background.fill(13);
		sprites.create(background).setPosition(this.config.x, this.config.y);
	}


}
