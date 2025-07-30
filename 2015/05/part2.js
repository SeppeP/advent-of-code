const fs = require('fs');

function solve(inputFile) {
    const children = fs.readFileSync(inputFile, 'utf-8').split('\n');

    const niceList = children.filter(child => {
    const pairs = []
        let condition2Set = false;

        for (let i = 0; i < child.length - 1; i++) {
            const pair = `${child[i]}${child[i + 1]}`;
            pairs.push(pair);
            if(child[i] === child[i + 2]) condition2Set = true
            if (child[i] === child[i + 1] && child[i + 1] === child[i + 2]) i++;
        }

        const duplicatedPairs = pairs.filter((item, index) => pairs.indexOf(item) !== index)

        return duplicatedPairs.length > 0 && condition2Set;
    });



    return niceList.length;
}

if (require.main === module) {
    console.log(solve(__dirname + '/input.txt'));
}

module.exports = solve;