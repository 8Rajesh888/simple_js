function calcCompoundInterest(principalAmount, rateOfInterest, numberOfYears) {
    return principalAmount * (1 + (rateOfInterest / 100)) ** numberOfYears;
}

console.log(calcCompoundInterest(1000, 10, 2));
