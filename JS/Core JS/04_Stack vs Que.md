# Stack

- A stack normally is a structure of sequential and ordered elements and it’s based on the principle of last in first out (LIFO). 
- A stack is a linear data structure, which means that all elements are arranged in sequential order.
- The array methods that you are going to use, push and pop, will have a time complexity of O(1).
- which means that they will run efficiently and will have the best performance possible.

# Queue
- A queue is a linear structure of sequential and ordered elements, similar to a stack, with a difference that it works based on the principle of first in first out (FIFO).
- Similar to a stack, we have a linear data structure, which means that all the operations in a queue can only happen at one end of the structure.
- The shift method has a time complexity of O(n).
----------------------------------------------------------------------------------------------------------------------------------------------------------------



스택 - LIFO (Last In First Out)
- 출입구가 하나뿐인 데이터 구조
- 비어있는 스택에 순서대로 데이터 a,b,c,d를 저정했다면 꺼낼 때는 반대로 d,c,b,a의 순서대로 꺼낸다.
- 저장할 수 있는 데이터 스택이 넘치면 엔진에서 RangeError: Maximum call stack size exceeded 에러를 던진다

```JS
class Stack {
  constructor() {
    this.arr = [];
  }
  //push(item): item 하나를 스택의 가장 윗 부분에 추가한다.
  push(value) {
    this.arr.push(value);
  }
  //pop(): 스택에서 가장 위에 있는 항목을 제거한다.
  pop() {
    return this.arr.pop();
  }
  //peek(): 스택의 가장 위에 있는 항목을 반환한다.
  peek() {
    if (this.arr.length === 0) return null;
    return this.arr[this.arr.length - 1];
  }
  getSize() {
    return this.arr.length;
  }
  //isEmpty(): 스택이 비어 있을 때에 true를 반환한다.
  isEmpty() {
    return this.getSize() === 0;
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
stack.push(7);
console.log(stack); // 3,5,7
console.log(stack.peek()); // 7
console.log(stack.getSize()); // 3
stack.pop();
stack.pop();
stack.pop();
console.log(stack); // []
console.log(stack.isEmpty()); // true
```


큐 - FIFO (First in First out)
- 한쪽은 입구, 한쪽은 출구를 담당하는 양쪽 데이터 구조
- 비어있는 큐에 순서대로 데이터 a,b,c,d를 저정했다면 꺼낼 때도 a,b,c,d의 순서대로 꺼낸다.
```JS
class Queue {
  constructor() {
    this.arr = [];
  }
  //push(item):
  push(value) {
    this.arr.push(value);
  }
  //shift(): 
  shift() {
    return this.arr.shift();
  }
  //peek():
  peek() {
    if (this.arr.length === 0) return null;
    return this.arr[this.arr.length - 1];
  }
  getSize() {
    return this.arr.length;
  }
  //isEmpty(): .
  isEmpty() {
    return this.getSize() === 0;
  }
}

const queue = new Queue();
queue.push(3);
queue.push(5);
queue.push(7);
console.log(queue); // 3,5,7
console.log(queue.peek()); // 7
console.log(queue.getSize()); // 3
queue.shift();
console.log(queue); // []
console.log(queue.isEmpty()); // true
```
