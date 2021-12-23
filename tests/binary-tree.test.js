var BinarySearchTree = require('../data-structure/binary-search-tree.js');

test('BST is a constructor', () => {
    expect(typeof BinarySearchTree.prototype.constructor).toEqual('function');
});

test('Create object correctly', () => {
    var bst = new BinarySearchTree();

    expect(bst.root).toBeNull();
});

test('Insert item correctly', () => {
    var bst = new BinarySearchTree();

    bst.insert(5);
    bst.insert(15);
    bst.insert(17);
    bst.insert(16);
    bst.insert(14);

    expect(bst.root.data).toEqual(5);
    expect(bst.root.right.data).toEqual(15);
    expect(bst.root.right.right.data).toEqual(17);
    expect(bst.root.right.left.data).toEqual(14);
    expect(bst.root.right.right.left.data).toEqual(16);
});

test('Insert NO duplicate', () => {
    var bst = new BinarySearchTree();

    bst.insert(5);
    bst.insert(5);

    expect(bst.root.data).toEqual(5);
    expect(bst.root.left).toBeNull();
    expect(bst.root.right).toBeNull();
});

test('Build from Array', () => {
    var bst = new BinarySearchTree();

    bst.build([5, 15, 17, 16, 14]);

    expect(bst.root.data).toEqual(5);
    expect(bst.root.right.data).toEqual(15);
    expect(bst.root.right.right.data).toEqual(17);
    expect(bst.root.right.left.data).toEqual(14);
    expect(bst.root.right.right.left.data).toEqual(16);
});

test('Test deepest node logic with empty tree', () => {
    var bst = new BinarySearchTree();

    expect(bst.root).toBeNull();

    expect(bst.deepest_node().nodes).toBeNull();
    expect(bst.deepest_node().level).toEqual(-1);
});

test('Test deepest node logic with example 1', () => {
    var bst = new BinarySearchTree();

    bst.build([12, 11, 90, 82, 7, 9]);

    expect(JSON.stringify(bst.deepest_node().nodes)).toEqual('[9]');
    expect(bst.deepest_node().level).toEqual(3);
});

test('Test deepest node logic with example 2', () => {
    var bst = new BinarySearchTree();

    bst.build([26, 82, 16, 92, 33]);

    expect(JSON.stringify(bst.deepest_node().nodes)).toEqual('[33,92]');
    expect(bst.deepest_node().level).toEqual(2);
});