
// #6 Before above a threshold
// filterBelow([6, 2, 3, 1, 4, 7], 3) => [2, 1]
// filterBelow([1, 2, 3], 0) => []
//
// Do not modify the input array.

function filterBelow(arr, th) {
    const belowThresArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < th) belowThresArr.push(arr[i]);
    }
    return belowThresArr
}
// console.log(filterBelow([6, 2, 3, 1, 4, 7], 3));
// console.log(filterBelow([1, 2, 3], 4));
