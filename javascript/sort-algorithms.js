/**
 * @file sort-algorithms.js
 * @description 手动实现十大排序
 * @author Yujie Liu
 * @since 2025-06-18 13:26:34
 */

function selectionSort(arr) { 
    //每次遍历找出最小值然后放到开头
    //时间复杂度O(N^2);空间复杂度O(1);
    //原始的有序程度不影响复杂度
    for (let i = 0; i < arr.length; i++) { 
        let minimumIdx = i;
        for (let j = i + 1; j < arr.length; j++) { 
            if (arr[j] < arr[i])
                minimumIdx = j;
        }
        [arr[i], arr[minimumIdx]] = [arr[minimumIdx], arr[i]];
    }
    return arr;
}


function sortAlgorithms() {
    const nums = [5, 4, 3, 3, 2, 1, 0];
    console.log(selectionSort(nums));
}

 sortAlgorithms();
