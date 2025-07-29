const fs = require('fs');

function solve(inputFile) {
    const data = fs.readFileSync(inputFile, 'utf-8').split('\n').map(dims => dims.split('x').map(Number));

    let totalRibbonLength = 0;

    for (let i = 0; i < data.length; i++) {
        const l = data[i][0];
        const w = data[i][1];
        const h = data[i][2];

        const lwh = l*w*h;

        const ordered = [l, w, h].sort((a, b) => a - b);

        totalRibbonLength += (ordered[0] + ordered[1]) * 2 + lwh;
    }

    return totalRibbonLength;
}

if (require.main === module) {
    console.log(solve(__dirname + '/input.txt'));
}

module.exports = solve;