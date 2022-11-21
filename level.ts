interface ITankMazeLevel {
    start: [number, number];
    end: [number, number];
    road: boolean[][][];
    stones: boolean[][];
    gas: boolean[][];
}

const levels: { [key: number]: ITankMazeLevel } = {
    0: {
        start: [0, 1],
        end: [8, 3],
        road: [
            [
                [false, false, false, false],
                [false, true, true, true],
                [true, true, false, false],
                [true, true, false, true],
                [true, true, false, false],
                [true, true, false, true],
                [true, false, false, true],
            ],
            [
                [false, true, false, true],
                [true, true, true, true],
                [true, true, false, false],
                [true, true, true, false],
                [true, true, false, false],
                [true, false, true, true],
                [false, false, true, true],
            ],
            [
                [false, false, true, true],
                [false, false, true, true],
                [false, true, false, true],
                [true, true, false, true],
                [true, true, false, true],
                [true, true, true, false],
                [true, false, true, true],
            ],
            [
                [false, true, true, false],
                [true, true, true, true],
                [true, true, true, true],
                [true, true, true, true],
                [true, false, true, true],
                [false, true, false, true],
                [true, false, true, false],
            ],
            [
                [false, true, false, true],
                [true, true, true, true],
                [true, true, true, true],
                [true, false, true, true],
                [false, false, true, true],
                [false, true, true, false],
                [true, false, false, true],
            ],
            [
                [false, true, true, false],
                [true, true, true, false],
                [true, true, true, true],
                [true, true, true, true],
                [true, true, true, true],
                [true, true, false, true],
                [true, false, true, false],
            ],
            [
                [false, true, false, true],
                [true, true, false, false],
                [true, false, true, false],
                [false, true, true, false],
                [true, true, true, false],
                [true, true, true, true],
                [true, false, false, true],
            ],
            [
                [false, true, true, true],
                [true, true, false, false],
                [true, true, false, true],
                [true, true, false, true],
                [true, false, false, true],
                [false, true, true, false],
                [true, false, true, true],
            ],
            [
                [false, true, true, false],
                [true, true, false, false],
                [true, true, true, false],
                [true, false, true, true],
                [false, true, true, false],
                [true, true, false, false],
                [true, false, true, false],
            ],
        ],
        stones: [
            [false, false, false, false, false, true, false],
            [false, false, false, true, false, false, false],
            [false, true, false, false, false, false, true],
            [false, false, false, false, true, false, false],
            [false, true, false, true, false, false, false],
            [false, false, false, false, false, false, false],
            [false, true, false, true, false, true, false],
            [true, false, true, false, false, false, false],
            [false, true, false, false, true, true, true],
        ],
        gas: [
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, true],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, false],
            [false, false, false, false, false, false, true],
            [false, false, false, false, false, false, false],
        ],
    },
};
