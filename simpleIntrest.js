function calcSimpleInterest(principalAmount, rateOfInterest, time) {
    return (principalAmount * rateOfInterest * time) / 100;
}

console.log(calcSimpleInterest(1000, 5, 2));