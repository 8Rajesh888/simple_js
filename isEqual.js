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

const primitiveTestCases = {
    type: "primitiveTestCases",
    cases: [
        ["Same Numbers", 1, 1, true],
        ["diff Numbers", 1, 0, false],
        ["Strings", "a", "a", true],
        ["both undefined", undefined, undefined, true],
        ["both not undefined", 10, undefined, false],
        ["both null", null, null, true],
        ["both not null", 10, null, false],
        ["boolean opp", true, false, false],
        ["boolean same", true, true, true],
        ["diff primitive", 1, "1", false],
    ]
}

const arrayTestCases = {
    type: "arrayTestCases",
    cases: [
        ["Empty Array", [], [], true],
        ["same Length", [1], [1], true],
        ["diff length more in b", [1], [1, 2], false],
        ["diff length more in a", [1, 2], [1], false],
        ["diff length ,one empty", [], [1, 2], false],
    ]
}

const nestedArrayTestCases = {
    type: "nestedArrayTestCases",
    cases: [
        ["both nested Empty Array", [[]], [[]], true],
        [" one nested Empty Array", [[]], [1], false],
        ["diff length more than 0", [1, [1, 2]], [1, 2], false],
        ["diff length ,one with 0", [1, []], [1, [1, 2]], false],
    ]
}

const testCases = [
    [1, 1, true],
    ["a", "a", true],
    [1, "1", false],

    [[], [], true],
    [[1], [1], true],
    [[1], [1, 2], false],

    [{ a: 1 }, { a: 1 }, true],
    [{ a: 1 }, { b: 1 }, false],
    [{ a: [1] }, { a: [1] }, true],
    [{ a: { b: 1 } }, { a: { b: 1 } }, true],
];

function runTests(testCases) {
    console.log(testCases.type);

    for (const [description, first, second, expected] of testCases.cases) {
        const result = isEqual(first, second);
        if (result === expected) {
            console.log(`✅`);
        } else {
            console.log(`❌`, description);
        }
    }
}

// console.log(isEqual({ a: 1, b: 2 }, { a: 1, b: 2 }))
runTests(primitiveTestCases);
runTests(arrayTestCases);
runTests(nestedArrayTestCases);







// if (typeof first === 'object' && first !== null && typeof second === 'object' && second !== null) {
//     const fkeys = Object.keys(first)
//     const skeys = Object.keys(second)
//     const fvalues = Object.values(first)
//     const svalues = Object.values(second)
//     const length = fvalues.length > svalues.length ?
//         fvalues.length : svalues.length;

//     for (let i = 0; i < length; i++) {
//         if (!(skeys.includes(fkeys[i]) && fvalues[i] === svalues[skeys.indexOf(fkeys[i])])) {
//             return false;
//         }
//     }
//     return true
// }

// {
//     if (typeof first === 'object' && first !== null && typeof second === 'object' && second !== null) {
//         const fEntries = Object.entries(first)
//         const sEntries = Object.entries(second)
//         const length = fEntries.length > sEntries.length ?
//             fEntries.length : sEntries.length;
//         for (let i = 0; i < length; i++) {
//             if (fEntries[i] === undefined || sEntries[i] === undefined || fEntries[i][0] !== sEntries[i][0] ||
//                 fEntries[i][1] != sEntries[i][1]
//             ) {
//                 return false
//             }
//         }
//         return true
//     }
// }