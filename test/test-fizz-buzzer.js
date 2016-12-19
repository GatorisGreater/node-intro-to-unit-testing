const fizzBuzzer = require('../fizzBuzzer');
require('chai').should();


describe('fizzBuzzer', function() {
    it('should return fizz-buzz if num is divisible by 15', function() {
    	const input1 = 15;
    	let answer = fizzBuzzer(input1);
    	answer.should.equal('fizz-buzz');		
    });
    it('should return fizz if num is divisible by 3', function(){
		const input3 = 3;
		let answer = fizzBuzzer(input3);
		answer.should.equal('fizz');
    });
	it('should return buzz if num is divisible by 5', function(){
		const input2 = 5;
		let answer = fizzBuzzer(input2);
		answer.should.equal('buzz');
    });
	it('should return num if num is not divisible by 15, 5, or 3', function(){
		const input4 = 7;
		let answer = fizzBuzzer(input4);
		answer.should.equal(input4);
    });
    it('input should be a number', function(){
		const input = 'string';
		(function () {fizzBuzzer(input)}).should.throw(Error);
    });
  }
);