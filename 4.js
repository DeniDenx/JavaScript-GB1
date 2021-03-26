"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",]
    }, {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];



// Честно скажу, что взял форму отсюда https://learn.javascript.ru/array-iteration
// И просто переделал под себя.

let onlyPhoto = products.filter(function (item) {
    return item.photos && item.photos.length > 0;
});

console.log(onlyPhoto);

/* Самостоятельно вышло так:
(Но за основу брал форму выше):
Тоже всё работает:

function photo(item) {
   let onlyPhoto = item.photos && item.photos.length > 0;
   return onlyPhoto;
};

console.log(products.filter(photo)); */


/*

До того как полез в Google, делал так:
Оно вроде как работало, но выдавало булевые значения (true, false, true)
Я так понимаю ошибка в том, что я в консоль выводил не то, верно?

function photo(item) {
    let onlyPhoto = item.photos && item.photos.length > 0;
    console.log(onlyPhoto);
    return;
}

products.filter(photo);

*/

//-------------------------//

// Задание 4.2


products.sort(function (a, b) {
    return a.price - b.price
})

console.log(products);