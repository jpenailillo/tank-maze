
//% color=190 weight=100 icon="\uf1ec" block="Movimientos"
//% groups=['LED matrix', 'Control flow', 'others']
namespace movimientos {
    //% block
    export function avanzar(): void {
        tank.move();
        basic.pause(250);
    }

    //% block
    export function girarDerecha(): void {
        tank.rotateRight();
        basic.pause(250);
    }

    //% block
    export function girarIzquierda(): void {
        tank.rotateLeft();
        basic.pause(250);
    }

    //% block
    export function disparar(): void {
        tank.shoot();
        basic.pause(250);
    }
}