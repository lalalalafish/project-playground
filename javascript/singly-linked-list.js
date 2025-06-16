/**
 * @file singly-linked-list.js
 * @description 无
 * @author Yujie Liu
 * @since 2025-06-15 16:05:54
 */

//创建单链表结构
let Node = (value) => { 
    this.val = value;
    this.next = null;
}

//工具函数：将数组转为单链表结构
let convertToSinglyLinkedList = (arr) => { 
    //常见情况
    if (arr == null || arr.length == 0) { 
        return null;
    }

    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) { 
        current.next = new Node(arr[i]);//创建下一个节点
        current = current.next;//迭代
    }
    return head;
}

//单链表
class MySinglyLinkedList { 
    constructor(value) { 
        this.head = new Node(value); 
        this.size = 1;
    }
    isValidIndex(index) {
        if (index < 0 || i >= this.size)
            throw new Error("Invalid Index")
    }
    //查询-时间复杂度: O(N)
    getElement(index) {
        this.isValidIndex(index);
        let current = this.head;
        for (let i = 0; i < index; i++) { 
            current = current.next;
        }
        return current.val;
    }
    //修改-时间复杂度: O(N)
    setElement(index, value) { 
        this.isValidIndex(index);
        let current = this.head;
        for (let i = 0; i < index; i++) { 
            current = current.next;
        }
        current.val = value;
    }
    //增加-头元素-时间复杂度O(1)
    addHead(value) { 
        //用虚拟头节点简化
        const newHead = new Node(value);
        newHead.next = head;
        this.head = newHead;
    }
    //增加-尾元素-时间复杂度为O(N)： 如果这个list没有记录tail
    addTail(value) { 
        const current = this.head;
        while (current.next != null) { 
            current = current.next;
        }
        const newNode = newNode(value);
        current.next = newNode;
    }
    //增加-中间元素-时间复杂度为O(N)
    addMiddle(index, value) { //index: 前驱节点的index
        this.isValidIndex(index);

        const current = this.head;
        for (let i = 0; i < index; i++)
            current = current.next;

        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
    }
    //删除-头节点-时间复杂度O(1)
    removeHead() {
        this.head = this.head.next;
    }
    //删除-尾节点-时间复杂度O(N)
    removeTail() { 
        const current = this.head;
        while (current.next.next != null) { 
            current = current.next;
        }
        current.next = null;
    }
    //删除-中间节点-时间复杂度O(N)
    removeMiddle(index, value) {
        this.isValidIndex(index);
        const current = this.head;
        for (let i = 0; i < index - 1; i++)
            current = current.next;
        current.next = current.next.next;
    }

}


function singlyLinkedList() {
    console.log('Hello, JavaScript!');
    const arr = [0, 1, 2, 3, 4, 5];
    const list = convertToSinglyLinkedList(arr);
    console.log(list)

}

singlyLinkedList();
