const maxX = 5;
const maxY = 5;

let mower = {
    x: 1,
    y: 2,
    orientation: 'N'
};



const instructions = 'LMLMLMLMM ';


function moveMower(mower, instructions) {
    for (let i = 0; i < instructions.length; i++) {
        let instruction = instructions[i];

        if (instruction === 'L') {
            // left
            switch (mower.direction) {
                case 'N':
                    mower.direction = 'W';
                    break;
                case 'W':
                    mower.direction = 'S';
                    break;
                case 'S':
                    mower.direction = 'E';
                    break;
                case 'E':
                    mower.direction = 'N';
                    break;
            }
        } else if (instruction === 'R') {
            // right
            switch (mower.direction) {
                case 'N':
                    mower.direction = 'E';
                    break;
                case 'E':
                    mower.direction = 'S';
                    break;
                case 'S':
                    mower.direction = 'W';
                    break;
                case 'W':
                    mower.direction = 'N';
                    break;
            }
        } else if (instruction === 'M') {
            // go straight
            switch (mower.direction) {
                case 'N':
                    mower.y++;
                    break;
                case 'E':
                    mower.x++;
                    break;
                case 'S':
                    mower.y--;
                    break;
                case 'W':
                    mower.x--;
                    break;
            }

            // inside
            if (mower.x < 0 || mower.x > maxX || mower.y < 0 || mower.y > maxY) {
                throw new Error('Mower out of bounds');
            }
        }
    }
    return `${mower.x} ${mower.y} ${mower.orientation}`;
    
}


moveMower(mower, instructions);
console.log(moveMower(mower, instructions))



// server.listen(3000, function () {
//     console.log('La Aplicación está funcionando en el puerto 3000');
// });