const fs = require('fs');

function solve(inputFile) {
    const data = fs.readFileSync(inputFile, 'utf-8');

    return data.split('').reduce((acc, current) => acc + (current === '(' ? 1 : -1), 0);
}

if (require.main === module) {
    console.log(solve(__dirname + '/input.txt'));
}

module.exports = solve;