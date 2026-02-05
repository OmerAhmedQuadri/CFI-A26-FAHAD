function isPrime(num) {
    if (num < 2) {
        console.log('bro enter a proper number');
        return

    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }

    }
    return true

}

for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}