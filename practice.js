/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var name = 'Tyler';
// Do not edit the code above.

/*
  Create a function called isTyler that accepts name as it's only parameter.
  If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
*/

//Code Here
function isTyler(name){
  if(name == 'Tyler') {
    return true
  }
  return false
}


////////// PROBLEM 2 //////////

/*
  Create a function called getName that uses prompt() to prompt the user for their name and then returns the given name.
*/

//Code Here
function getName(){
  return prompt("Please enter your name");
}

////////// PROBLEM 3 //////////

/*
  Create a function called welcome that uses your getName function you created in the previous problem to get the user's name.
  Then alert "Welcome, " plus the given user's name.

  Example: "Welcome, Bob Joe"
*/

//Code Here
function welcome(){
  alert("Welcome, " + getName());
}


////////// PROBLEM 4 //////////

/*
  What is the difference between arguments and parameters?
*/

//Answer Here
//A parameter is a declaration, while an argument is something passed through a function.


////////// PROBLEM 5 //////////

/*
  What are all the falsy values in JavaScript and how do you check if something is falsy?
*/

//Answer Here

//null, false, undefined, 0, NaN

////////// PROBLEM 6 //////////

/*
  Create a function called myName that returns your name
*/

//Code Here
  function myName(){
    return "Marcus Ko"
  }


/*
  Now save the function definition of myName into a new variable called newMyName
*/

//Code Here

var newMyName = myName


/*
  Now alert the result of invoking newMyName
*/

// Code Here

alert("new name");

////////// PROBLEM 7 //////////

/*
  Create a function called outerFn which returns an anonymous function which returns your name.
*/

//Code Here
function outerFn(){
  return function(){
    return "marcus"
  }
}




/*
  Now save the result of invoking outerFn into a variable called innerFn.
*/

//Code Here
var innerFn = outerFn()


/* 
  Now invoke innerFn.
*/innerFn;

// Code Here