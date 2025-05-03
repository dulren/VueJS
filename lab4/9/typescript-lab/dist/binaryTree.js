"use strict";
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
            else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value)
                return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }
    findMin(node) {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current;
    }
    deleteNode(node, value) {
        if (!node)
            return null;
        if (value < node.value) {
            node.left = this.deleteNode(node.left, value);
        }
        else if (value > node.value) {
            node.right = this.deleteNode(node.right, value);
        }
        else {
            if (!node.left && !node.right)
                return null;
            if (!node.left)
                return node.right;
            if (!node.right)
                return node.left;
            const minNode = this.findMin(node.right);
            node.value = minNode.value;
            node.right = this.deleteNode(node.right, minNode.value);
        }
        return node;
    }
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }
    update(oldValue, newValue) {
        if (this.search(oldValue)) {
            this.delete(oldValue);
            this.insert(newValue);
        }
    }
    calcHeight(node) {
        if (!node)
            return 0;
        const leftHeight = this.calcHeight(node.left);
        const rightHeight = this.calcHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    height() {
        return this.calcHeight(this.root);
    }
}
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(7);
console.log("Search 7:", tree.search(7));
console.log("Height:", tree.height());
tree.update(7, 8);
console.log("Search 7 after update:", tree.search(7));
console.log("Search 8 after update:", tree.search(8));
tree.delete(5);
console.log("Search 5 after delete:", tree.search(5));
