/**
 * @file binary-tree-traversal.js
 * @description 无
 * @author Yujie Liu
 * @since 2025-06-18 09:14:17
 */

class TreeNode { 
    constructor(value) { 
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

//标准的递归遍历框架(先左后右)：遍历的顺序是相同的，前中后只是代码执行的实际不同
//BST的特性决定了它的中序遍历是有序的
const traverse = (root) => { 
    //如果为空，直接返回
    if (!root) { 
        // console.log("Enter ", null);
        // console.log("Leave ", null);
        return null;
    }
    //遍历：
    // console.log("Enter ", root.val);
    // console.log("PreOrder ", root.val);
    traverse(root.left);
    // console.log("InOrder ", root.val);
    traverse(root.right);
    // console.log("PostOrder ", root.val);
    // console.log("leave ", root.val);
}

//层序遍历：一层一层，每一层从左走到右： 需要借助队列实现
const levelOrderTraverse = (root) => {
    function State(node, depth) { 
        this.node = node;
        this.depth = depth;
    }

    //如果为空，直接返回
    if (!root) return;

    let queue = [];
    queue.push(new State(root, 1));
    while (queue.length !== 0) {
        let size = queue.length;//注意这里的长度取静态值出来
        while(size-- > 0){ 
            let current = queue.shift();
            console.log(current.depth, current.node.val);
            //左右子节点加入队列
            if (current.node.left !== null) queue.push(new State(current.node.left, current.depth + 1));
            if (current.node.right !== null) queue.push(new State(current.node.right, current.depth + 1));
        }
    }

}

function binaryTreeTraversal() {
    //         1
    //     2      3
    //   4   5  6   7
    let root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    // traverse(root);
    levelOrderTraverse(root);
}

 binaryTreeTraversal();
