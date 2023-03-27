
function moveMower(maxCoord, instructions) {
    //si mapeamos sabemos que instruction vaa a ser un array y va a retornar un array nuevo
    return instructions.map((instruction) => {
        let currentX = instruction.x;
        let currentY = instruction.y;
        let currentOrientation = instruction.orientation;
        //lo metemos en objeto para que no creen conflicto
        const decisionTree = {
            L: {
                N: () => { return "W" },
                W: () => { return "S" },
                S: () => { return "E" },
                E: () => { return "N" }
            },
            R: {
                N: () => { return "E" },
                W: () => { return "N" },
                S: () => { return "W" },
                E: () => { return "S" }
            },
            M: {
                N: () => { return { x: currentX, y: currentY + 1 } },
                W: () => { return { x: currentX - 1, y: currentY } },
                S: () => { return { x: currentX, y: currentY - 1 } },
                E: () => { return { x: currentX + 1, y: currentY } }
            },
        }

        Array.from(instruction.moves).forEach(move => {
            const response = decisionTree[move][currentOrientation]()
            if (response instanceof Object) {
                let { x, y } = response
                if (x < 0 || x > maxCoord.x || y < 0 || y > maxCoord.y) {
                    throw new Error('Mower out of area');
                }
                currentX = x
                currentY = y
            } else {
                currentOrientation = response
            }
        })
        return `The final coordinates of the mower are ${currentX}${currentY}${currentOrientation}`
    })
}

module.exports = { moveMower }