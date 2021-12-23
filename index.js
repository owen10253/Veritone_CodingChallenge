var BinarySearchTree = require('./data-structure/binary-search-tree.js');


var bt1 = new BinarySearchTree();
bt1.build([12, 11, 90, 82, 7, 9]);
console.log(bt1.deepest_node(), '1 Depest Nodes');

var bt2 = new BinarySearchTree();
bt2.build([26, 82, 16, 92, 33, 8]);
console.log(bt2.deepest_node(), '2 Depest Nodes');

var bt3 = new BinarySearchTree();
bt3.build([0, 0, 0, 0, 0]);
console.log(bt3.deepest_node(), '3 Depest Nodes');