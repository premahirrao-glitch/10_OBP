
// object is collection of properties and method of related data

// ************************************************************************************

// let student = {
//     "key" : value,
// }

//==============================================================================
// let student = {
//     name :"Prem",
//     age : 23,
//     city :"DHULE",
//     Department : "E&TC"
// }
// console.log(student.Department)  //E&TC

// Create a object and store important properties of it

// let chair = {
//     material : "fiber",
//     price : 500,
//     type : "king size",
//     company : "comfart chairs PVT LTD"
// }
// console.log(chair);


// method inside object----------------------------------
// let student = {
//     name :"Prem",
//     batch : "9OBP",
//     printName(){
//         console.log(name);
//     }
// }
// console.log(student); //{ name: 'Prem', batch: '9OBP', printName: [Function: printName] }


//accessing key value of object and its methods*******************************************

// dot notation (dot method)******************************
// let student = {
//     name :"Prem",
//     batch : "9OBP",
//     printName (){
//         console.log("My name is Prem")
//     }
// }
// console.log(student.name);  //Prem
// console.log(student.batch);  // 9OBP
// student.printName(); //My name is Prem


//bracket notation 
//whenever key is given as a variable use bracket method*****************************************
// console.log(student["name"]); //Prem
// console.log(student["batch"]); //9OBP
// student['printName'](); // My name is Prem (here we can call function)


//example
// let person = {
//     person1: "Prem",
//     person2: "Venky",
//     person3: "sid",
// }
// let p = "person2";
// console.log(person[p]); Venky

// let person = {
//     name: "Prem",
//     age: 15,
// }
// if(person["age"] >= 18){
//     console.log("eligible");
// }else{
//     console.log("not eligible");
// }


//approach 2 :- using ternary operator
// console.log(person["age"] >= 18 ? "eligible" : "not eligible") ;


//create a function inside the object print eligible if age is greater than 18 else 
    // not eligible

// let person = {
//     name: "Prem",
//     age: 23,
//     isEligible (){
//         if(person.age > 18){
//             return "Eligible"
//         }else{
//             return "Not Eligible"
//         }
//     }
// }
// console.log(person["isEligible"]());

// shorter way ---------------------------------------------
// using ternary operator ************************************************
// let person = {
//     name: "Prem",
//     age: 23,
//     isEligible (){
//         console.log(person.age > 18 ? "Eligible" : "Not Eligible");
//     }
// }
// person.isEligible();

// let person = {
//     name : "prem",
//     age : 23,
//     printName(){
//         console.log("my name is",person.name);
//     }
// }
// console.log(person.name); //prem
// console.log(person.age); //23
// person.printName(); my name is prem


//Dynamic key *********************************************************************************
//given a key and value as variable create a object of it

// let key1 = "name";
// let key2 = "age";
// let value1 = "Prem";
// let value2 = 10;

// let person ={
//     [key1] : "value1",
//     [key2] : "value2"
// }
// console.log(person); output : { name: 'value1', age: 10 }


//Adding a porperty 

// let person = {
//     name : "PREM",
//     age : 23
// }


//add property using dot method****************************************************************

// person.gender = "MALE";
//console.log(person); //{ name: 'PREM', age: 23, gender: 'MALE' }

// add property using bracket method***********************************************************

// person["city"] = "Pune";
// console.log(person); // name: 'PREM', age: 23, gender: 'MALE', city: 'Pune' }

//when add new  key which is a variable ***********************************************************
// let key = "pincode";
// person[key] = 411045;
// console.log(person); // pincode: 411045

//update*************************************************************

// let person = {
//     name : "PREM",
//     age : 23
// }
// person.age = 20;
// console.log(person); //{ name: 'PREM', age: 20 }

// person["age"] = 25 (using bracket methid always wrap in double qoutes when it is key)
// console.log(person); //{ name: 'PREM', age: 25 }


// Delete method*****************************************************************
// let person = {
//     name : "PREM",
//     age : 23
// }
// delete person.age
// console.log(person); //{ name: 'PREM' }

// question :-
//delete lastNaME ,update age to 30,add one property homeTown with value mysore
// let person = {
//     firstName : "PREM",
//     lastName : "Ahirrao",
//     age : 23,
//     city : "Pune",
// }
// delete person.lastName
// person.age = 30;
// person.homeTown = "mysore"
// console.log(person);

// approach 2 :-

// delete person.lastName
// person["age"] = 30
// let key = "homeTown"
// person[key] = 'mysore';
// console.log(person);

// key cant be dupilcate*****************************************************

// for in loop **********************************************************************
// .for in loop in object is used to access keys

// let person = {
//     name : "Prem",
//     age : 23,
//     city : "Pune"
// }
// for(let key in person){
//     console.log(key);
// }
// output :- name
            // age
            // city

// print all the values alone with keys *****************************************

// l

//Count number od key in an object 
// let person = {
//     name : "Prem",
//     age : 23,
//     designation : "SDET",
//     salary : 25000,
    
// }
// let count = 0
// for(let key in person){
//         count++;
// }
// console.log(count);

// question 2 
// let person = {
//     name : "Prem",
//     age : null,
//     designation : null,
//     salary : 25000,
//     city : "Pune",
//     education : "Btech"
// }
// let count = 0
// for(let key in person){
//         if(person[key] ){
//             count++;
//         }
//     }
// console.log(count); // 4

// question 
// let person = {
//     name : "Prem",
//     age : 23,
//     gender : "Male"

// }
// let check = "name"

//approach 1 :- not a good approach take "NO" even when key exits but it value is falsy value
// if(person[check]){
//     console.log("YES");
// }else{
//     console.log("No");
// }

//approach 2:- =====================================================
// function hasKey(){
//     for(let key in person){
//         if(key == check){
//             console.log("key exists in object");
//             return;
//         }
//     }
//     console.log("key doesn't exists in object");
// }
// hasKey();

//approach 3 :- =================================================
// using "in" property
// console.log(check in person);  // true

//approach 4 :- =================================================
// using hasOwn function 

// console.log(Object.hasOwn(person,check)); // true 

//approach 5 :- ================================================
// using hasOwnProperty
console.log(Object.hasOwnProperty(check));