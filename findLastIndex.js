
// #8 Find the last index
// findLastIndex(["apple", "cake", "tea", "coffee", "tea", "pen"], "tea") => 4
//
// Do not modify the input array.

function findLastIndex(array, element) { }
function findLastIndex(arr, ele) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === ele) return i;
    }
    return "Not Found"
}

// console.log(findLastIndex(["apple", "hi", "cake", "tea", "coffee", "tea", "pen"], "tea"));
