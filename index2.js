const sayHello = name => `Hello ${name}`;
const printHello = (name) => {
  console.log(` Hello ${name}`);
};
const getSibilings = n => ({ previous: n - 1, next: n + 1 });

console.log(sayHello);
console.log(sayHello('Rodrigo'));
printHello('Marineli');
console.log(getSibilings(10));
