// #2 reverse() 

function reverse(arr) {
    const revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr
}

console.log(reverse([
    116, 112, 108, 104, 100, 96, 92, 88, 84,
    80, 76, 72, 68, 64, 60, 56, 52, 48,
    44, 40, 36, 32, 28, 24, 20, 16, 12,
    8, 4, 0
]));
// console.log(reverse([]));
