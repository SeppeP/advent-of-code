const fs = require('fs');

function findInstructionType(instruction) {
    if (instruction.includes('on')) {
        return 'on'
    } else if (instruction.includes('off')) {
        return 'off'
    } else return 'toggle'
}

function solve(inputFile) {
    const regex = /\b\d+,\d+\b/g;

    const instructions = fs.readFileSync(inputFile, 'utf-8').split('\n').map(instruction => {
        const type = findInstructionType(instruction);
        const numbers = instruction.match(regex).map(startend => startend.split(',').map(Number));
        return {
            type,
            startX: numbers[0][0],
            startY: numbers[0][1],
            endX: numbers[1][0],
            endY: numbers[1][1],
        }
    });

    const grid = []

    for (let y = 0; y < 1000; y++) {
        const row = []
        for (let x = 0; x < 1000; x++) {
            row[x] = false;
        }
        grid.push(row);
    }

    instructions.forEach(instruction => {
        for (let y = instruction.startY; y <= instruction.endY; y++) {
            const row = []
            for (let x = instruction.startX; x <= instruction.endX; x++) {
                if (instruction.type === 'on') {
                    grid[x][y] = true;
                } else if (instruction.type === 'off') {
                    grid[x][y] = false;
                } else if (instruction.type === 'toggle') {
                    grid[x][y] = !grid[x][y];
                }
            }
            grid.push(row);
        }
    })

    return grid.flat().filter(i => i === true).length;
}

if (require.main === module) {
    console.log(solve(__dirname + '/input.txt'));
}

module.exports = solve;