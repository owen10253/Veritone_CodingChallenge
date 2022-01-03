var Node = require('./node.js');

class BinarySearchTree {
	constructor(node = null) {
        this.root = node;
    }

    // function to implement

    // Build Binary Search Tree from an Array
    build(arr) {
        for (var data of arr) {
            this.insert(data);
        }
    }

    // Insert data into BST on correct spot
    insert(data) {
        var newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Insert a Node into the Tree
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Out of Scope
    remove(data) { }

    // Coding Challenge!
    // Breath First Search: return Array in current level and return level
    // O(T): O(N) -> N is number of Node. This operation require to go through all Nodes
    // O(S): O(N) -> Worst cast need to hold all node in queue
    deepest_node() {
        // base case
        if (this.root === null) {
            return { nodes: null, level: -1 };
        }

        // create queue to store nodes and initialize with root and level. 'x' to separate level
        var queue = [[this.root, 0], "x"];
        var levelNodes = [];

        // return the depth of the tree. w/o storing the node? 

        while (queue.length > 1) {
            var tuple = queue.shift();

            if (tuple === "x") {
                queue.push("x");
                
                levelNodes = [];
                continue;
            }

            // Take each node from queue
            var node = tuple[0];
            var currLevel = tuple[1];

            levelNodes.push(node.data)
            
            // Add Nodes to the queue
            if (node.left) {
                queue.push([node.left, currLevel + 1]);
            }

            if (node.right) {
                queue.push([node.right, currLevel + 1]);
            }
        }
        
        return {nodes: levelNodes, level: currLevel};
    }

    /*
    depth() {
        // depth of the tree. 
        // depth-first search 

        // recursion 
        var max = -1;
        // if left is not empty
        if (this.root === null ) {
            return -1;
        }

        var helper = (node) => {
            if (!node) {
                return -1
            }
            
            return Math.max(helper(node.left),helper(node.right)) + 1;
        }

        return helper(this.root, 0)
    }*/

    // two function 
    // first? return first node and depth? 
    // max? given a node /// 

    // return the first node. 
    first () {
        // return 

        if (this.root)
    }
}

  2
1   3


module.exports = BinarySearchTree;