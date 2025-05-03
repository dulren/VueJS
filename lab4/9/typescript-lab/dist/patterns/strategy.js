"use strict";
class BubbleSort {
    sort(data) {
        console.log("Using Bubble Sort");
        return [...data].sort();
    }
}
class QuickSort {
    sort(data) {
        console.log("Using Quick Sort");
        return [...data].sort((a, b) => a - b);
    }
}
class Sorter {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    sort(data) {
        return this.strategy.sort(data);
    }
}
const sorter = new Sorter(new BubbleSort());
console.log(sorter.sort([5, 2, 9]));
sorter.setStrategy(new QuickSort());
console.log(sorter.sort([5, 2, 9]));
