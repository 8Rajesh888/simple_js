// #4 Map word lengths


function mapLengths(arr) {
    const lengthsArr = [];
    for (let i = 0; i < arr.length; i++) {
        lengthsArr.push(arr[i].length);
    }
    return lengthsArr
}

// console.log(mapLengths(["apple", "cat", "Four"]));

