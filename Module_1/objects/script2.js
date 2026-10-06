
// obejct of object *************************************************************

// let school = {
//     name : "C.C.H.S",
//     location : "Dhule",
//     class : {
//         name : "10th",
//         students : 50,
//         avgMarks : 70
//     }
// };
// using dot notation
// console.log(school.class.name);

//using bracket notation
// console.log(school["class"]["name"]);


//when key is given as variable
// let key = "name";
// console.log(school["class"][key]);

//update avgMarks of class 10 to 60
// console.log(school.class.avgMarks = 60); // 60
// console.log(school); // 60 

//update using bracket method 
// console.log(school["class"]["avgMarks"] = 50);
// console.log(school);

//delete using dot notation
// delete school.class.name;
// console.log(school);

//delete using bracket notation
// delete school["class"]["students"];
// console.log(school);

// =====================================================================================
// nested object-----------------------
//let school = {
//     name : "C.C.H.S",
//     location : "Dhule",
//     class : {
//         name : "10th",
//         students : 50,
//         avgMarks : 70
//     }
// };

//add avgHeight property in class object
//we add a new property (key) in nested object class 

// school.class.avgheight = "5.7inch"
// console.log(school);

// obejct of array ******************************************************************************
// let school = {
//     name : "C.C.H.S",
//     location : "Dhule",
//     class : [{
//         name : "10th",
//         students : 50,
//         avgMarks : 70
//     }, 
//     {
//         name : "11th",
//         students : 50,
//         avgMarks : 80
//     },
//     {
//         name : "12th",
//         students : 50,
//         avgMarks : 75
//     }

// ]
// };
// console.log(school);

// library (accio) and book ---------------------------------

// let library  = {
//     name : "Accio",
//     location : "Pune",
//     Books : [
//         {
//             name : "Atomic Habits",
//             author : "XYZ"
//         },
//         {
//             name : "GOOD BEHVAIOUR",
//             author : "SWAMI"
//         },
//         {
//             name : "Harry Potter",
//             author : "R D Sharma"
//         },
//         {
//             name : "english",
//             author : "R D Sharma"
//         }
//     ]
// };
// // console.log(library)

// // print all the books of library accio with their author 

// // for(book of library.Books){
//     // console.log(book.name+" - "+book.author);
// // }

// //add publisher to each book in the library 

// // for(let book of library.Books){
// //     book.publisher = "Prem";
// // }
// // console.log(library);

// // print books printen by R D sharma
// // for(let book of library.Books){
// //     if(book.author == "R D Sharma"){
// //         console.log(book.name+" - "+book.author);
// //     }
// // }

// // count number of books in library 
// // approach 1:-
// // let count = 0;
// // for(let book of library.Books){
// //     count++;
// // }
// // console.log(count);

// //approach 2 : -
// // console.log(library.Books.length); // 4 (took the length of Books array)

// // remove all the books from the library written by R D Sharma
// for(let i = 0;i<library.Books.length;i++){
//     if(library.Books[i].author == "R D Sharma"){
//         library.Books.splice(i,1);
//         i--;
    
//     }
// }
// console.log(library.Books);

// using for in loop----------------------------------------------
//  home work

// array of object==============================================================================
// let libraries = [
//     {
//         name : "Accio",
//     location : "Pune",
//     Books : [
//         {
//             name : "Atomic Habits",
//             author : "XYZ"
//         },
//         {
//             name : "GOOD BEHVAIOUR",
//             author : "SWAMI"
//         },
//         {
//             name : "Harry Potter",
//             author : "R D Sharma"
//         },
//         {
//             name : "english",
//             author : "R D Sharma"
//         } ]},
//     {
//          name : "RCPIT",
//     location : "Dhule",
//     Books : [
//         {
//             name : "Atomic Habits",
//             author : "XYZ"
//         },
//         {
//             name : "GOOD BEHVAIOUR",
//             author : "SWAMI"
//         },
//         {
//             name : "Harry Potter",
//             author : "R D Sharma"
//         },
//         {
//             name : "english",
//             author : "R D Sharma"
//         }],
//     }
// ];
// console.log(libraries);
// print all the names of libraries 

