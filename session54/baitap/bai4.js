"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sumWithAsyncAwait(numbers) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function runSumWithAsyncAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        const numbersArray = [1, 2, 3, 4, 5];
        try {
            const sum = yield sumWithAsyncAwait(numbersArray);
            console.log(`Tổng của các số trong mảng là: ${sum}`);
        }
        catch (error) {
            console.error(`Lỗi: ${error.message}`);
        }
    });
}
runSumWithAsyncAwait();
