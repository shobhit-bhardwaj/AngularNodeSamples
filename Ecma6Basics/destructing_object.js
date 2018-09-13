let user = {
	name: 'Shobhit',
	age: 30,
	greet() {
		console.log('Hello All !!!');
	}
}

let {name, age, greet : hello} = user;
console.log(name + ' - ' + age);
hello();