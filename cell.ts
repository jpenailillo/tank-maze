// enum CellType {
//   Path = 0,
//   Obstacle = 1,
//   Battery = 2,
// }

enum CellType {
  Vertical = 0,
  VerticalLeft = 1,
  VerticalRight = 2,
  Horizontal = 3,
  HorizontalUp = 4,
  HorizontalDown = 5,
  TopLeft = 6,
  TopRight = 7,
  BottomLeft = 8,
  BottomRight = 9,
  All = 10,
};

function getPathCell(cellType: CellType, position: [number, number]) {
	const cellImage = image.create(15, 15);
	const cellSprite = sprites.create(cellImage, SpriteKind.Player);

	switch (cellType) {
		case CellType.Vertical:
			cellImage.drawLine(7, 0, 7, 15, 9);
			break;
		case CellType.VerticalLeft:
			cellImage.drawLine(7, 0, 7, 15, 9);
			cellImage.drawLine(0, 7, 15, 7, 9);
			break;
		case CellType.VerticalRight:
			cellImage.drawLine(7, 0, 7, 15, 9);
			cellImage.drawLine(0, 7, 15, 7, 9);
			break;
		case CellType.Horizontal:
			cellImage.drawLine(0, 7, 15, 7, 9);
			break;
		case CellType.HorizontalUp:
			cellImage.drawLine(0, 7, 15, 7, 9);
			cellImage.drawLine(7, 0, 7, 15, 9);
			break;
		case CellType.HorizontalDown:
			cellImage.drawLine(0, 7, 15, 7, 9);
			cellImage.drawLine(7, 0, 7, 15, 9);
			break;
		case CellType.TopLeft:
			cellImage.drawLine(0, 7, 15, 7, 9);
			cellImage.drawLine(7, 0, 7, 15, 9);
			cellImage.drawLine(0, 0, 15, 15, 9);
			break;
		case CellType.TopRight:
			cellImage.drawLine(0, 7, 15, 7, 9);
			cellImage.drawLine(7, 0, 7, 15, 9);
			cellImage.drawLine(0, 15, 15, 0, 9);
			break;
		case CellType.BottomLeft:
			cellImage.drawLine(0, 7, 15, 7, 9);
			cellImage.drawLine(7, 0, 7, 15, 9);
			cellImage.drawLine(0, 15, 15, 0, 9);
			break;
		case CellType.BottomRight:
			cellImage.drawLine(0, 7, 15, 7, 9);
			cellImage.drawLine(7, 0, 7, 15, 9);
			cellImage.drawLine(0, 0, 15, 15, 9);
			break;
		case CellType.All:
			cellImage.drawLine(0, 0, 15, 15, 9);
			cellImage.drawLine(0, 15, 15, 0, 9);
			break;
	}

	cellSprite.setImage(cellImage);
	return cellSprite;
}

type Position = [number, number];

class Cell {
  type: CellType;
	position: Position;
	sprite: Sprite;

  constructor(type: CellType, offset: Position, position: Position) {
    this.type = type;
		this.position = position;
		this.sprite = getPathCell(type, [offset[0] + position[0], offset[1] + position[1]]);
		this.sprite.setPosition(12 + this.position[0] * 15, 4 + this.position[1] * 15);
	}

	draw() {

	}
}