// for(let i=0;i<libraries.length;i++){
//     console.log(libraries[i].name);
//     console.log(libraries[i].name+" - "+libraries[i].location);
// }
// output :-             output 2:-
// Accio                  Accio - Pune
// RCPIT                  RCPIT - Dhule

//find the freqency of numbers 

// let arr = [1,2,2,3,3,3,4,5];
// let freqency = {};
// for(let i=0;i<arr.length;i++){
//     if(freqency[arr[i]]){
//         freqency[arr[i]]++
//     }else {
//         freqency[arr[i]] = 1;
//     }
// }
// console.log(freqency); //{ '1': 1, '2': 2, '3': 3, '4': 1, '5': 1 }


// 
// let students = [
//     {name : "Prem", grade : "A"},
//     {name : "Akash", grade : "B"},
//     {name : "PRASAD" , grade : "B"},
//     {name : "VENKY" , grade : "A"},
//     {name : "SID" , grade : "C"},
//     {name : "ketan" , grade : "D"},
// ]
// let res = {};
// for(let i=0;i<students.length;i++){
//     if(res[students[i].grade]){
//         res[students[i].grade].push(students[i].name);
//     }else {
//         res[students[i].grade] = [students[i].name];
        
//     }
// }
// console.log(res);

// Object destructuring ********************************************************************
// extract the value of the object in to variables.

// let person = {
//     name : "Prem",
//     age : 23
// }

// let {name,age} = person;
// console.log(name,age);
// console.log(typeof name); // string

// rename the variable -------------------------
// let person = {
//     name : "Prem",
//     age : 23,
//     gender : "M"
// }
// let {name:firstName,age :currAge} = person;
// console.log(firstName,currAge);  //Prem 23

//=======================================
// let {name,age,gender = "f"} = person;
// console.log(name,age,gender);  //Prem 23 

//
// let person = {
//     name : "Prem",
//     age : 23,
//     gender : "M",
//     city : "Pune"
// }
// let {name,age,...obj} = person;
// console.log(name,age,obj); //Prem 23 { gender: 'M', city: 'Pune' }


//practice question*******************************************
//  let person =[ 
//     {
//     name : "Prem",
//     city : "Dhule"
//     },
//     {
//     name : "akash",
//     city : "Jalgoan"
//     },
//     {
//     name : "venky",
//     city : "Dhule"
//     }
// ];
// let obj = {};
// for(let i=0;i<person.length;i++){
//     if(obj[person[i].city]){
//         obj[person[i].city].push(person[i].name);
//     }else{
//         obj[person[i].city] = [person[i].name];
//     }
// }
// console.log(obj);

// question 2 :-

// let persons =[ 
//     {
//     name : "Prem",
//     address : {
//         city : "Dhule"
//     }
//     },
//     {
//     name : "akash",
//     address : {
//         city : "Jalgoan"
//     }
//     },
//     {
//     name : "venky",
//     address : {
//         city : "Dhule"
//     }
//     }
// ];
// let res = {};
// for(person of persons){
//     if(res[person.address.city]){
//         res[person.address.city].push(person.name);
//     }else {
//         res[person.address.city] = [person.name];
//     }
// }
// console.log(res);

// object destructuring revision***********************************
// let person = {
//     name: "Prem",
//     age : 20,
//     city : "Dhule"
// }
// let {name,age} = person
// console.log(name,age);

// rename the variable************************************* 
// let{name : firstName ,age : currAge} = person
// console.log(firstName,currAge);

// default *********************************************** 
// let {name,age,gender = 'M'} = person
// console.log(gender);

// rest operator *****************************************
// let {name , ...obj} = person
// console.log(name ,obj);

// function parameter************************************
// let person = {
//     name: "Prem",
//     age : 20,
//     city : "Dhule"
// };
// function print({name,city}){
//     console.log(name,city)
// }
// print(person);

// spread operator **********************************************************************
// expand properties of one object to another
// it creates the shallow copy of first label and share the reference of nested label..

//copy =================================
// let person = {
//     name : "Prem",
//     city : "Dhule"
// }
// let user = {...person}; // <--- spread operator is used to copy all 
// console.log(user);

