"use strict"

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];


const getAllPropValues = function (arr, prop) {
  const names = [];
  const quantitys = [];
  const prices = [];

  for (const prod of products) {
    names.push(prod.name);
    
    if (prop === prod.name) {
    console.log(names);
    }
          
    
  
    
  }
}


// const getAllProducts = function (products) {
//     const names = [];
//     for (const prod of products) {
//         console.log(prod);
//         names.push(prod.name)
//     }
//     return names;
// }
// console.log(getAllProducts(products));



console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []