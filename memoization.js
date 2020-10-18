// returns the nth number in the fibonacci sequence
const fibonacci = (n) => {
    return n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));

const fibonacciMemoized = (n) => {
    const memo = new Map();

    const fib = (n) => {
        let number;

        if (n in memo) {
            memo.set(n, number);
        } else {
            n === 0 || n === 1 ? number = n : number = fib(n - 1) + fib(n - 2);
        }

        return number;
    }

    return fib(n);
}

console.log(fibonacciMemo(4));