///==========================
// let person = {
//     name : "Prem",
//     city : "Dhule"
// }
// let user = {...person};
// user.gender = "M";
// console.log(user); //{ name: 'Prem', city: 'Dhule', gender: 'M' }
// here properties of person are copied to user 

// console.log(person); //{ name: 'Prem', city: 'Dhule' }


// let person = {
//     name : "Prem",
//     city : "Dhule",
//     address : {
//         pincode : 411045
//     }
// }
// let user = {...person};
// user.gender = "M";

// user.address.landMark = "high street";

// console.log(person);

// output :-
// here even we add lanDMark to user still it is added to person 
// in spread operator only first label propertirs are copied and nested label are shared as refernce 
// {
//   name: 'Prem',
//   city: 'Dhule',
//   address: { pincode: 411045, landMark: 'high street' }
// }


// update ****************************************************************************
// let person = {
//     name : "Prem",
//     age : 23
// }
// let user = {...person,age:30}
// console.log(user); //{ name: 'Prem', age: 30 } age is updated in user to 30

//ADD*****************************************************************************************
// let person = {
//     name : "Prem",
//     age : 23
// }
// let user = {...person,GENDER : "M"}
// console.log(user); // { name: 'Prem', age: 23, GENDER: 'M' } added new property to user

// Deep copy********************************************************************************
// 

// let person = {
//     name : "Prem",
//     age : 23,
//     address : {
//         city :"Pune",
//         pincode : 411045
//     }
// }
// let user = structuredClone(person);
// console.log(user);
// ouput : -
// { name: 'Prem', age: 23, address: { city: 'Pune', pincode: 411045 } }

// and even if we add any property at nested it not reflect on previous object

// user.address.landMark = "high street";
// console.log(person);

//output : -
// landMark is not added to nested label of person object
// { name: 'Prem', age: 23, address: { city: 'Pune', pincode: 411045 } }

//Linear Search *************************************************************************

// let arr = [4,5,6,8,9];
// target = 9;
// let flag = false;
// for(let i=0;i<arr.length;i++){
//     if(arr[i] == target){
//         flag = true;
//         break;
//     }
// };
// console.log(flag);

// approach 2 : - using function 

// function Search (arr,target){
//     for(let values of arr){
//         if(values == target){
//             return "Yes"
//         }
//     }
//     return "NO"
// };
// console.log(Search(arr,target)); // Yes


// let students = [
//     {
//         name :"Abhishek",
//         class : 10
//     },
//      {
//         name :"venky",
//         class : 11
//     },
//      {
//         name :"Akash",
//         class : 12
//     }
// ];
// let target = "Prem";
// function Search(arr,target)
// {
//     for(let i=0;i<students.length;i++){
//         if(students[i].name == target){
//             return true;
//             }
//         }
//         return false;
// }
// console.log(Search(students,target)); // false


// let students = [
//     {
//         name : "Prem",
//         attendance : "50%",
//         marks : 35,
//         totalMarks : 70
//     },
//     {
//         name : "Venky",
//         attendance : "70%",
//         marks : 40,
//         totalMarks : 90
//     },
//     {
//         name : "Akash",
//         attendance : "60%",
//         marks : 50,
//         totalMarks : 100
//     },
   
// ];

    // let passStudents = [];
    // for(let i = 0;i<students.length;i++){
    //     let percentage = students[i].marks/students[i].totalMarks*100;
    //     if(students[i].attendance > "55%" && percentage >= 50){
    //     passStudents.push(students[i].name);
    //     }
    // }
    //      console.log(passStudents);


// String comparison -> strings are comapred lexicographically (ASCII);

// let str1 = "Apple";
// let str2 = "Apble";
// console.log(str1 > str2) // true


// let str1 = "Check";
// let str2 = "check";
// console.log(str1 > str2)


// console.log("A" > "5") // true

//sort() -- > *********************************************************************************
//sort method is used sort the array
// its sorts items in lexicographical orders

// comaparator funcation -- > 
// ** with the help of compartor we can customize the sort method *************

