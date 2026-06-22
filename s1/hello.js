//var name="shiva ";
//var age=22;
//var city="warangal";
//console.log("my name is:",name);
//console.log("my age is:",age);
//console.log("my city is:",city);
//const a=10;
//console.log(a);
/*const appName = "CAP Training";

function greet() {
    let greeting = "Hello";
  
  if (true) {
    let blockVar = "I'm trapped here";
    var functionVar = "I escape to function scope!";
    
    console.log(appName);     
   // console.log(greeting);    
    console.log(blockVar);    
  }
  
  console.log(greeting);    
  console.log(functionVar);  
 // console.log(blockVar);    
}
greet();
console.log(appName);        
console.log(greeting); 
*/
let myName = "YOUR NAME HERE";
let myAge = 22;
const courseTitle = "SAP CAP Training";
const trainingDuration = 45;

// 2. Print them
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Course:", courseTitle);
console.log("Duration:", trainingDuration, "days");

// 3. Try to change them
myAge = 23;  // ✅ This works (let can be reassigned)
console.log("Updated age:", myAge);

// 4. Try to change a const (uncomment to see the error)
// courseTitle = "Something else";  // ❌ This will crash!

// 5. Scope experiment
if (true) {
  let blockVariable = "I only exist here";
  console.log("Inside block:", blockVariable);
}
// console.log("Outside block:", blockVariable);  // ❌ Error!

  