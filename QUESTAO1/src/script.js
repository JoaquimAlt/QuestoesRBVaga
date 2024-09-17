function verificarFibonacci(num) {
    let a = 0, b = 1;

    if (num === 0 || num === 1) {
        return true;
    }

    while (b <= num) {
        let next = a + b;
        a = b;
        b = next;

        if (b === num) {
            return true; 
        }
    }

    return false; 
}

let numero1 = 21;
let numero2 = 18;

if (verificarFibonacci(numero1)) {
    console.log(`${numero1} está na sequência de Fibonacci.`);
} else {
    console.log(`${numero1} não está na sequência de Fibonacci.`);
}

if (verificarFibonacci(numero2)) {
    console.log(`${numero2} está na sequência de Fibonacci.`);
} else {
    console.log(`${numero2} não está na sequência de Fibonacci.`);
}