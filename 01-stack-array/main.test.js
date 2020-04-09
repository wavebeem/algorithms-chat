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
  const stack = stackCreate();
  expect(stackPop(stack)).toBeUndefined();
});

test("stackPop works on a stack of size 1", () => {
  const stack = stackCreate();
  stackPush(stack, "a");
});

test("stackPop works on a stack of size 3", () => {
  const stack = stackCreate();
  stackPush(stack, "a");
  stackPush(stack, "b");
  stackPush(stack, "c");
  expect(stackPop(stack)).toBe("c");
  expect(stackPop(stack)).toBe("b");
  expect(stackPop(stack)).toBe("a");
});
