function printEvenNumbers(number, start = 2) {
    if (start <= number) {
        console.log(start);
        printEvenNumbers(number, start + 2);
    }
}

printEvenNumbers(15);