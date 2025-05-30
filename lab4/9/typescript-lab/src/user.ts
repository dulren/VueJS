interface IUser {
    name: string;
    age: number;
    hello(): void;
}
  
class User implements IUser {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    hello(): void {
      console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }
}

const user1 = new User("Alice", 25);
user1.hello();
