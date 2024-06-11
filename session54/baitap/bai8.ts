function countDown(n: number): Promise<void> {
    return new Promise((resolve, reject) => {
        if (n < 1) {
            reject(new Error("lỗi"));
            return;
        }
        let intervalId = setInterval(() => {
            console.log(n);
            n--;
            if (n === 0) {
                clearInterval(intervalId);
                console.log("Hoàn thành quá trình đếm");
                resolve();
            }
        }, 1000);
    });
}
countDown(5)
.then(() => {
    console.log("Đếm ngược đã hoàn tất.");
})
.catch(error => {
    console.error(error.message);
});
