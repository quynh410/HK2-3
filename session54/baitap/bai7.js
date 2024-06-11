"use strict";
let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success!");
    }, 1000);
});
myFirstPromise
    .then(data => console.log(data))
    .catch(err => console.log(err));
