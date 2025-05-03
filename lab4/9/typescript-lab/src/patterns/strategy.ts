interface SortStrategy {
    sort(data: number[]): number[];
}
  
class BubbleSort implements SortStrategy {
    sort(data: number[]): number[] {
      console.log("Using Bubble Sort");
      return [...data].sort(); 
    }
}
  
class QuickSort implements SortStrategy {
    sort(data: number[]): number[] {
      console.log("Using Quick Sort");
      return [...data].sort((a, b) => a - b);
    }
}
  
class Sorter {
    constructor(private strategy: SortStrategy) {}
  
    setStrategy(strategy: SortStrategy): void {
      this.strategy = strategy;
    }
  
    sort(data: number[]): number[] {
      return this.strategy.sort(data);
    }
}
  
const sorter = new Sorter(new BubbleSort());
console.log(sorter.sort([5, 2, 9]));

sorter.setStrategy(new QuickSort());
console.log(sorter.sort([5, 2, 9]));
