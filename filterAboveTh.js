// #5 Filter above a threshold
// filterAbove([6, 2, 3, 1, 4, 7], 3) => [6, 4, 7]
// filterAbove([1, 2, 3], 4) => []

function filterAbove(arr, th) {
    const aboveThresArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > th) aboveThresArr.push(arr[i]);
    }
    return aboveThresArr
}

// console.log(filterAbove([6, 2, 3, 1, 4, 7], 3));
// console.log(filterAbove([1, 2, 3], 4));
