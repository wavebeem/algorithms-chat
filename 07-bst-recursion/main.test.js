import { bstCreate, bstAdd, bstWalk } from "./answers";

test("bstCreate() doesn't crash", () => {
  bstCreate();
});

test("bstAdd() doesn't crash", () => {
  const tree = bstCreate();
  bstAdd(tree, 2);
  bstAdd(tree, 1);
  bstAdd(tree, 3);
});

test("bstWalk() iterates the items in sorted order", () => {
  const tree = bstCreate();
  bstAdd(tree, 2);
  bstAdd(tree, 1);
  bstAdd(tree, 3);
  const array = [...tree];
  expect(array).toEqual([1, 2, 3]);
});
