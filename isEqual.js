function areArrays(first, second) {
    return Array.isArray(first) !== Array.isArray(second);
}

function hasSameLengthObjects(first, second) {
    return Object.keys(first).length !== Object.keys(second).length;
}

function isEqual(first, second) {
    if (first === second) return true;

    if (typeof first !== "object" || typeof second !== "object") return false;

    if (hasSameLengthObjects(first, second)) return false;

    if (areArrays(first, second)) return false;

    for (const key in first) {
        if (!isEqual(first[key], second[key])) return false;
    }

    return true;
}

module.exports = {
    isEqual
}

