# class Range

[![Build Status](https://travis-ci.com/ungap/class-range.svg?branch=master)](https://travis-ci.com/ungap/class-range) [![Coverage Status](https://coveralls.io/repos/github/ungap/class-range/badge.svg?branch=master)](https://coveralls.io/github/ungap/class-range?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

An iterable Range class.

The usage is as simple as `new Range(start = 0, end = Infinity, step = 1)`, with a `.for(iterable)` method.

```js
import Range from 'class-range';

for (const i of new Range(0, 3))
  console.log(i); // 0, 1, 2

for (const c of new Range(1, 3).for('abcd'))
  console.log(c); // "b", "c"
```
