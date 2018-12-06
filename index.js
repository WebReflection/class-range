/*! (c) Andrea Giammarchi - ISC */
function Range(start, end, step) {'use strict';
  switch (arguments.length) {
    case 3: this.step = step;
    case 2: this.end = end;
    case 1: this.start = start;
  }
}

(function (proto) {

  // instances defaults
  proto.start = 0;
  proto.end = Infinity;
  proto.step = 1;

  // for (const i of new Range(1, 4)) ...
  proto[Symbol.iterator] = function* () {
    for (var i = this.start; i < this.end; i += this.step)
      yield i;
  };

  // for (const value of new Range(1, 4).for('abcde')) ...
  proto.for = function* (iterable) {
    for (var i = this.start; i < this.end; i += this.step)
      yield* iterable[i];
  };

}(Range.prototype));
