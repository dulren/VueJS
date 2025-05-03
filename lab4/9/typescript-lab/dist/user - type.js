"use strict";
class UserWithType {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}
const user2 = new UserWithType("Bob", 30);
user2.hello();
