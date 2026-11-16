function areArrays(first, second) {
    return Array.isArray(first) !== Array.isArray(second);
}

function getObjectLenght(first) {
    return Object.keys(first).length;
}

function areNotSameLengthObjects(first, second) {
    return getObjectLenght(first) !== getObjectLenght(second);
}

function isEqual(first, second) {
    if (first === second) return true;

    if (typeof first !== "object" || typeof second !== "object") return false;

    if (areNotSameLengthObjects(first, second)) return false;

    if (areArrays(first, second)) return false;

    for (const key in first) {
        if (!(key in second)) return false;
        if (!isEqual(first[key], second[key])) return false;
    }

    return true;
}

module.exports = {
    isEqual
}