function isEqual(first, second) {
    if (typeof first !== typeof second) {
        return false
    }
    {
        if (typeof first === 'object' && first !== null && typeof second === 'object' && second !== null) {
            const fEntries = Object.entries(first)
            const sEntries = Object.entries(second)
            const length = fEntries.length > sEntries.length ?
                fEntries.length : sEntries.length;
            for (let i = 0; i < length; i++) {
                if (fEntries[i] === undefined || sEntries[i] === undefined || fEntries[i][0] !== sEntries[i][0] ||
                    fEntries[i][1] != sEntries[i][1]
                ) {
                    return false
                }
            }
            return true
        }
    }

    if (first !== second) {
        return false
    }
    return true
}

console.log(isEqual({ b: 1, a: undefined }, { a: undefined, b: 1 }));
