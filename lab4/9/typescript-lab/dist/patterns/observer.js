"use strict";
class NewsAgency {
    constructor() {
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    notify(message) {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
    publishNews(news) {
        console.log(`Publishing: ${news}`);
        this.notify(news);
    }
}
class UserObserver {
    constructor(name) {
        this.name = name;
    }
    update(message) {
        console.log(`${this.name} received: ${message}`);
    }
}
const agency = new NewsAgency();
const alice = new UserObserver("Alice");
const bob = new UserObserver("Bob");
agency.subscribe(alice);
agency.subscribe(bob);
agency.publishNews("TypeScript 5.5 Released!");
agency.unsubscribe(bob);
agency.publishNews("Observer Pattern in Practice");
