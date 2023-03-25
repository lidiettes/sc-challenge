const maxX = 5;
const maxY = 5;

const mowers = [
    {
        x: 1,
        y: 2,
        orientation: 'N'
    },
    {
        x: 3,
        y: 3,
        orientation: 'E'
    }
];

const instructions = [
    'LMLMLMLMM',
    'MMRMMRMRRM'
];

module.exports = { maxX, maxY, mowers, instructions };