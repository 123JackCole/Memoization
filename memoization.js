// returns the nth number in the fibonacci sequence
const fibonacci = (n) => {
    return n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

