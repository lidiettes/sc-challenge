const { maxX, maxY } = require('../data/data');

function moveMower(mower, instructions) {
    let currentX = mower.x;
    let currentY = mower.y;
    let currentOrientation = mower.orientation;

    for (let i = 0; i < instructions.length; i++) {
        let instruction = instructions[i];

        if (instruction === 'L') {
            // left
            switch (currentOrientation) {
                case 'N':
                    currentOrientation = 'W';
                    break;
                case 'W':
                    currentOrientation = 'S';
                    break;
                case 'S':
                    currentOrientation = 'E';
                    break;
                case 'E':
                    currentOrientation = 'N';
                    break;
            }
        } else if (instruction === 'R') {
            // right
            switch (currentOrientation) {
                case 'N':
                    currentOrientation = 'E';
                    break;
                case 'E':
                    currentOrientation = 'S';
                    break;
                case 'S':
                    currentOrientation = 'W';
                    break;
                case 'W':
                    currentOrientation = 'N';
                    break;
            }
        } else if (instruction === 'M') {
            // go straight
            switch (currentOrientation) {
                case 'N':
                    currentY++;
                    break;
                case 'E':
                    currentX++;
                    break;
                case 'S':
                    currentY--;
                    break;
                case 'W':
                    currentX--;
                    break;
            }

            // inside
            if (currentX < 0 || currentX > maxX || currentY < 0 || currentY > maxY) {
                throw new Error('Mower out of area');
            }
        }
    }

    return `${currentX} ${currentY} ${currentOrientation}`;
}


module.exports = { moveMower }