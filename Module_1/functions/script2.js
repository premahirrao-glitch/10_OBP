// 
//Check number is prime or not

// let n = 6;

// let flag = false;
// for(let i =2 ;i<=n-1;i++){
//     if(n%i==0){
//         flag = true;
//         console.log("No is not prime");
//         break;
//     }
// }

// if(flag == false)
// console.log("no is prime");

// break -> stop the excution of loop further
// continue -> skip the excution code that is wriiten after continue for that iteration

// do{

// }while(condition){

// }

// while 
// for 

// function
// function is reusable  piece of code.

// given two number a and b find the sum of it 

// approach 1
// let a = 10, b =20;
// console.log(a+b);

// approach 2
// function sum(a,b){
//    console.log(a+b);
// }

// sum(10,20);
// sum(30,40);

// function declaration

// function sum(// parameter){

// }
// sum(//argument)

//print
// function print(){
//   console.log("Hello World");
// }

// print();
// print();


// 

// function print(){
//     console.log("Hello I am Tarun");
// }

// print();

// better way
// given a user name print the message 
// "Hello i am ${username}"
// argument-> argument passed at time of function call
// parameter-> parameter are defined at the time of function decalartion

// function print(username){
//     console.log("Hello i am");
//     console.log(username);
// }

// print("Abhishek");
// print("Sooraj");

// multiple parameters

// function print(name,age){
//    console.log("My name is ",name);
//    console.log("My age is ",age);
// }

// print("Abhishek",25);

// predict output

// q1:-
// function print(name,age){
//    console.log(name); // Abhishek
//    console.log(age);  // undefined
// }

// print("Abhishek");  


//q2:-
// function print(name,age){
//    console.log(name); // 25
//    console.log(age);  // undefined
// }

// print(25);  

//  default parameter
// function print(name,age = 20){
//    console.log(name);  // Abhishek
//    console.log(age);   // 20
// }

// print("Abhishek");  

// predict the output

// q1:-
// function print(name,age = 20){
//    console.log(name);  // Abhishek
//    console.log(age);   // 30
// }

// print("Abhishek",30);  

// q2
// function print(name,age = 20){
//    console.log(name);  // Abhishek
//    console.log(age);   // 30
// }

// print("Abhishek",30,40);  

// create isEligible and return true if the 
// age is greater than 18 otherwise false

// approach 1
// let age = 20;
// function isEligible(){
//    if(age>18)
//      return true;
//    else 
//      return false;
// }

// console.log(isEligible());

// let ans = isEligible();
// console.log(ans);

// approach 2

// function isEligible(age){
//    if(age>18)
//      return true;
//    else 
//      return false;
// }

// console.log(isEligible(20));

// let ans = isEligible(30);
// console.log(ans);

//predict the output
// function differnece(a,b){
//     a-b;
// }

// console.log(differnece(1,2)) // undefined


// create a factorial and return the 
// facotrial of the given number from the
// function

// function fact(n){
//    let prod = 1;
//   for(let i=1;i<=n;i++){
//      prod*=i;
//   }
//   return prod;
// }


// console.log(fact(4));
// console.log(fact(6));


// create a function printEven and print all 
// the even numbers from 1 to n

// function printEven(n){
//     for(let i=1;i<=n;i++){
//         if(i%2==0)
//         console.log(i);
//     }
// }

// printEven(10);
// printEven(15)


// create a fucntion primeSum and that should 
// sum of the prime number in between 1 and  n

// return true if no is prime else false 

// function isPrime(i){

// }

// function primeSum(n){
//     let sum =0;
//     for(let i=2;i<n;i++){
//         if(isPrime(i)){
//           sum += i;
//         }
//     }
//     return sum;
// }

// console.log(primsSum(10));






//scope ***************************************************************

//Global scope///////////////////

//any variable that is declared outside of the funcation or block can be accsess anywhere
// in the program and this scope is called global scope


// let a = 41;
// function check(){
//     console.log("inside function block",a);
// }
// check();

// {
//     console.log("outside the function block",a);
// }
/*inside function block 41
outside the function block 41*/


// ways to declare variable in javascript

// var 
// let 
// const 


//declare varibale with let *********************

// let a = 41;
// console.log(a); //41


//declare varibale with var *********************

// var a = 41;
// console.log(a);  //41

//declare variable with const ***********************

// const a = 41;
// console.log(a); 41


//function scope***************************************

// function sum(){
//     let a = 20 , b = 30;
//     console.log(a,b);
// }

// console.log(a,b); --> a is not defined

// sum();  // 20 30 



//var is also a function 
// function sum(){
//     var a = 20 , b = 30;
//     console.log(a,b);
// }
// console.log(a,b); ---->  a is not defined
// sum();


//block scope**************************
//let and const is block scope=================

// {
//     let a = 20;
// }
// console.log(a); // a is not defined

// {
//     const a = 41;
// }
// console.log(a);  a is not defined


// {
//     var a = 41;
// } 
// console.log(a); 41 because var is not block scope 


// scope chain**************************************************************
// in the scope chain is the process of checking variable from its scope to the outer scope 
// one by one .

// let a = 41;
// function check(){
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// check(); // 41;
// variable shadowing **************************************************


// NOTE -- >variabele declare with "let" cannot be re-declared------------

//EXAMPLE------
// let a = 41;
// let a = 10;
// console.log(a); //Identifier 'a' has already been declared

//SHADOWING-------------------

// variable that is declare with a same name in the smaller scope 
//shadow the variable in bigger scope.

// let a = 20;
// {
//     let a = 30;
//     console.log(a); // 30
// }
// console.log(a); // 20


//Hoisting******************************************************************************
//hoisting is process of processing declaration before execution 

// if we are able to acess the variable before declaration is hoisting

//And variable declared with "var" is hoitsed ****

//Note --- > "let" is also hoisted but we cannot access it before declaration 
// and it will give error!!!!

// let and cosnt is also hoisted with keyword 
// but cant be access before initilization



//temporal dead zone **************************************************************

// let and cosnt is also hoisted with keyword undefined 
// but cant be access before initilization
// thais thing is known as temporal dead zone .
// it's hoisted with keyword undefined but can't be accessed before  initialzation
//till the time variable can't be accessed 
//variable is in temporal dead zone.


//eg********************************(for var it will given undefined)
// console.log(a)  //undefined
// var a = 20;
// console.log(a);  // 20

// for let and const it will give error*********************************





