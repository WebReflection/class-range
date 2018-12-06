# class Range

An iterable Range class.

The usage is as simple as `new Range(start = 0, end = Infinity, step = 1)`, with a `.for(iterable)` method.

```js
import Range from 'gerangetor';

for (const i of new Range(0, 3))
  console.log(i); // 0, 1, 2

for (const c of new Range(1, 3).for('abcd'))
  console.log(c); // "b", "c"
```


