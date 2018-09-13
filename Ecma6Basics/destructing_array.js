let numbers = [1, 2, 3];
console.log(numbers);

let [a, b, c, d] = numbers;
console.log(a, b, c, d);

[a, ...b] = numbers;
console.log(a, b);

[a=5, b, c, d='default'] = numbers;
console.log(a, b, c, d);



a = 3;
b = 1;
console.log('Previous Values - ', a, b);

[a, b] = [b, a];
console.log('Changed Values - ', a, b);