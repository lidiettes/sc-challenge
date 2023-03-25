const { moveMower } = require('./utils/mower.js')
const { mowers, instructions } = require('./data/data.js');

let finalPositions = [];


for (let i = 0; i < mowers.length; i++) {
    const result = moveMower(mowers[i], instructions[i]);
    finalPositions.push(result);
    
}

console.log(finalPositions); 