// arr.sort =======

// let arr = [5,4,6,0,1];
// arr.sort();
// console.log(arr); //[ 0, 1, 4, 5, 6 ]


// it sorts in lexicogtaphical order A-Z ========================================
// let arr = ["Raman","Shayam","Abhishek"];
// arr.sort();
// console.log(arr); //[ 'Abhishek', 'Raman', 'Shayam' ]


//here all items are comapred in an lexicographical order
// let arr = [12,5,4,0,11];
// arr.sort()
// console.log(arr); //[ 0, 11, 12, 4, 5 ]

// comparator function =====================================================

// a-b for ascending order ---------------------------------------------------
// function comp (a,b){
//     return a-b;
// }
// let arr = [11,0,12,5,4];
// arr.sort(comp);
// console.log(arr); [ 0, 4, 5, 11, 12 ]

// b-a for descending order -----------------------------------------------------------------

// function comp (a,b){
//     return b-a;
// }
// let arr = [11,0,12,5,4];
// arr.sort(comp);
// console.log(arr);  //[ 12, 11, 5, 4, 0 ]

// let arr = [{marks : 12},{marks : 4},{marks : 11},{marks : 0},{marks : 5}];
// function comp (a,b) {
//     return a.marks - b.marks;
// }
// arr.sort(comp);
// console.log(arr);

// output ==========================
// [
//   { marks: 0 },
//   { marks: 4 },
//   { marks: 5 },
//   { marks: 11 },
//   { marks: 12 }
// ]

// sort the array by descending order of their age 

// let person = [
//     {
//         name : 'Prem',
//         age : 23
//     },
//     {
//         name : 'Ketan',
//         age : 28
//     },
//     {
//         name : 'Prasad',
//         age : 32
//     },
//     {
//         name : 'Anky',
//         age : 23
//     },
//     {
//         name : 'Sid',
//         age : 30
//     }
// ];
// here we just sort array on the basis of age 
// function comp(a,b){
//     return b.age - a.age;
// }
// person.sort(comp);
// console.log(person);

// now if the age is same then sort lexicographically 
// (According to first alphabet of name)

// function comp(a,b){
//     return b.age - a.age
// }


// Given students array based on marks and if marks are equal sort it based on 
// age in ascending

// let person = [
//     {
//         name : 'Prem',
//         age : 28,
//         marks : 70
//     },
//     {
//         name : 'Ketan',
//         age : 23,
//         marks : 70
//     },
//     {
//         name : 'Prasad',
//         age : 32,
//         marks : 65
//     },
//     {
//         name : 'Venky',
//         age : 23,
//         marks : 68
//     },
//     {
//         name : 'Sid',
//         age : 30,
//         marks : 60
//     }
// ];

// function comp (a,b){
//     if(a.marks == b.marks){
//         return a.age-b.age;
//     }else {
//         a.marks - b.marks;
//     }
// }
// person.sort(comp);
// console.log(person);


// let students = [
//     {
//         name : 'Prem',
//         age : 23
//     },
//     {
//         name : 'venky',
//         age : 23
//     },
//     {
//         name : 'Prasad',
//         age : 30
//     },
//     {
//         name : 'ketan',
//         age : 28
//     }
// ];
// function comp(a,b){
//     if(a.age == b.age)
//         return a.name.localeCompare(b.name)
//     else
//         return a.age - b.age
// }
// students.sort(comp);
// console.log(students);

// let number  = 321;
// // console.log(number.toString().split("").length);
// let count = 0;
// while(number > 0){
//    number = Math.floor(number/10);
//     count++;
// }
// console.log(count);

// let n = 321;
// // n = n % 10;

// let rev = 0; 
// while(n > 0){
//     let digit = n%10
//     rev= rev*10+digit; 
//     n = Math.floor(n/10);
// }
// console.log(rev);

// let words = `i am learning coding which is very simple somtimes and somtimes 
// very hard i dont know what to do but still i love learning coding`;

// let k = 5;

// let arr = words.split(" ");

// for(let i =0;i<k;i++){
//     console.log(arr[(Math.floor(Math.random()*10))])
// }

