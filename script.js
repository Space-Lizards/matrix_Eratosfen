function header() {
    const btn = document.querySelector('#btn');
    const out = document.querySelector('#output');
    const isPrime = (p) => {
        for (let i = 2; i <= Math.sqrt(p); i++) {
            if (p % i === 0) {
                return false;
            }
        }
        if (p == 0 || p == 1) {
            return false;
        }
        return true;
    }

    const erat = (p) => {
        const numbers = [];

        for (let j = 2; j <= p; j++) {
            if (isPrime(j)) {
                numbers.push(j);
            }
        }
        return numbers;
    }
    btn.addEventListener('click', function() {
        const input = parseInt(document.querySelector('#inputValue').value);
        const result = erat(input);
        out.textContent = result.join(', ');
    });
}
header();
