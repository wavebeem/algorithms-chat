Implement a binary search tree without using recursion.

Remember that a binary search tree looks like this:

```js
const tree = {
  root: node,
};
```

And a node looks like this:

```js
const node = {
  item: 3,
  left: null,
  right: anotherNode,
};
```

OR this:

```js
const node = null;
```

Also remember that if you go `left` on a node, all `item`s are less than (`<`) the current item. If an `item` is greater than or equal to (`>=`) then it goes down the right subtree.

You will need to use a stack to complete this assignment.

You do not need to make your stack from scratch. You can use an array as a stack like this:

```js
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop(); // => 3
stack.pop(); // => 2
stack.pop(); // => 1

stack.length === 0; // => true (empty)
```

I would suggest referencing assignment 07 for overall structure, but note that recursion will need to be replaced with a `while` loop and usage of a stack.
