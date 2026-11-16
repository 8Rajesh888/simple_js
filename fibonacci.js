// #9 Fibonacci

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

// console.log(fibonacci(10));
