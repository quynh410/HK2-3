async function isPrimeWithAsyncAwait(number: number): Promise<boolean> {
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
async function isPrimeWithAsyncAwaitRun() {
    const number: number = 17;

    try {
        const isPrime = await isPrimeWithAsyncAwait(number);
        if (isPrime) {
            console.log(`${number} là số nguyên tố.`);
        } else {
            console.log(`${number} không phải là số nguyên tố.`);
        }
    } catch (error) {
        console.error(`Lỗi: ${(error as Error).message}`);
    }
}
isPrimeWithAsyncAwaitRun();
