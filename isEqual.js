function isEqual(first, second) {
    if (first === second) return true;
    if (typeof first !== "object" || typeof second !== "object") return false;
    if (Object.keys(first).length !== Object.keys(second).length) return false;
    if (Array.isArray(first) !== Array.isArray(second)) return false;

    for (const key in first) {
        if (!isEqual(first[key], second[key])) return false;
    }

    return true;
}


module.exports = {
    isEqual
}