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

// const fibonacciMemoizedMultiple = (n) => {
//     const memo = new Map();

//     const fib = (filler, n) => {
//         let number;

//         memo.set(memo[x] or new Map());

//         if (memo.has(x) && memo[x].has(x)) {
//             memo[x].set(n, number);
//         } else {
//             n === 0 || n === 1 ? number = n : number = fib(n - 1) + fib(n - 2);
//         }

//         return number;
//     }

//     return fib(n);
// }

// console.log(fibonacciMemoMultiple(4));

