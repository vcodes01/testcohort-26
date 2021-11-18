//conditionals
//definition: peform different operations based on the given condition
//Task: define wether a number is positive or negative 
let integer = 1

//inside the parenthesis in an if statement, we write logical statement checking whether its true or false
if(integer <0){
    //inside the curly brackets is out code block that runs if we meet our condition
console.log("Negative: " + integer)
} else {
//if we didnt meet our logical statement, else code block will execute
console.log("positive:"+ integer)
}
// Task: Setting up a security web site that grants users over the age of 18+ access to the site. Write a conditional that gives users who are 18+ access and logs access denied for users who do no meet the given condition.

//let age= 18
//console.log("access denied: " + age)
//}
if(age >= 18) {
    console.log("access granted: " + age)
  } else {
    // else doesn't accept a conditional statement
    console.log("access denied: " + age)
  }

let num = -2.5
// & amperstand
//&& equals to AND
if(num > 100) {
    console.log (num + " is positive and greater than 100")
}else if (num < 100) {
    if(num > 0) 
    console.log(num + is "is less than 0 AKA negative.")
 }
} else if(num < 0) {
    console.log(num + " is less than 0 AKA negative.")
  } else {
    if(num === 100) {
      console.log("WE GOT A HUNDRED!!!")
    } else {
      console.log("error NaN " + num + " is a " + typeof(num))
    }
  }
  
  // Task: What is your letter grade?
  /* 
    If student gets 90 or higher: log A
    If 80 or above: log B
    if 70 or above: log C
    if 55 or above: log D
    if below 55: log F
  */
  
  let grade = 54
  
  // JavaScript runs Top to Down approach
  if(grade >= 90) {
    console.log('A')
  } else if(grade >= 80) {
    console.log('B')
  } else if(grade >= 70) {
    console.log('C')
  } else if(grade >= 55) {
    console.log('D')
  } else {
    console.log('F')
  }

  // =========== LOOPS =============

// Definition: A sequence of instructions that are repeated for either certain number of times or until a condition is met

// Syntax:
// for(statement 1; statement 2; statement 3) {
  // code block to be executed
//}

// Statement 1: executed before the loop - this is where code block starts
// Statement 2: condition for running the loop (the code block)
// Statement 3: Executed each time AFTER the loop (the code block) has been executed



//task:
//write a loop that outputs 1,3,5,7,9
for (let i = 1; i < 10; i++ && I++) {
    console.log(i)
}
