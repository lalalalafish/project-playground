/**
 * @file hash-map-linear.js
 * @description 手动实现线性探查法下的哈希表
 * @author Yujie Liu
 * @since 2025-06-17 22:35:11
 */

//线性探查法要把冲突的值非得扁平了再放进数组里，自然会更复杂更容易出错，而且也不支持无限大的负载因子，
//所以这个方法使用的不多，大部分编程语言的标准库实现的哈希表都是使用拉链法。
//几个关键点：
//一个是需要使用环形数组， 一个是删除的时候要保持顺序连续（数据搬移或者占位符删除）

function hashMapLinear() {
    console.log('Hello, JavaScript!');
}

 hashMapLinear();
