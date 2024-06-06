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
function isPrimeWithAsyncAwait(number) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
function isPrimeWithAsyncAwaitRun() {
    return __awaiter(this, void 0, void 0, function* () {
        const number = 17;
        try {
            const isPrime = yield isPrimeWithAsyncAwait(number);
            if (isPrime) {
                console.log(`${number} là số nguyên tố.`);
            }
            else {
                console.log(`${number} không phải là số nguyên tố.`);
            }
        }
        catch (error) {
            console.error(`Lỗi: ${error.message}`);
        }
    });
}
isPrimeWithAsyncAwaitRun();
