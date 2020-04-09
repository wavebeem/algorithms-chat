export function stackCreate() {
  return { type: "stack.empty" };
}

export function stackPush(stack, item) {
  return {
    type: "stack.node",
    item: item,
    next: stack,
  };
}

export function stackPop(stack) {
  if (stack.type === "stack.empty") {
    return [stack, undefined];
  }
  return [stack.next, stack.item];
}
