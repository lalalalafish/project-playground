/**
 * @file queue.js
 * @description 解决异步并发队列问题
 * @author Yujie Liu
 * @since 2025-06-17 15:35:54
 */

// 写一个节流类Queue，要求满足：
// const queue = new Queue(2);  // 最多同时运行2个异步任务
// async function task(time) {
//    console.log(`任务${time}开始`);
//    await new Promise(resolve => {
//        setTimeout(resolve, time);
//    });
//    console.log(`任务${time}已完成`);
//    return time;
// }
// queue.add(() => task(3000));
// queue.add(() => task(2000));
// queue.add(() => task(100));

// 1. 实现Queue类
// 2. 用jest写自动测试用例
// 3. 如果要求 await queue.add(() => task(300)) 能得到 300，要怎么改写？

//Queue类设计：
//首先是数据结构：队列，没有复杂度要求可以用动态数组来模拟队列
//然后是判断条件：runningTaskNumber < concurrencyNumber的时候才可以开启新的任务
//然后是运行逻辑：暴露的函数只有add, 那每次添加的时候都不仅需要把task加入队列中，如果没有在执行任务，应该触发任务开始不断执行到队列清空（循环）
//最后是异步处理：应该在每个任务结束后判断是否需要执行新任务


class Queue {
  //异步、节流、队列
  constructor(concurrencyNumber = 2) {
    this.maxConcurrencyNumber = concurrencyNumber;
    this.queue = []; //任务队列
    this.runningTaskNumber = 0; //正在运行的任务数量
  }
  add(taskFn) {}
  //内部函数: 触发运行检查和运行循环
  async _run() {
    //执行队列
    //如果有空余位置和未执行的任务
    while (
      this.runningTaskNumber < this.maxConcurrencyNumber &&
      this.queue.length > 0
    ) {
      //执行任务
      this.runningTaskNumber++;
      const task = this.queue.shift();
      await task();
    }
  }
}
const queue = new Queue(2); // 最多同时运行2个异步任务
async function task(time) {
  console.log(`任务${time}开始`);
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
  console.log(`任务${time}已完成`);
  return time;
}
queue.add(() => task(3000));
queue.add(() => task(2000));
queue.add(() => task(100));
