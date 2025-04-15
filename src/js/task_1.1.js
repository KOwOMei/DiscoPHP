class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

}

let user = new User("Eugene", 21, "mail.ru");

for (let key in user) {
    console.log(key + ': ' + user[key]);
}

user.email = "testmail@gmail.com";
user.isAdmin = true;
delete user.age;
console.log(user.hasOwnProperty('name'));

console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
    console.log(key + ': ' + user[key]);
}