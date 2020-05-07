export function bstCreate(root = null) {
  return { root };
}

export function bstNodeCreate(item) {
  return { item, left: null, right: null };
}

export function bstAdd(tree, item) {
  if (tree.root) {
    return bstCreate(bstAddHelper(tree.root, item));
  }
  return bstCreate(bstNodeCreate(item));
}

function bstAddHelper(node, item) {
  if (!node) {
    return bstNodeCreate(item);
  }
  if (item <= node.item) {
    const left = bstAddHelper(node.left, item);
    return { ...node, left };
  }
  const right = bstAddHelper(node.right, item);
  return { ...node, right };
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
