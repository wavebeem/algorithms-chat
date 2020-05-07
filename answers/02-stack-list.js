export function stackCreate() {
  return {
    type: "stack",
    node: undefined,
  };
}

export function stackPush(stack, item) {
  stack.node = {
    type: "stack.node",
    item: item,
    next: stack.node,
  };
}

export function stackPop(stack) {
  if (stack.node === undefined) {
    return undefined;
  }
  const item = stack.node.item;
  stack.node = stack.node.next;
  return item;
}
