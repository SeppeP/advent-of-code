const fs = require('fs');

function solve(inputFile) {
    const children = fs.readFileSync(inputFile, 'utf-8').split('\n');

    const niceList = children.filter(child => {
        const condition1 = child.split('').filter(letter => {
            return ['a', 'e', 'i', 'o', 'u'].includes(letter);
        }).length >= 3;

        const condition2 = Array.isArray(child.match(/(.)\1/));

        const condition3 = !child.includes('ab') && !child.includes('cd') && !child.includes('pq') && !child.includes('xy');

        return condition1 && condition2 && condition3;

    });
    return niceList.length;
}

if (require.main === module) {
    console.log(solve(__dirname + '/input.txt'));
}

module.exports = solve;