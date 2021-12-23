var BinarySearchTree = require('./data-structure/binary-search-tree.js');


var arr1 = [12, 11, 90, 82, 7, 9];
var bt1 = new BinarySearchTree();
bt1.build(arr1);
console.log('Example 1', arr1, bt1.deepest_node());


var arr2 = [26, 82, 16, 92, 33, 8];
var bt2 = new BinarySearchTree();
bt2.build(arr2);
console.log('Example 2', arr2, bt2.deepest_node());


var arr3 = [0, 0, 0, 0, 0]
var bt3 = new BinarySearchTree();
bt3.build(arr3);
console.log('Example 3', arr3, bt3.deepest_node());
