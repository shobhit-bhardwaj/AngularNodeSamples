let name = 'Shobhit';
let age = 20;

let object = {
	name,
	age: 30,
	greet() {
		return name + ' - ' + age;
	}
};
console.log(object);



object = {
	name: 'Shobhit Bhardwaj',
	age: 30,
	'greet function'() {
		console.log(name + ' - ' + age);
	}
};
console.log(object['name']);
object['greet function']();