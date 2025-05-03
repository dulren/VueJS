interface Observer {
    update(message: string): void;
}
  
interface Subject {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(message: string): void;
}
  
class NewsAgency implements Subject {
    private observers: Observer[] = [];
  
    subscribe(observer: Observer): void {
      this.observers.push(observer);
    }
  
    unsubscribe(observer: Observer): void {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify(message: string): void {
      for (const observer of this.observers) {
        observer.update(message);
      }
    }
  
    publishNews(news: string): void {
      console.log(`Publishing: ${news}`);
      this.notify(news);
    }
}
  
class UserObserver implements Observer {
    constructor(private name: string) {}

    update(message: string): void {
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
