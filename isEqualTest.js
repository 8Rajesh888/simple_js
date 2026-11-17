const { isEqual } = require("./isEqual");

const primitiveTestCases = {
    type: "primitiveTestCases",
    cases: [
        ["Positive Same Numbers", 1, 1, true],
        ["Negative Same Numbers", -10, -10, true],
        ["diff Positive Numbers", 1, 0, false],
        ["one NAN", NaN, 0, false],
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
        ["same Length", [1], [1], true],
        ["Empty Array", [], [], true],
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

const objectTestCases = {
    type: "objectTestCases",
    cases: [
        ["Empty objects", {}, {}, true],
        ["one object", { a: 1 }, {}, false],
        ["same obj", { a: 1 }, { a: 1 }, true],
        ["diff obj", { a: 1 }, { a: 2 }, false],
        ["reversed obj", { a: 1, b: 2 }, { b: 2, a: 1 }, true],
        ["a is first", { a: undefined }, { b: 1 }, false],
        ["a is second", { b: 1 }, { a: undefined }, false],
    ]
}

const nestedObjectTestCases = {
    type: "nestedObjectTestCases",
    cases: [
        ["same obj in array", [{ a: [1] }], [{ a: [1] }], true],
        ["same array in obj", { a: [1] }, { a: [1] }, true],
        ["diff obj in array", [{ a: [1] }], [{ a: [1], b: 2 }], false],
        ["diff array in obj", { a: [1] }, { a: [1], b: [2] }, false],
    ]
}

function runTests(testCases) {
    let count = testCases.cases.length;

    console.log();
    console.log(testCases.type);

    for (const [description, first, second, expected] of testCases.cases) {
        const result = isEqual(first, second);
        if (!(result === expected)) {
            console.log(`❌`, description);
            count--;
        }
    }

    if (count === testCases.cases.length)
        console.log(`✅ all are working`);
    else
        console.log(`✅ other ${count} are working`);
}

runTests(primitiveTestCases);
runTests(arrayTestCases);
runTests(nestedArrayTestCases);
runTests(objectTestCases);
runTests(nestedObjectTestCases);