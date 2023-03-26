const { moveMower } = require('./utils/mower')


const processArg = [...process.argv]
// quito las rutas primeras
const data = processArg.slice(2, process.argv.length)
console.log(data)

console.log("App started..");

//cogemos el 55 para saber los limites
const rightUpFinalCoord = data.slice(0, 1)
const maxCoord = {
    x: Number(rightUpFinalCoord[0].substring(0, 1)),
    y: Number(rightUpFinalCoord[0].substring(1, 2))
}
console.log(`Upper right point: { x: ${maxCoord.x} y: ${maxCoord.y} }`);

//formateamos instrucciones
const instructions = []
for (let i = 1; i < data.length; i += 2) {
    const move = {
        x: Number(data[i].substring(0, 1)),
        y: Number(data[i].substring(1, 2)),
        orientation: data[i].substring(2, 3),
        moves: data[i + 1]
    }
    instructions.push(move)
    console.log(`Parsed instruction are: ${JSON.stringify(move)}`);
}
//funcion final
try {
    const results = moveMower(maxCoord, instructions)
    results.forEach(result => {
        console.log(result)
    });
} catch (error) {
    console.log(error.message)
}
