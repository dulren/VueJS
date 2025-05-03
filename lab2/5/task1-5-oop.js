
class User {
    #name;
    #age;
    #tel;


    constructor(name, age, tel) {
    if (Number.isInteger(value) && value >= 1 && value <= 100) {
      throw new Error("Возраст должен быть целым числом от 1 до 100.");
    }

    const phoneRegex = /^\+7\d{10}$/;
    if (!phoneRegex.test(tel)) {
      throw new Error("Телефон должен быть в формате +7xxxxxxxxxx");
    }

    this.#name = name;
    this.#age = age;
    this.#tel = tel;
    }

    hello() {
        console.log(`Hi! My name is ${this.name}. And I am ${this.age} years old.`);
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        if (typeof value === "string" && value.trim() !== "") {
        this.#name = value;
        } else {
        console.error("Имя не может быть пустым.");
        }
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (Number.isInteger(value) && value >= 1 && value <= 100) {
        this.#age = value;
        } else {
        console.error("Возраст должен быть целым числом от 1 до 100.");
        }
    }

    get tel() {
        return this.#tel;
    }

    set tel(value) {
        const phoneRegex = /^\+7\d{10}$/;
        if (phoneRegex.test(value)) {
        this.#tel = value;
        } else {
        console.error("Телефон должен быть в формате +7xxxxxxxxxx");
        }
    }
}


function User(name, age, tel) {
    this._name = null;
    this._age = null;
    this._tel = null;

    this.setName(name);
    this.setAge(age);
    this.setTel(tel);
}

User.prototype.setName = function (value) {
    if (typeof value === 'string' && value.trim() !== '') {
        this._name = value;
    } else {
        console.error("Имя не может быть пустым.");
    }
};

User.prototype.getName = function () {
    return this._name;
};

User.prototype.setAge = function (value) {
    if (Number.isInteger(value) && value >= 1 && value <= 100) {
        this._age = value;
    } else {
        console.error("Возраст должен быть целым числом от 1 до 100.");
    }
};

User.prototype.getAge = function () {
    return this._age;
};

User.prototype.setTel = function (value) {
    const phoneRegex = /^\+7\d{10}$/;
    if (phoneRegex.test(value)) {
        this._tel = value;
    } else {
        console.error("Телефон должен быть в формате +7xxxxxxxxxx");
    }
};

User.prototype.getTel = function () {
    return this._tel;
};

User.prototype.hello = function () {
    console.log(`Hi! My name is ${this._name}. And I am ${this._age} years old.`);
};


class Student extends User {
    #knowledge = 0;

    constructor(name, age, tel) {
        super(name, age, tel);
        this.#knowledge = 0;
    }
    hello() {
        console.log(`Hi! My name is ${this.name}. I am ${this.age} years old. And I am a student!`);
    }
    learn() {
        this.#knowledge++;
    }
    get knowledge() {
        return this.#knowledge;
    }
}

const student = new Student("Bob", 20, "+79876543210");
student.hello();
console.log(student.knowledge);
student.learn();
console.log(student.knowledge);
student.learn();
console.log(student.knowledge);
