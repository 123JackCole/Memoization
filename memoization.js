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

console.log(fibonacciMemoized(4));

const fibonacciMemoizedMultiple = (data) => {
    const memo = new Map();

    const fib = (dimension, data) => {
        let number;

        memo.set(dimension, memo.get(dimension) || new Map());

        if (memo.has(dimension) && memo.get(dimension).has(data)) {
            number = memo[dimension].get(data);
        } else {
            data === 0 || data === 1 ? number = data : number = fib(dimension, data - 1) + fib(dimension, data - 2);
        }

        return number;
    }

    return fib('test', data);
}

console.log(fibonacciMemoizedMultiple(4));

