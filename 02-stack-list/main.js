export function stackCreate() {
  return { type: "stack", node: undefined };
}

function nodeCreate(item, next) {
  return { type: "stack.node", item, next };
}

export function stackPush(stack, item) {
  stack.node = nodeCreate(item, stack.node);
}

export function stackPop(stack) {
  if (stack.node === undefined) {
    return undefined;
  }
  const item = stack.node.item;
  stack.node = stack.node.next;
  return item;
}
