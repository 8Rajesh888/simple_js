
// #7 Find the first index

// findIndex(["apple", "cake", "tea", "coffee", "tea"], "tea") => 2
//
// Do not modify the input array.

function findIndex(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) return i;
    }
    return "Not Found"
}

// console.log(findIndex(["apple", "hi", "cake", "tea", "coffee", "tea"], "tea"));
