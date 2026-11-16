

// #10 Reverse Fibonacci

function fibonacci(num) {
    const fib = [];
    let x = 0;
    let y = 1;
    for (let i = 0; i < num; i++) {
        fib.push(x);
        let temp = x;
        x = y;
        y += temp;
    }
    return fib;
}

function reverse(arr) {
    const revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr
}

function reverseFibonacci(num) {
    return reverse(fibonacci(num));
}

// console.log(reverseFibonacci(5));

