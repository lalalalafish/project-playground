/**
 * @file doubly-linked-list.js
 * @description 手动实现双链表
 * @author Yujie Liu
 * @since 2025-06-15 16:51:07
 */

class Node { 
    constructor(value) {
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList { 
    constructor(value){ 
        this.head = this.tail = new Node(value);
        this.size = 1;
    }
    converterForArray(arr) { 
        if (arr == null || arr.length == 0)
            return null;

        this.head = this.tail = new Node(arr[0]);
        this.size = 1; 

        let current = this.head;
        for (let i = 1; i < arr.length; i++) { 
            current.next = new Node(arr[i]);
            current.next.prev = current;
            current = current.next;
            this.size++;
        }
        this.tail = current;
    }
    //从头开始遍历
    traversalFromHead() { 
        let arr = [];
        for (let current = this.head; current != null; current = current.next)
            arr.push(current.val)
        console.log(arr)
    }
    //从后开始遍历
    traversalFromTail() { 
        let arr = [];
        for (let current = this.tail; current != null; current = current.prev)
            arr.push(current.val)
        
        console.log(arr)
    }
    //查询-从头开始查找
    getElementFromHead(index) { 
        let current = this.head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }
    //查找-从末尾开始查找
    getElementFromTail(index) { 
        let  current = this.tail;
        const count = this.size - 1 - index;
        for (let i = 0; i < count; i++) { 
            current = current.prev;
        }
        return current;
    }
    //修改-跟get差不多所以就不实现了

    //增加-在头增加元素
    addHead(value) { 
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.size++;
    }
    //增加-在尾部增加元素
    addTail(value) { 
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    //增加-在中间增加元素， 可以判断一下索引靠近哪边然后选择用什么遍历
    add(index, value) { //在index之后添加节点
        const newNode = new Node(value);
        let prevNode = null;
        if (index <= this.size / 2) { //从头开始遍历
            prevNode = this.getElementFromHead(index)
        } else { 
            prevNode = this.getElementFromTail(index)
        }

        newNode.prev = prevNode;
        newNode.next = prevNode.next;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;

        this.size++;
    }
    //删除-删除头节点
    removeHead() {
        this.head = this.head.next;
        this.head.prev.next = null;//清空删除节点的引用（可选）
        this.head.prev = null;//把删除节点跟链表实际断开
        this.size--;
    }
    //删除-删除尾节点
    removeTail() { 
        this.tail = this.tail.prev;
        this.tail.next.prev = null;//清空删除节点的引用（可选）
        this.tail.next = null;//把删除节点跟链表实际断开
        this.size--;
    }
    //删除-中间节点
    remove(index) { 
        let deletedNode = null;
        if (index <= this.size / 2)
            deletedNode = this.getElementFromHead(index);
        else
            deletedNode = this.getElementFromTail(index);

        //删除节点
        deletedNode.prev.next = deletedNode.next;
        deletedNode.next.prev = deletedNode.prev;
        //清空引用 
        deletedNode.prev = null;
        deletedNode.next = null;

        this.size--;
    }
}


function main() {
    console.log('Hello, JavaScript!');
    const arr = [0, 1, 2, 3, 4, 5];
    console.log(arr);
    const list = new doublyLinkedList(0);
    list.converterForArray(arr);
    list.traversalFromHead();
    list.traversalFromTail();
    list.add(2, 666);
    list.addHead(999);
    list.addTail(888);
    list.traversalFromHead();
    list.removeHead();
    list.removeTail();
    list.remove(3);
    list.traversalFromHead();
    console.log('✨双链表功能全部实现！')
}

main();
