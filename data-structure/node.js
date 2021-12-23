class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left || null;
        this.right = right || null;
    }

    // return node data
    get() {
        return this.data;
    }
}

module.exports = Node;