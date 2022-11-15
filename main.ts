controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tank.shoot();
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tank.rotateLeft();
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tank.rotateRight();
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    tank.move();
})
let tank = new Tank(100, 100, Direction.Up);
let board  = new Board(1, 1);
