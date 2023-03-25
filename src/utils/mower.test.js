const { moveMower } = require('./mower');

describe("Given a demo test", () => {
    describe("When tests are executed", () => {
        describe("When is invoked", () => {
            test('the moveMower function is executed without errors', () => {
                const mower = { x: 0, y: 0, orientation: 'N' };
                const instructions = ['M', 'R', 'L'];
                expect(() => moveMower(mower, instructions)).not.toThrow();
            });
        });

        describe("And I want test movements", () => {
            test('Then should moves correctly to the north', () => {
                const mower = { x: 0, y: 0, orientation: 'N' };
                const instructions = ['M', 'M', 'M'];
                expect(moveMower(mower, instructions)).toBe('0 3 N');
            });

            test('Then should moves correctly to the east', () => {
                const mower = { x: 0, y: 0, orientation: 'E' };
                const instructions = ['M'];
                expect(moveMower(mower, instructions)).toBe('1 0 E');
            });

            test('Then should moves correctly to the south ', () => {
                const mower = { x: 1, y: 1, orientation: 'S' };
                const instructions = ['M'];
                expect(moveMower(mower, instructions)).toBe('1 0 S');
            });

            test('Then should moves correctly to the west', () => {
                const mower = { x: 1, y: 1, orientation: 'W' };
                const instructions = ['M'];
                expect(moveMower(mower, instructions)).toBe('0 1 W');
            });
        });

        describe("And I want test the area", () => {
            test('Then shouldnt move out of the area', () => {
                const mower = { x: 0, y: 0, orientation: 'S' };
                const instructions = ['M', 'M', 'M'];
                expect(() => moveMower(mower, instructions)).toThrow(/Mower out of area/);
            });
        })

    })
})