/*
Variables
	variables are containers that store informations/data.
		for example: x
	a variable can be given a name, so that you know what data is stored inside of it. 
	a variable is given a value. 
	variables can be classified into 5 data types:
		numbers, objects, strings, booleans, arrays
	
    variables are given a value. 
		for example: 
		var x = 6;
		var name = "Anna";
		var numberofcities = 10;
		var isItraining = true;


Debugging

	alerts: 
		displays as a "pop-up" window
		can call the alert function in the console or js script
			alert();
			alert("Hello!");
	comments: 
		// single line comments 
		/* wraps multi line comments 

	console:
		Developer tool built-in to broswer 
			can run JavaScript code directly, line by line. 
			you can view output of JavaScript written in editor
				you can output to console inside .js file 
					js
					console.log("My Content");
			

Data types
	
	Numbers:
		integers (whole numbers)
		doubles (x.xx)
		float (ongoing decimal like pie -> 3.14156...)


	Objects:
		objects are attachted to functions
			document.getElementByID()
				in this example "document" is the object

	Booleans: True or False (T,F)

	Strings: 
		any data endlosed in quotes
			"Hello world"
		Number: 5,5,5,1000
		Boolean: true, false
		undefined: no value


	Arrays: 
		list of elements (variable values) seperated by COMAS and contained by BRACKETS []
			arrays can hold a collection of data belonging to any single type (strings, booleans, numbers):
				["Shiro", "Little Cat", "Neither", "Nadine"];
			or of multiple data types: 
				["Shiro", "Little Cat", 3, 1];
			arrays can be stored in variables:
				var names = ["Shiro", "Little Cat", "Neither", "Nadine"];
				var species = ["dog", "cat", "turtle", "snake"];

		multi-dimensional array
			an array that stores other arrays:
				var pets = [names, species];
		polymorphic array
			an array that contains elements from all the data types
				for example: an array inside an array, containting strings, number and booleans.
					var arr=["M", 100,['am','pm']]

		the index of an item inside an array corresponds to its position in relation to the beginning
			the first item always has an index 0
				in the array names "Shiro" has the index of 0 and "Little Cat" has the index of 1.



Testing
	any test returns a boolean that is either true or false. for example you can test if two strings are equal. 
	==  
		(10-5) == 5; true
	=== 
		takes into account object type! 
			(10-5) === "5"; false . 
	!==
		tests if two strings are NOT equal:
	>
	<
	<=
	>=
	T&&T
		this entire statement is true only if both conditions are true. 
	T//F
		this entire statement is true if one condition is true (and the other is false) or if both conditions are true. 

Logic
	controls the flow of your program. allows a program to branch out into different paths. 
		if statement:
			only runs code if a certain test i.e. the 'if statement' is true. 
				if(5>10){
					console.log("you will NEVER see this);
				}
				if(5<10){
					console.log("you will see this!");
				}
		else statement:
			only runs if the 'if statement' is false
				if(5>10){
					console.log("you will NEVER see this");
				}
				else{
					console.log("you will see this!");
				}
		else if statement:
			use if you want to run another test before getting to else:
				if(5>10){
					console.log("you will Never see this");
				}
				else if(5===5){
					console.log("you will see this!");
				}
				else{
					console.log("you will never see this because else if is true");
				}

Functions
	a function encapsulates code for later use.
	it can take arguments, which are stored as variables inside the function.
	It usually returns a value, which can be used later on or displayed immediately. 
		function alertName(somePersonsName){
			return alert(somePersonsName);
			}
				alertName("Daphne");

Loops
	a loop is a section of code that gets repeated 
		
		for loop: 
		can only be used for numbers. 
		it repeats for a defined set of interations.
			for(var i=0; i<10; i++){
				console.log(i)
			}
				i++ is shorthand for 'i'='i' + 1

		while loop: 
			can also be used for buleans or words.
			repeats until a certain condition is met.
				while(x<10){
					console.log("On number " +x)
					x++;
					}
				}
	typically a variable or condition in the loop changes each tim it is run. 


*/

// function 1 
var me = {
	firstName : "Anna",
	lastName : "Mendes",
	birthday : "6/29",
	interests : "Paintings, Pets, Lakes, Rivers"
}

console.log( me.firstName );
console.log( me.lastName );
console.log( me.birthday );
console.log( me.interests );

// function 2
function sayMyName( personsName ){
	console.log( "You've entered " + personsName);
}

sayMyName( "Anna");

// function 3
function guessWhichButton( doorNumber ){

	if(doorNumber === 1 ){
		alert("Boo! You LOST!");
	}
	else if( doorNumber === 2){
		alert("Yay! You WON!");
	}
	else if( doorNumber === 3){
		alert( "HAHAHA, try again!");
	}
	else{
		alert("What the fuck is this?!");
	}

}



