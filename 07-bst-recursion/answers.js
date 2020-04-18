export function bstCreate() {
  return {
    type: "bst",
    root: null,
  };
}

export function bstAdd(tree, item) {
  if (tree.root) {
    bstAddHelper(tree.root, item);
  } else {
    tree.root = {
      type: "bst.node",
      item: item,
      left: null,
      right: null,
    };
  }
}

function bstAddHelper(node, item) {}

export function bstEach(tree, callback) {
  bstEachHelper(tree.root, callback);
}

function bstEachHelper(node, callback) {
  if (!node) {
    return;
  }
  bstEachHelper(node.left, callback);
  callback(node.item);
  bstEachHelper(node.right, callback);
}

export function* bstIterator(tree) {
  yield* bstIterator(tree.root);
}

function bstEachHelper(node, callback) {
  if (!node) {
    return;
  }
  bstEachHelper(node.left, callback);
  callback(node.item);
  bstEachHelper(node.right, callback);
}
