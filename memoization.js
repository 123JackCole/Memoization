// returns the nth number in the fibonacci sequence
const fibonacci = (n) => {
    return n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));

const fibonacciMemoized = (n) => {
    const memo = new Map();

    const fib = (n) => {
        let number;

        if (memo.has(n)) {
            memo.set(n, number);
        } else {
            n === 0 || n === 1 ? number = n : number = fib(n - 1) + fib(n - 2);
        }

        return number;
    }

    return fib(n);
}

console.log(fibonacciMemoMultiple(4));

// memoization with multiple variables
const fibonacciMemoizedMultiple = (data) => {
    const memo = new Map();

    const fib = (dimension, data) => {
        let number;

        memo.set(memo[dimension] || new Map());

        if (memo.has(dimension) && memo[dimension].has(data)) {
            memo[dimension].set(data, number);
        } else {
            data === 0 || data === 1 ? number = data : number = fib(dimension, data - 1) + fib(dimension, data - 2);
        }

        return number;
    }

    return fib(data);
}

console.log(fibonacciMemoMultiple(4));

