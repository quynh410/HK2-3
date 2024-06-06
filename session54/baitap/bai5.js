"use strict";
function isPrimeWithPromise(number) {
    return new Promise((resolve, reject) => {
        if (typeof number !== 'number' || !Number.isInteger(number)) {
            return reject(new Error("Tham số phải là một số nguyên."));
        }
        if (number < 2) {
            return resolve(false);
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return resolve(false);
            }
        }
        return resolve(true);
    });
}
let number = 17;
isPrimeWithPromise(number)
    .then(isPrime => {
    if (isPrime) {
        console.log(`${number} là số nguyên tố.`);
    }
    else {
        console.log(`${number} không phải là số nguyên tố.`);
    }
});
