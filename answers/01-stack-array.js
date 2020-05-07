export function stackCreate() {
  return [];
}

export function stackPush(stack, item) {
  stack[stack.length] = item;
}

export function stackPop(stack) {
  if (stack.length === 0) {
    return undefined;
  }
  const index = stack.length - 1;
  const item = stack[index];
  stack.length = index;
  return item;
}
