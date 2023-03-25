const { moveMower } = require('./mower');

test('the moveMower function is executed without errors', () => {
    const mower = { x: 0, y: 0, orientation: 'N' };
    const instructions = ['M', 'R', 'M'];

    expect(() => moveMower(mower, instructions)).not.toThrow();
});

test('moves correctly to the north', () => {
    const mower = { x: 0, y: 0, orientation: 'N' };
    const instructions = ['M', 'M', 'M'];

    expect(moveMower(mower, instructions)).toBe('0 3 N');
});

test('moves correctly to the east', () => {
    const mower = { x: 0, y: 0, orientation: 'E' };
    const instructions = ['M', 'R', 'M', 'R', 'M'];

    expect(moveMower(mower, instructions)).toBe('1 1 E');
});

test('doesnt move out of the area', () => {
    const mower = { x: 0, y: 0, orientation: 'S' };
    const instructions = ['M', 'M', 'M'];

    expect(() => moveMower(mower, instructions)).toThrow('Mower out of bounds');
});

test('moves correctly to the south ', () => {
    const mower = { x: 1, y: 1, orientation: 'S' };
    const instructions = ['M'];

    expect(moveMower(mower, instructions)).toBe('1 0 S');
});

test('moves correctly to the west', () => {
    const mower = { x: 1, y: 1, orientation: 'W' };
    const instructions = ['M'];

    expect(moveMower(mower, instructions)).toBe('0 1 W');
});