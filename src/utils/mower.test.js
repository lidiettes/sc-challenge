const { moveMower } = require('./mower');

describe("MoveMower unit test", () => {
    const maxCoord = { x: 5, y: 5 };
    test('the moveMower function should run without errors if params are correct', () => {
        const instructions = [{ moves: 'MRL', x: 1, y: 2, orientation: 'N' }];
        expect(() => moveMower(maxCoord, instructions)).not.toThrow();
    });

    describe("And I want test movements", () => {
        test('The mowerMower function should correctly to the north', () => {
            const instructions = [{ moves: 'MMM', x: 0, y: 0, orientation: 'N' }];
            expect(moveMower(maxCoord, instructions)[0]).toBe('03N');
        });

        test('Then should moves correctly to the east', () => {
            const instructions = [{ moves: 'M', x: 0, y: 0, orientation: 'E' }];
            expect(moveMower(maxCoord, instructions)[0]).toBe('10E');
        });

        test('Then should moves correctly to the south ', () => {
            const instructions = [{ moves: 'M', x: 0, y: 2, orientation: 'S' }];
            expect(moveMower(maxCoord, instructions)[0]).toBe('01S');
        });

        test('Then should moves correctly to the west', () => {
            const instructions = [{ moves: 'M', x: 2, y: 0, orientation: 'W' }];
            expect(moveMower(maxCoord, instructions)[0]).toBe('10W');
        });
    });

    describe("And I want test the area", () => {
        test('Then shouldnt move out of the area', () => {
            const instructions = [{ moves: 'M', x: 5, y: 5, orientation: 'N' }];
            expect(() => moveMower(maxCoord, instructions)).toThrow("Mower out of area");
        });
    })


})