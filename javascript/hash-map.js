/**
 * @file hash-map.js
 * @description 手动实现hash-map
 * @author Yujie Liu
 * @since 2025-06-17 16:59:52
 */

//数组的话，虽然查改可以做到O(1), 但是增删确实O(N)
//哈希表就是一个加强数组，能让增删查改都做到O(1);
//哈希表的关键就是哈希函数, 下面有几个重点:
//1. key与索引的映射尽量1：1，避免映射到同一位置的时候解决哈希冲突
//2. 如何把key转为整数: 可以有很多种方法去是实现哈希函数
//3. 哈希函数不能避免哈希冲突：无穷大的空间映射到一个有限的索引空间（数组），必然会有哈希冲突出现；
//4. 哈希冲突的两个解决方法：拉链法和线性探查（开放寻址）；
//拉链法：纵向延申：数组存储的是链表，如果有冲突，在链表上放；
//开放寻址：横向延申：如果冲突就去下个位置上放；
//5. 解决哈希冲突必然会增加性负担，所以我们要避免出现哈希冲突。哈希冲突出现的原因有两个：
//哈希函数设计问题：key的哈希值分布不均匀，很多key映射到同一个索引上
//哈希表太满：用负载因子评价：size / table.length， 超过阈值就扩容，注意这个会导致底层存储顺序变化。
//6. 尽量不在循环中增删哈希表，避免出现扩缩容清空；
//7. 尽量不把可变类型作为key,避免key变动；如果拿数组做key, 数组不变情况下计算hashCode也需要遍历，复杂度是O(N);String的hashCode虽然也需要遍历字符，但是因为不可变，计算一次后存储即可，平均时间复杂度是O(1)
class HashMap { 
    constructor() { 
        this.table = new Array(1000).fill(null);
    }
    hash(key) { //时间复杂度是O(1)
        const h = key.hashCode();
        h = h & 0x7fffffff;//非负数
        return h % this.table.length();//合法映射（如果是2的幂，也可以用位运算掩码来代替消耗性能的求模运算);
    }
    //增加/修改
    put(key, value) { 
        const index = this.hash(key);
        this.table[index] = value;
    }
    //删除
    remove(key) { 
        const index = this.hash(key);
        this.table[index] = null;
    }
    //查询
    get(key) { 
        const index = this.hash(key);
        return this.table[index];
    }
}

function hashMap() {
    console.log('Hello, JavaScript!');
}

 hashMap();
