const firstRow = 'mom washed the window';
const secondRow = 'dog man friend';

function getRow(firstRow, secondRow) {
    let firstRowCounter = 0;
    let secondRowCounter = 0;
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) === 'o') {
            firstRowCounter++;
        }
    }
    for (let i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) === 'o') {
            secondRowCounter++;
        }
    }
    if (firstRowCounter > secondRowCounter) {
        return firstRow;
    } else {
        return secondRow;
    }
}

console.log(getRow(firstRow, secondRow));