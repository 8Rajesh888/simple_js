function calcfactorial(num) {
    if (num > 0) {
        return num * calcfactorial(num - 1);
    }
    return 1;
}

console.log(calcfactorial(5));
