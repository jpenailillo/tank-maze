class Grid {
  x: number;
  y: number;
  width: number;
  height: number;
  size: number;

  constructor(
    x: number = 0,
    y: number = 0,
    width?: number,
    height?: number,
    size?: number
  ) {
    this.x = x;
    this.y = y;
    this.width = width || 9;
    this.height = height || 7;
    this.size = size || 15;
  }

  draw() {
    const gridImage = image.create(1 + this.size * 9, 1 + this.size * 7);
    const gridSprite = sprites.create(gridImage, SpriteKind.Player);

    for (let i = 0; i <= this.width; i++) {
      gridImage.drawLine(this.size * i, 0, this.size * i, gridImage.height, 9);
    }

    for (let i = 0; i <= this.height; i++) {
      gridImage.drawLine(0, this.size * i, gridImage.width, this.size * i, 9);
    }
    gridSprite.setPosition(12 + gridImage.width / 2, 4 + gridImage.height / 2);
  }
}
