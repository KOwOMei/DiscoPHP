class Product {
    constructor(name, weight, price) {
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
}

const fruitsArray = ["Яблоко", "Банан", "Вишня", "Апельсин"];
const newFruitsArray = fruitsArray.filter(item => item !== "Банан");
console.log("Оригинал:", fruitsArray);
console.log("Новый массив:", newFruitsArray);

const newFruit = "Киви";
const newAddFruitsArray = [newFruit, ...fruitsArray];
console.log("\nНовый массив с добавленным элементом:", newAddFruitsArray);

const product = new Product("Молоко 'Домашнее'", 1.0, 80);
product.details = { origin: "Фермерское", expiry: "7 дней" };

console.log("\nДо заморозки:", product);

Object.freeze(product);

product.name = "Молоко 'Городское'"; 
product.price = 90;                 
product.discount = 5;               

product.details.origin = "Завод";

console.log("\nПосле заморозки и попытки изменения:", product);
console.log("\nОбъект заморожен? - ", Object.isFrozen(product));