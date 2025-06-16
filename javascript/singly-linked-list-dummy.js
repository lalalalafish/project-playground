/**
 * @file singly-linked-list-dummy.js
 * @description 使用虚拟节点来实现单链表
 * @author Yujie Liu
 * @since 2025-06-16 00:57:07
 */

class Node { 
    constructor(value) { 
        this.val = value;
        this.next = null;
    }
}

class SinglyLinkedListWithDummay { 
    constructor() { 
        this.head = new Node(null);//虚拟头节点
        this.tail = new Node(null);
        this.size = 0;
    }
    //查询
    getFirst() {
        this.isElementIndex(0);
        return this.head.next.val;
    }
    getLast() {
        this.isElementIndex(this.size - 1);
        return this.tail.val;
    }
    getValue(index) {
        this.isElementIndex(index);
        return this.getNode(index).val;
    }
    //修改
    setFirst(value) { 
        this.isElementIndex(0);
        this.head.next.val = value;
    }
    setLast(value) { 
        this.isElementIndex(this.size - 1);
        this.tail.val = value;
    }
    setValue(index, value) { 
        this.isElementIndex(index);
        let node = this.getNode(index);
        node.val = value;
    }
    //增加
    addFirst(value) { 
        const newNode = new Node(value);
        newNode.next = this.head.next;
        this.head.next = newNode;
        if (this.size == 0)
            this.tail = newNode;
        this.size++;
    }
    addLast(value) { 
        const newNode = new Node(value);


        this.tail.next = newNode;
        this.tail = newNode;

        if (this.size == 0) this.head.next = this.tail;

        this.size++;
    }
    add(index, value) { 
        this.isPositionIndex(index);

        if (index == this.size) { 
            this.addLast(value);
            return;
        }
        
        const newNode = new Node(value);
        let current = this.head;
        for (let i = 0; i < index; i++) { 
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }
    //删除
    removeFirst() { 
        this.isElementIndex(0);
        this.head.next = this.head.next.next;
        this.size--;
        if (this.size == 0)
            this.tail = null;
    }
    removeLast() { 
        this.isElementIndex(this.size - 1);
        let current = this.head;
        while (current.next.next != null) { 
            current = current.next;
        }
        this.tail = current;
        current.next = null;
        this.size--;
    }
    remove(index) {
        this.isPositionIndex(index);

        if (index == this.size - 1)
            this.removeLast();
        if (index == 0)
            this.removeFirst();

        let current = this.head;
        for (let i = 0; i < index; i++) { 
            current = current.next;
        }
        current.next = current.next.next;
        this.size--;
        
    }
    //先做一些工具函数
    getSize() { 
        return this.size;
    }
    isEmpty() { 
        return this.size == 0;
    }
    isElementIndex(index) { 
        if (index < 0 || index >= this.size)
            throw new Error('Invalid Element Index');
    }
    isPositionIndex(index) { 
        if (index < 0 || index > this.size)
          throw new Error("Invalid Position Index");
    }
    getNode(index) { 
        this.isPositionIndex(index);
        let current = this.head;
        for (let i = 0; i < index; i++)
            current = current.next;

        return current;
    }
    convertFromArray(arr) {
        for (let i = 0; i < arr.length; i++) { 
            this.addLast(arr[i]);
        }
        
    }
    display() { 
        let arr = [];
        let current = this.head.next;
        for (let i = 0; i < this.size; i++){
            arr[i] = current.val;
            current = current.next;
        }
        console.log(arr)
    }
}

function main() {
    console.log("Hello, JavaScript!");
    const arr = [0, 1, 2, 3, 4, 5];
    let list = new SinglyLinkedListWithDummay();
    //工具函数测试
    list.convertFromArray(arr);
    list.display();
    console.log(list.getSize());
    console.log(list.getNode(3));
    console.log(list.isEmpty());

    //查询函数测试
    console.log(list.getFirst());
    console.log(list.getLast());
    console.log(list.getValue(3));
    //修改函数测试
    list.setFirst(101);
    list.setLast(555);
    list.setValue(3, 222);
    list.display();
    //增加函数测试
    list.add(2, 1212);
    list.addFirst(888);
    list.addLast(666);
    list.display();
    //删除函数测试
    list.removeFirst();
    list.removeLast();
    list.remove(2);
    list.display();
    console.log('顺利完成全部测试!');
}
main();
