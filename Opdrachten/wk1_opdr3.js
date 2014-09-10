/*
3.1: Constructor object
Maak met een Constructor object een ‘Persoon’-object aan. Voeg de property ‘name’ en de method ‘speak’ toe. 
En maak een nieuwe instantie aan van dit object waarbij je de naam ‘Bob’ meegeeft als parameter van het object.

3.2: Prototype
Voeg de methods ‘walk’ en ‘eat’ toe aan het ‘Persoon’-object met de prototype function van het object.

3.3: Object Literal
Maak nu hetzelfde object, met dezelfde properties en methods aan met een object literal
*/

function Person(name) {
	this.name = name;
	this.speak = function() {
		console.log("Hoi, mijn naam is " + this.name + ".");
	};
};
Person.prototype.walk = function() {
	console.log("Ik ben " + this.name + " en ik loop rondjes.");
};
Person.prototype.eat = function() {
	console.log("Hoi " + this.name + " hier. Ik eet wel eens pizza");
};

var bob = new Persoon("Bob");
bob.speak();



var bob = {
	name: "Bob",
	speak: function() {
		console.log("Hoi, mijn naam is " + this.name + ".");
	},
	walk: function() {
		console.log("Ik ben " + this.name + " en ik loop rondjes.");
	},
	eat: function() {
		console.log("Hoi " + this.name + " hier. Ik eet wel eens pizza");
	}
};


/*
4.1: Local Scope
Maak met behulp van een function een local scope aan en definieer in deze local scope de variables ‘iterator’, ‘max’ en ‘min’ aan.

4.2: Global Scope
Maak dezelfde variables nu ook aan in de global scope.

4.3: Closure
Leg uit wat een closure is en maak een code voorbeeld
*/

function localScope() {
	var iterator = "iets";
	var max = 100;
	var min = 0;
}

var iterator = "iets";
var max = 100;
var min = 0;
