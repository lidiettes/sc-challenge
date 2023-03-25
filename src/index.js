const { moveMower } = require('./utils/mower')
const { mowers, instructions } = require('./data/data');

let finalPositions = [];


for (let i = 0; i < mowers.length; i++) {
    const result = moveMower(mowers[i], instructions[i]);
    finalPositions.push(result);
    
}

console.log(finalPositions); 