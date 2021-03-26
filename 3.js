"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    }, {
        id: 1,
        price: 1000,
    },
];

function discount(priceDiscount) {
    let percent = priceDiscount.price - (priceDiscount.price / 100 * 15);
    console.log("Скидка в 15% от суммы " + priceDiscount.price + " составит: " + percent);
    return percent;
};

products.forEach(discount);