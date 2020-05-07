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
    const stack = [tree.root];
    while (stack.length > 0) {
      const node = stack.pop();
      if (item <= node.item) {
        if (node.left) {
          stack.push(node.left);
        } else {
          node.left = bstNodeCreate(item);
          return;
        }
      } else {
        if (node.right) {
          stack.push(node.right);
        } else {
          node.right = bstNodeCreate(item);
          return;
        }
      }
    }
  } else {
    tree.root = bstNodeCreate(item);
  }
}

// NOTE: I had to google this one... it's kinda confusing and I forgot how
export function bstEach(tree, callback) {
  let node = tree.root;
  const stack = [];
  while (stack.length > 0 || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      callback(node.item);
      node = node.right;
    }
  }
}

export function* bstIterator(tree) {
  let node = tree.root;
  const stack = [];
  while (stack.length > 0 || node) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      yield node.item;
      node = node.right;
    }
  }
}
