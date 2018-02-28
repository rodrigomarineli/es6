const number = [1, 2, 3, 4, 5, 6];

// filtro
console.log(number.filter(n => n > 3));

// acumulado
console.log(number.reduce((acum, current) => acum + current, 10));

// busca
console.log(number.find(n => n === 4));

const [a, b, c, d, e, f = 0, g = 80] = number;
console.log(d);
console.log(f);
console.log(g);

const [x, y, ...z] = number;
console.log(x, y, z);

let [a1, b1, , , , c1] = number;
console.log(a1, b1, c1);
[a1, b1] = [b1, a1];
console.log(a1, b1);

const otherNumbers = [10, 20, 30, number];
console.log(otherNumbers);

const otherNumbers2 = [10, 20, 30, ...number];
console.log(otherNumbers2);

const s = new Set();
s.add(1).add(2).add(3).add(2);
s.has(2);

console.log(s);
console.log(s.has(2));
console.log(s.has(20));
console.log(s.delete(20));
console.log(s.delete(2));
console.log(s.has(2));
console.log(s);

const m = new Map();
m.set('banana', 10);
console.log(m);
console.log(m.has('banana'));
console.log(m.has('laranja'));
