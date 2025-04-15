class Address {
    constructor(street, city, state, zip) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

class Company {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

let address = new Address("123 Main St", "Springfield", "IL", "62123");
let company = new Company("Acme Corp", address);

for (let key in company) {
    console.log(key + ': ', company[key]);
}

company.address.city = "Detroit";
console.log(company.address.city);

company.employees = [
    {name: "Kustik Mei", age: 21},
    {name: "Mustik Kei", age: 18},
    {name: "Dmitriy Chumakin", age: 22}
];

console.log(company.employees[0].name);