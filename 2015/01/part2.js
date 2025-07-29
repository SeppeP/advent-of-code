const fs = require('fs');

function solve(inputFile) {
    const data = fs.readFileSync(inputFile, 'utf-8');

    let currentFloor = 0;
    let answer;

    for (let i = 0; i < data.split('').length; i++) {
        currentFloor = currentFloor + (data[i] === '(' ? 1 : -1);
        if (currentFloor === -1) {
            answer = i + 1;
            break;
        }
    }

    return answer
}

if (require.main === module) {
    console.log(solve(__dirname + '/input.txt'));
}

module.exports = solve;