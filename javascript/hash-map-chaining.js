/**
 * @file hash-map-chaining.js
 * @description 手动实现拉链法的哈希表（简化版）
 * @author Yujie Liu
 * @since 2025-06-17 21:25:44
 */

//简化版:
//没有内置链表，所以使用数组
//取模，没有使用位运算优化


class ChainingHashMap {
    constructor(capacity = ChainingHashMap.INIT_CAP) {
        //检查
        const initCapacity = Math.max(capacity, 1);
        this.table = Array.from({ length: initCapacity }, () => []);
        this.size = 0;
    }

    static INIT_CAP = 4; //初始容量
    static KVNode = class {
        constructor(key, value) {
            this.key = key;
            this.value = value;
        }
    };

    hash(key) {
        return (
            Math.abs(key.hashCode ? key.hashCode() : this.defaultHash(key)) %
            this.table.length
        );
    }
    defaultHash(key) {
        //对于没有hashCode, 统一转为字符串进行哈希值处理
        let hash = 0;
        const keyStr = key.toString();
        for (let i = 0; i < keyStr.length; i++) {
            hash = (Math.imul(31, hash) + keyStr.charCodeAt(i)) | 0;
        }
        return hash;
    }

    size() {
        return this.size;
    }
    display() {
        console.log("ChainingHashMap: ");
        for (let list of this.table) console.log(list);
    }
    keys() {
        let keys = [];
        for (let list of this.table) {
            for (let node of list) {
                keys.push(node.key);
            }
        }
        return keys;
    }

    get(key) {
        const index = this.hash(key);
        if (!this.table[index])
            //链表为空，key不存在
            return -1;

        //获得链表后遍历查找
        let list = this.table[index];
        for (let i = 0; i < list.length; i++) {
            if (list[i].key == key) return list[i].value;
        }
        //链表中没有
        return -1;
    }

    put(key, value) {
        const index = this.hash(key);
        let list = this.table[index]; //获得链表
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].key == key) {
                    list[i].value = value;
                    return;
                }
            }
        } else {
            this.table[index] = [];
        }

        this.table[index].push(new ChainingHashMap.KVNode(key, value));
        this.size++;
        //容量检查
        if (this.size >= this.table.length * 0.75) {
            this.resize(this.table.length * 2);
        }
        return;
    }

    remove(key) {
        const index = this.hash(key);
        let list = this.table[index];
        if (list) {
            for (let i = 0; i < list.length; i++) {
                if (list[i].key == key) {
                    list.splice(i, 1);
                    this.size--;

                    //容量检查
                    if (this.size <= this.table.length / 8)
                        this.resize(Math.floor(this.table.length / 4));

                    return;
                }
            }
        }
    }

    resize(newCap) {
        //检查
        const capacity = Math.max(newCap, 1);

        let newMap = new ChainingHashMap(capacity);
        //重新放置
        for (let list of this.table) {
            for (let node of list) {
                newMap.put(node.key, node.value);
            }
        }
        this.table = newMap.table;
    }
}

function hashMapChaining() {
    const map = new ChainingHashMap();
    map.put(1, 1);
    map.put(2, 2);
    map.put(3, 3);
    console.log(map.get(1)); // 1
    console.log(map.get(2)); // 2

    map.put(1, 100);
    console.log(map.get(1)); // 100

    map.remove(2);
    console.log(map.get(2)); // null
    console.log(map.keys()); // [1, 3] (order may vary)

    map.remove(1);
    map.remove(2);
    map.remove(3);
    console.log(map.get(1)); // null
}

 hashMapChaining();
