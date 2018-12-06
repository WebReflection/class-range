const Range = require('../cjs');

const loop = [];

for (const i of new Range(0, 3))
  loop.push(i);

console.assert(loop.splice(0).join(',') === '0,1,2');

for (const i of new Range(0, 3, 2))
  loop.push(i);

console.assert(loop.splice(0).join(',') === '0,2');

for (const v of new Range(1, 3).for('abcd'))
  loop.push(v);

console.assert(loop.splice(0).join(',') === 'b,c');

let length = 5;
for (const i of new Range(0)) {
  loop.push(i);
  if (!length--)
    break;
}

console.assert(loop.splice(0).join(',') === '0,1,2,3,4,5');
