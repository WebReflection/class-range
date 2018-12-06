/*! (c) Andrea Giammarchi - ISC */
export default class Range {

  // constructor defaults
  constructor(start = 0, end = Infinity, step = 1) {
    this.start = start;
    this.end = end;
    this.step = step;
  }

  // for (const i of new Range(1, 4)) ...
  *[Symbol.iterator]() {
    for (let i = this.start; i < this.end; i += this.step)
      yield i;
  }

  // for (const value of new Range(1, 4).for('abcde')) ...
  *for(iterable) {
    for (let i = this.start; i < this.end; i += this.step)
      yield* iterable[i];
  }
};
