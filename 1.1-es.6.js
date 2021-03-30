"use strict";

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - (this.price / 100 * 25);

    }
}
let product1 = new Product("iPhone", 200);
product1.make25PercentDiscount();

console.log(product1);