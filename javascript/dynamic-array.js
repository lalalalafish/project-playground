/**
 * @file dynamic-array.js
 * @description 动态数组的手动实现
 * @author Yujie Liu
 * @since 2025-06-15 14:39:37
 */

class DynamicArray { 
    //一个动态数组需要的功能:
    //创建: constructor
    //初始化: init
    //查询: getElement
    //修改: setElement
    //扩容/缩容: resize
    //添加: push, splice
    //删除: pop, splice
    //长度: length, isEmpty
    //展示: display
    constructor(initCapacity) { 
        //成员变量:
        this.data = [];//实际存储空间
        this.size = 0;//实际容量
        this.INIT_CAP = 1;//初始容量
        //如果有传入初始长度，可以初始化
        this.init(initCapacity);
    }
    init(initCapacity) { 
        const capacity = initCapacity || this.INIT_CAP;
        this.data = new Array(capacity);
        this.size = 0;
    }
    //工具函数: 查询index是否符合范围
    isValidIndex(index) {
        if (index < 0 || index >= this.size)
            throw new Error('Invalid Index');
    }
    //工具函数：查询position（插入位置）是否符合范围
    isValidPosition(index) { 
        if (index < 0 || index > this.size)
            throw new Error('Invalid Position');
    }
    getElement(index) {
        this.isValidIndex(index);
        return this.data[index];
    }
    setElement(index, value) { 
        this.isValidIndex(index);
        this.data[index] = value;
    }
    resize(newCapacity) { 
        const tmp = new Array(newCapacity);
        for (let i = 0; i < this.size; i++){
            tmp[i] = this.data[i];
        }
        this.data = tmp;
    }
    push(value) { 
        const capacity = this.data.length;
        if (this.size === capacity) { //扩容
            this.resize(2 * capacity);
        }
        this.data[this.size] = value;
        this.size++;
    }
    pop() { 
        this.data[--this.size] = null;
        const capacity = this.data.length;
        if (this.size <= capacity / 4) { //缩容
            this.resize(capacity / 2);
        }
    }
    unshift(value) { 
        const capacity = this.data.length;
        if (this.size === capacity) {
          //扩容
          this.resize(2 * capacity);
        }
        for (let i = this.size - 1; i >= 0; i--) { 
            this.data[i + 1] = this.data[i];
        }
        this.data[0] = value;
        this.size++;
    }
    shift(value) { 
        for (let i = 0; i < this.size; i++) { 
            this.data[i] = this.data[i + 1];
        }
        this.data[--this.size] = null;
        const capacity = this.data.length;
        if (this.size <= capacity / 4) {
          //缩容
          this.resize(capacity / 2);
        }
    }
    add(index, value) { 
        this.isValidPosition(index);

        const capacity = this.data.length;
        if (this.size === capacity) {
          //扩容
          this.resize(2 * capacity);
        }

        for (let i = this.size - 1; i >= index; i--) { 
            this.data[i + 1] = this.data[i];
        }
        this.data[index] = value;
        this.size++;
    }
    remove(index) { 
        this.isValidIndex(index);

        for (let i = index; i < this.size; i++) { 
            this.data[i] = this.data[i + 1];
        }
        this.data[--this.size] = null;


        const capacity = this.data.length;
        if (this.size <= capacity / 4) {
            //缩容
            this.resize(capacity / 2);
          }
    }
    isEmpty() { 
        return this.size === 0;
    }
    length() {
        return this.data.length;
    }
    display() { 
        console.log("size:", this.size, "\ncapacity:", this.data.length);
        console.log("array:", this.data);
    }
}


function dynamicArray() {
    const array = new DynamicArray(10);
    console.log(array.isEmpty());
    console.log(array.length());
    for (let i = 0; i < 5; i++) { 
        array.push(i)
    }
    array.pop();
    array.unshift(999);
    array.shift();
    array.add(2, 888);
    array.remove(2);
    console.log(array.getElement(2));
    array.setElement(3, 666);
    array.display()
}

dynamicArray();
