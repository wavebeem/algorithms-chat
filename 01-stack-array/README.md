Write these functions without using any array methods.

Hint:

```js
array[index] = item;

// newLength can be smaller too! and those items get cut off the end
array.length = newLength;
6;
```

## Stack Overview

In computer science, a stack is an abstract data type that serves as a collection of elements, with two principal operations:

- `push`, which adds an element to the collection, and
- `pop`, which removes the most recently added element that was not yet removed.

The order in which elements come off a stack gives rise to its alternative name, LIFO (last in, first out). Additionally, a peek operation may give access to the top without modifying the stack. The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other, which makes it easy to take an item off the top of the stack, while getting to an item deeper in the stack may require taking off multiple other items first.

**Do not read this whole page unless you're ready for spoilers on how to implement a stack**.

Wikipedia Stack page:
<https://en.wikipedia.org/wiki/Stack_(abstract_data_type)>
