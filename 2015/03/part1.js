const fs = require('fs');

function solve(inputFile) {
    const instructions = fs.readFileSync(inputFile, 'utf-8').split('');

    const housesDelivered = [[0, 0]]
    const currentPosition = [0, 0]

    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === '^') {
            currentPosition[1]++;
        } else if (instructions[i] === 'v') {
            currentPosition[1]--;
        } else if (instructions[i] === '>') {
            currentPosition[0]++;
        } else if (instructions[i] === '<') {
            currentPosition[0]--;
        }

        const alreadyDeliveredHouse = housesDelivered.find(house => house[0] === currentPosition[0] && house[1] === currentPosition[1]);

        if (!alreadyDeliveredHouse) {
            housesDelivered.push([...currentPosition]);
        }
    }

    return housesDelivered.length;
}

if (require.main === module) {
    console.log(solve(__dirname + '/input.txt'));
}

module.exports = solve;