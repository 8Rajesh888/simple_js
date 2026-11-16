// #1 AreEqual() 

function areEqual(array1, array2) {
    const length = array1.length > array2.length ? array1.length : array2.length

    for (let i = 0; i < length; i++) {
        if (Array.isArray(array1[i])) {
            if (areEqual(array1[i], array2[i])) continue;
        }

        if (array1[i] !== array2[i]) return false;
    }
    return true;
}

console.log(areEqual([1, 2, [3, [3, 4]], 4],
    [1, 2, [3, [3, 4]], 4]));
console.log(areEqual([1, 2, 3], [1, 2, 3, 4]))
