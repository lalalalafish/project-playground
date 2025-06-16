/**
 * @file circle-array.js
 * @description 手动实现环形数组
 * @author Yujie Liu
 * @since 2025-06-16 23:13:03
 */

//虽然数组在物理上不是循环的，但是我们可以在逻辑上实现循环（求模运算）
//环形数组的优势在于头尾部分的快捷操作，更多用来实现队列，不太适合做动态数组，也不太关注中间元素的随机访问；
//循环的意义在于：循环队列/循环缓冲区

class CircleArray {
  constructor(size = 1) {
    this.size = size;
    this.arr = new Array(size); //存储空间
    //左闭右开
    this.start = this.end = 0;
    this.count = 0; //定义
  }
  //工具函数
  resize(newSize) {
    let newArr = new Array(newSize);
    for (let i = 0; i < this.count; i++) {
      newArr[i] = this.arr[(this.start + i) % this.size];
    }
    this.arr = newArr;
    //重置指针
    this.start = 0;
    this.end = this.count;
    this.size = newSize;
  }
  isFull() {
    return this.count === this.size;
  }
  isEmpty() {
    return this.count === 0;
  }
  getSize() {
    return this.size;
  }
  //增加-头元素-时间复杂度O(1)
  addFirst(value) {
    if (this.isFull) this.resize(this.size * 2);
    //这里用this.size防止出现负数
    this.start = (this.start - 1 + this.size) % this.size;
    this.arr[this.start] = value;
    this.count++;
  }
  //增加-尾元素-时间复杂度O(1)
  addLast(value) {
    if (this.isFull) this.resize(this.size * 2);
    this.arr[this.end % this.size] = value;
    this.end = (this.end + 1) % this.size;
    this.count++;
  }
  //删除-头元素-时间复杂度O(1)
  removeFirst() {
    if (this.isEmpty()) throw new Error("Array is empty");
    this.arr[this.start] = null;
    this.start = (this.start + 1) % this.size;
    this.count--;
  }
  //删除-尾元素-时间复杂度O(1)
  removeLast() {
    if (this.isEmpty()) throw new Error("Array is empty");
    this.end = (this.end - 1 + this.size) % this.size;
    this.arr[this.end] = null;
    this.count--;
    //缩容检查
    if (this.count > 0 && this.count == this.size / 4)
      this.resize(this.size / 2);
  }
  //获取头元素-时间复杂度O(1)
  getFirst() {
    if (this.isEmpty()) throw new Error("Array is Empty");
    return this.arr[this.start];
  }
  //获取尾元素-时间复杂度O(1)
  getLast() {
    if (this.isEmpty()) {
      throw new Error("Array is empty");
    }

    return this.arr[(this.end - 1 + this.size) % this.size];
  }
}

function circleArray() {
    const arr = new CircleArray(5);
    console.log(arr.isEmpty());
    console.log(arr.isFull());
    console.log(arr.getSize());
    arr.addFirst(10);
    console.log(arr.getFirst());
    arr.removeFirst();
    arr.addLast(90);
    console.log(arr.getLast());
    arr.removeLast();
}

circleArray();
