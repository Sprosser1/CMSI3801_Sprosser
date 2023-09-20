class MyQueue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    // Enqueue operation: push element into stack1
    enqueue(value) {
      this.stack1.push(value);
    }
  
    // Dequeue operation: pop element from stack2 if it's not empty,
    // otherwise, pop all elements from stack1 to stack2 and then pop from stack2
    dequeue() {
      if (this.stack2.length === 0) {
        if (this.stack1.length === 0) {
          return null; // Queue is empty
        }
  
        // Move elements from stack1 to stack2
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      return this.stack2.pop();
    }
  
    // Peek at the front element without removing it
    peek() {
      if (this.stack2.length === 0) {
        if (this.stack1.length === 0) {
          return null; // Queue is empty
        }
  
        // Move elements from stack1 to stack2
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
  
      return this.stack2[this.stack2.length - 1];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.stack1.length + this.stack2.length;
    }
  }
  
  // Example usage:
  const queue = new MyQueue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log(queue.dequeue()); // 1
  console.log(queue.peek());    // 2
  console.log(queue.size());    // 2
  console.log(queue.isEmpty()); // false
  
  queue.enqueue(4);
  console.log(queue.dequeue()); // 2
  console.log(queue.dequeue()); // 3
  console.log(queue.dequeue()); // 4
  console.log(queue.isEmpty()); // true
  