export function bstCreate() {
  return { root: null };
}

export function bstNodeCreate(item) {
  return {
    item: item,
    left: null,
    right: null,
  };
}

export function bstAdd(tree, item) {
  if (tree.root) {
    bstAddHelper(tree.root, item);
  } else {
    tree.root = bstNodeCreate(item);
  }
}

function bstAddHelper(node, item) {
  if (item <= node.item) {
    if (node.left) {
      bstAddHelper(node.left, item);
    } else {
      node.left = bstNodeCreate(item);
    }
  } else {
    if (node.right) {
      bstAddHelper(node.right, item);
    } else {
      node.right = bstNodeCreate(item);
    }
  }
}

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
  yield* bstIteratorHelper(tree.root);
}

function* bstIteratorHelper(node) {
  if (!node) {
    return;
  }
  yield* bstIteratorHelper(node.left);
  yield node.item;
  yield* bstIteratorHelper(node.right);
}
