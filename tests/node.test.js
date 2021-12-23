var Node = require('../data-structure/node.js');

test('Node is a constructor', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can create correctly', () => {
    var node = new Node(10);

    expect(node.data).toEqual(10);
});

test('Node can be initialize with left and right correctly', () => {
    var node = new Node(10, new Node(1), new Node(2));

    expect(node.data).toEqual(10);
    expect(node.left.data).toEqual(1);
    expect(node.right.data).toEqual(2);
});
