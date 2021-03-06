import { stackCreate, stackPush, stackPop } from "./main";

test("stackCreate is a function", () => {
  expect(typeof stackCreate).toBe("function");
});

test("stackCreate doesn't crash", () => {
  stackCreate();
});

test("stackPush doesn't crash", () => {
  const stack = stackCreate();
  stackPush(stack, 1);
});

test("stackPop returns undefined on a stack of size 0", () => {
  let stack = stackCreate();
  let item = undefined;
  [stack, item] = stackPop(stack);
  expect(item).toBeUndefined();
});

test("stackPop works on a stack of size 1", () => {
  const stack = stackCreate();
  stackPush(stack, "a");
});

test("stackPop works on a stack of size 3", () => {
  let stack = stackCreate();
  let item = undefined;
  stack = stackPush(stack, "a");
  stack = stackPush(stack, "b");
  stack = stackPush(stack, "c");
  [stack, item] = stackPop(stack);
  expect(item).toBe("c");
  [stack, item] = stackPop(stack);
  expect(item).toBe("b");
  [stack, item] = stackPop(stack);
  expect(item).toBe("a");
});
