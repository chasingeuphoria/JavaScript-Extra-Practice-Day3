console.log('------ TASK 1-------');
//TASK 1 🚀
// in your own words explain what a closure is below in comments and then write an example of a closure. Try to make this explaination simple enough to explain to a younger sibling. 

// --------ANSWER--------
/*
Closure is the accessability that the function(child) nested inside of another function(parent) has.
This means a closure can remember and access variables and arguements og its outer function even after the 
function has finished
*/
// function person() {
//   let name = 'Prince';
  
//   return function displayName() {
//     console.log(name);
//   };
// }
// let prince = person();
// prince();



console.log('------TASK 2-------');
/*
TASK 2 🚀
// look at the code below and explain in your own words where the variable 'count' is available. 
// Explain why 'count' is initialized with a let and not a var or const. 
// Explain how initalizing the variable 'count' with a var would change it's scope
*/
// function counterMaker() {
//     var count = 0;
//     return function counter() {
//      return count++;
//     }
//   }
//  let counter = counterMaker();
//  console.log(counter());
//  console.log(counter());
//  console.log(counter());
//  console.log(counter());
// // 'count' is available to the function counter and counterMaker 
// // we are initalizing 'count' with let becuase it increments and needs to be able to change
// // if we change it to var var is global and can be redeclared so it would be easy for us to forget and can cause bugs later 
// //on




console.log('------TASK 3-------');
/*
TASK 3 🚀
* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is contained in the global scope, the value of this inside of that function will be the window object ---> (*Window Binding*)

* 2. The object that is standing before the dot is what this keyword will be bound to.----> (*Implicit Binding*)

* 3. you can force a function call to use a particular object for this binding, without putting a property function reference on the object ----> (*Explicit Binding*)

* 4. The “new” keyword tells JS to create a new object and assign the “this” keyword to it. It’s binding the context of the code inside the function to the “this” keyword  ----> (*New Binding*)

* write out a code example of each explanation above
*/


// Principle 1
console.log('------ EXAMPLE 1-------');
// code example for Window Binding
let myFunction = () => {
  console.log(this);
}

var a = 'Prince';
myFunction();    

// Principle 2
console.log('------ EXAMPLE 2-------');
// code example for Implicit Binding
const obj = {
	name:'Prince',
  age: 24,
  greet: function(){
    console.log('Implicit This ===', this);
    return `Hello I am ${this.name} and I am ${this.age} years old.`
  }
};

obj.greet();

//Only applies to objects with methods

// Principle 3
console.log('------ EXAMPLE 3-------');
// code example for New Binding
function Guest(obj){
  this.name = obj.name;
  this.age = obj.age;
  this.greet = function() {
    console.log('This new binding', this)
    return `Hello I am ${this.name} I am ${this.age}`
  };
}
const prince = new Guest({name:'Prince', age:24});
const juan = new Guest({name:'Juan', age:30});

prince.greet();
juan.greet();

// Principle 4
console.log('------ EXAMPLE 4-------');
// code example for Explicit Binding
prince.greet.call(juan);
juan.greet.apply(prince);


//The highest priority has new Binding. Then explicit binding and implicit binding. The lowest priority has default binding.


// ^^^^^^^I NEED TO GO OVER THIS ALOT MORE ^^^^^^^^



console.log('------TASK 4-------');
/*
TASK 4 🚀
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attrs){
  this.createdAt = attrs.createdAt;
  this.name = attrs.name;
  this.dimensions = {
    length :attrs.dimensions.length,
    width :attrs.dimensions.width,
    height:attrs.dimensions.height
  }
}
GameObject.prototype = destroy(){
  return `${this.name} was removed from the game.`
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(characterAttrs){
  this.healthPoints = attrs.healthPoints;
  GameObject.call(this, CharacterStats)
}
CharacterStats.prototype = takeDamage(){
  return '<object name> took damage.'
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 function Humanoid(humanoidAttrs){
   this.team = attrs.team;
   this.weapons = attrs.weapons;
   this.language = attrs.language;
 }
 Humanoid.prototype = greet(){
  return '<object name> offers a greeting in <object language>.'
 }
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/






/*
TASK 5 🚀
// convert the constructor functions above to class syntax copy and paste the objects and console logs below the class syntax to test if your code is working
 */