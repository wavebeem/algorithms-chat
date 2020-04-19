import { bstCreate, bstNodeCreate, bstAdd, bstEach, bstIterator } from "./main";

test("bstCreate returns an object with `root`", () => {
  expect(bstCreate()).toEqual({ root: null });
});

test("bs./mainte returns an object with `item`, `left`, `right`", () => {
  const value = 0;
  expect(bstNodeCreate(value)).toEqual({
    item: value,
    left: null,
    right: null,
  });
});

test("bstAdd creates the correct tree for adding 2, 1, 3 in that order", () => {
  const tree = bstCreate();
  bstAdd(tree, 2);
  bstAdd(tree, 1);
  bstAdd(tree, 3);
  expect(tree).toEqual({
    root: {
      item: 2,
      left: {
        item: 1,
        left: null,
        right: null,
      },
      right: {
        item: 3,
        left: null,
        right: null,
      },
    },
  });
});

test("bstEach iterates the items in sorted order", () => {
  const tree = bstCreate();
  bstAdd(tree, 2);
  bstAdd(tree, 1);
  bstAdd(tree, 3);
  const array = [];
  bstEach(tree, (item) => {
    array.push(item);
  });
  expect(array).toEqual([1, 2, 3]);
});

test("bstIterator works (easy mode)", () => {
  const tree = bstCreate();
  bstAdd(tree, 2);
  bstAdd(tree, 1);
  bstAdd(tree, 3);
  const array = [...bstIterator(tree)];
  expect(array).toEqual([1, 2, 3]);
});

test("bstIterator works (hard mode)", () => {
  const tree = bstCreate();
  bstAdd(tree, 2);
  bstAdd(tree, 1);
  bstAdd(tree, 3);
  const it = bstIterator(tree);
  expect(typeof it.next).toBe("function");
  expect(it.next()).toEqual({ value: 1, done: false });
  expect(it.next()).toEqual({ value: 2, done: false });
  expect(it.next()).toEqual({ value: 3, done: false });
  expect(it.next()).toEqual({ value: undefined, done: true });
});
