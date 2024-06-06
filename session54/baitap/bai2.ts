function divideNumbers(a: number, b: number): number {
    try {
        if (b === 0) {
            throw new Error("Không thể chia cho 0");
        }
        const result = a / b;
        console.log(`Kết quả: ${result}`);
        return result;
    } catch (error) {
        console.error(error.message);
        throw error;
    } finally {
        console.log("Kết thúc hàm divideNumbers()");
    }
}

try {
    const result = divideNumbers(10, 2);
    console.log(`Kết quả: ${result}`);
} catch (error) {
    console.error(error.message);
}
