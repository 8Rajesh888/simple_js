// #3 Select the odd numbers

function selectOdds(arr) {
    const oddArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) oddArr.push(arr[i]);
    }
    return oddArr
}

// console.log(selectOdds([3, 2, 4, 5, 7]));
// console.log(selectOdds([2, 4, 6]));

