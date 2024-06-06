function sumWithPromise(numbers: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(numbers)) {
            return reject(new Error("Đầu vào phải là một mảng các số nguyên."));
        }
        const allNumbers = numbers.every(number => typeof number === 'number' && Number.isInteger(number));

        if (!allNumbers) {
            return reject(new Error("Tất cả các phần tử trong mảng phải là số nguyên."));
        }
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        resolve(sum);
    });
}
let numbersArray: number[] = [1, 2, 3, 4, 5];
sumWithPromise(numbersArray)
    .then(sum => {
        console.log(`${sum}`);
    })