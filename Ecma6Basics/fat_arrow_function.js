//	Simple Function
var fn1 = function() {
	console.log('Simple Function');
}

fn1();

//	Arrow Function
var fn2 = () => console.log('Arrow Function');
fn2();

fn2 = (a, b) => a + b;
console.log('Sum is - ', fn2(2, 5));


//	In Simple Function, this hold the reference of calling.
//	In Arrow Function, this holds the reference of Main Window Object
//	Arrow function is use for standalone function, because it do not
//	contains this as an object reference.

var main = function() {
	fnSimple();
	fnArrow();
}

var fnSimple = function() {
	console.log('Simple - ', this);
}

fnArrow = () => console.log('Arrow - ', this);

main();