class Product {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
}

let product = new Product("Пиво \'Новое счастье\'", 0.5, 1000);
let fakeProduct = product;

product.name = "Пиво \'Старая грусть\'";
console.log(product.name);

let product2 = new Product("Газировка \'!кола\'", 0.33, 150);
product2.origin = {country: "Россия", city: "Москва" };
let copyProduct2 = Object.assign({}, product2);
copyProduct2.name = "Газировка \'Спрайт\'";
copyProduct2.origin = {country: "Китай", city: "Шанхай" };
console.log(product2.name);
console.log(product2.origin);

let product3 = new Product("Вода \'Чистая правда\'", 0.5, 50);
let deepCopyProduct3 = JSON.parse(JSON.stringify(product3));
deepCopyProduct3.name = "Вода \'Грязная ложь\'";
console.log(product3.name);
console.log(deepCopyProduct3.name);