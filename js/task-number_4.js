"use strict"

const countsum = function(employees) {
    let sum = 0;
    for (let employ of Object.values(employees)) {
        sum += employ;
    }
    return sum;
};





console.log(countsum({})); // 0

console.log(
  countsum({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countsum({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400