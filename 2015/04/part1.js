const fs = require('fs');
const crypto = require('crypto');

function solve(inputFile) {
    const key = fs.readFileSync(inputFile, 'utf-8');

    let hash;
    let stringToHash;

    let i = -1;

    while(hash?.substring(0, 5) !== '00000') {
        i++;
        stringToHash = `${key}${i}`;
        hash = crypto.createHash('md5').update(stringToHash).digest('hex');
    }

    return i;
}

if (require.main === module) {
    console.log(solve(__dirname + '/input.txt'));
}

module.exports = solve;