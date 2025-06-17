/**
 * @file stack-queue.js
 * @description 手动实现JavaScript中的栈和队列
 * @author Yujie Liu
 * @since 2025-06-17 15:49:12
 */
//JavaScript没有内置的双链表，所以直接用数组来代替即可
class Stack { 
    constructor(){ 
        this.list = [];
    }
    //push：时间复杂度O(1)
    push(value) { 
        this.list.push(value);
    }
    //pop: 时间复杂度O(1)
    pop(value) { 
        return this.list.pop();
    }
    //peek: 时间复杂度O(1)
    peek() { 
        return this.list[this.list.length - 1];
    }
    //size: 时间复杂度O(1)
    size() { 
        return this.list.length;
    }
}

class Queue { 
    constructor() { 
        this.list = [];
    }
    //push:时间复杂度O(1)
    push(value) { 
        this.list.push(value);
    }
    //pop: 时间复杂度O(N): 如果我们使用链表可以让时间复杂度为O(1)
    pop() { 
        return this.list.unshift();
    }
    //peek: 时间复杂度O(1)
    peek() { 
        return this.list[0];
    }
    //size: 时间复杂度O(1)
    size() { 
        return this.list.length;
    }
}

function stackQueue() {
    console.log('Hello, JavaScript!');
}

 stackQueue();
