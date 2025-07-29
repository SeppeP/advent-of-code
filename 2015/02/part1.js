const fs = require('fs');

function solve(inputFile) {
    const data = fs.readFileSync(inputFile, 'utf-8').split('\n').map(dims => dims.split('x').map(Number));

    let totalSqrFeet = 0;

    for (let i = 0; i < data.length; i++) {
        const l = data[i][0];
        const w = data[i][1];
        const h = data[i][2];

        const lw = l*w;
        const lh = l*h;
        const wh = w*h;

        totalSqrFeet += 2*lw + 2*lh + 2*wh + Math.min(lw, lh, wh);
    }

    return totalSqrFeet;
}

if (require.main === module) {
    console.log(solve(__dirname + '/input.txt'));
}

module.exports = solve;