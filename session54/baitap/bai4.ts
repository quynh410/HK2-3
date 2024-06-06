async function sumWithAsyncAwait(numbers: number[]): Promise<number> {
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
async function runSumWithAsyncAwait() {
    const numbersArray: number[] = [1, 2, 3, 4, 5];

    try {
        const sum = await sumWithAsyncAwait(numbersArray);
        console.log(`Tổng của các số trong mảng là: ${sum}`);
    } catch (error) {
        console.error(`Lỗi: ${(error as Error).message}`);
    }
}
runSumWithAsyncAwait();
