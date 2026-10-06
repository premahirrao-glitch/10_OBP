// let a = "45.5";
// let b = "10" 
// let result = parseFloat(a+b);
// console.log(Math.ceil(result));

// let a = "45.1";
// let b = "10" 
// let result = (parseFloat(a) + parseFloat (b));
// console.log(Math.floor(result));

// PEMDAS RULE*******
// console.log(4+(10/2)*1+4**2);

//compund assignment ***********
// let a = 11
// a += a-3
// console.log(a);
// let year = 2004;
// if(year % 400 == 0){
//   console.log(true);
//   }else{
//     console.log(true);
//   }

// console.log("apple" > "able");

// let a = 5, b = 2 , c = 3;
// if ( a > b && a > c){
//   console.log(`${a} is largest`);
// }else if (b > a && b > c){
//   console.log(`${b} is largest`);
// }else {
//   console.log(`${c} is largest`);
// }


//approch 2 using ternary operator
// let a = 5, b = 2 , c = 3;
// console.log(a > b && a > c ? `${a} is largest` : b>a && b>c ? 
//   `${b} is largest` : `${c} is largest`);

// let days = 1000;
// let year = Math.floor(days / 365);
// let remainingDays = Math.floor(days -(year * 365));
// let month = Math.floor(remainingDays/30);
// let finalDay = Math.floor(remainingDays % 30);
// console.log(year,month,finalDay);


// function sum(a,b){
//     console.log(a+b);
// }
// sum(10,20);

// function print(name , age = 20){
//     console.log("My name is ",name);
//     console.log("My age is ",age);

// }
// print("Prem",23,40);


// function isEligible(age){
//     if(age > 18)
//         return true;
//     else
//         return false;
    
// }
// console.log(isEligible(10));

// function diff(a,b){
//     a-b;
// }
// console.log (diff(1,2)); //undefined because faraction was not stored or returned


// function factorial(n){
//     let pro = 1;
//     for(let i=1;i<n;i++){
        
//         pro *= i; 
//     }
//   return pro;
// }

// console.log(factorial(4));


// function evenNum(n){
//     let num = n;
//     for(let i=0;i<=n;i++){
//         if(n % 2 == 0){
//             i++;
//              console.log(i) ;
//         }
//     // console.log(i) ;
//     }
// }
// evenNum(20);

//approch 1 using for loop
// let n = 10;
// let sum = 0;
// for(let i=1;i<=n;i++){
//    if(i % 2 == 0){
//     sum += i;
//    };
// }
// console.log(`sum of ${n} numbers is = ${sum}`);

//aproach 2 using funcation

// function evenSum(n){
//     let sum = 0;
//     for(let i=1;i<=n;i++){
//         if(i % 2 == 0){
//             sum += i;
//         }
//     }
//     console.log(sum);
// }
// evenSum(5);
// for(let i = 15 ;i>=0;i--){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// let num = 10;
// if(num < 1){
//     let isPrime =false
// }else{
//     for(let i = 2; i<=num ;i++){
//         if(num % i == 0){
//             console.log(i);
//         }
//     }
// }
// function ArrayProblem(arr, k) {
//   let count = 0;
//   for(let i =0;i<arr.length;i++){
//     for(let j =i+1;j < arr.length;j++){
//       if((arr[i]+ arr[j])== k){
//         count++;
        
//              }
//              return count;
      
//         }
//     }
// }
//     console.log(ArrayProblem([1,2,3,4,5],3));

// let arr = [4,2,1,3];
// let isIncreasing = true;
//   for(let i=0;i<arr.length-1;i++){
//     if(arr[i]> arr[i+1]){
//       isIncreasing = false;
//     }
//   }
//   if(isIncreasing){
//     console.log("YES")
//   }else{
//     console.log("NO");
//   }

// let arr = [1,2,3,4,5,6];
// let sum = 0;
// let avg = 0;
// let maxNum = arr[0];
// for(let i = 0 ;i<arr.length;i++){
//         sum += arr[i];
//         avg = Math.floor(sum / arr.length);
//         if(arr[i]>maxNum){
//             maxNum = arr[i];
//         }
//     }
    // console.log(sum,avg,maxNum);

    // let arr = [1,2,3,5,4,7,10];
    // let arr1 = [];
    // let arr2 = [];
    //     for(let i =0;i<arr.length;i++){
    //         if(arr[i] % 2 !== 0){
    //             arr1.push(arr[i]);
    //         }
    //         if(arr[i] % 2 == 0){
    //             arr2.push(arr[i]);
    //         }
    //     }
    //     arr1.sort((a,b) => b-a);
    //     arr2.sort((a,b) => a-b);
        
    //     console.log(arr1.concat(arr2).join(" "));
  


// let a = 10;
// let b = 2;
// console.log(++a + --b);

// let str = "";
// for(let i=1;i<=10;i++){
//     // str+="*";
//     // console.log("*");
// // }

// let arr = [2,1,2,3,1,5,1];
// let X = 2;
// let indexNo = "";
// for(let i=0;i<arr.length;i++){
//     if(X == arr[i]){
        
//     }
//     indexNo = i;
    
// }
// console.log(indexNo);

// let arr = [0,0,1,1,1];
// let count = 0
// let count1 = 0
// for(let i=0;i<arr.length;i++){
//     if(arr[i] <= 0){
//         count++;
//         console.log('NO');
//         break;
//     }else{
//         count1++;
        
//         console.log("YES");
//         break;
//     }
    
// }
// let arr = [-4,3,-9,-5,4,1];
// function printRatios() {
//   // write code here
//   let count=0;
//   for(let i=0; i< arr.length;i++){
//     count++;
//   }
//   return count;
// }
// console.log(printRatios());

// let arr = [1,2,3];
// let arr1 = [];
// for(let i = arr.length-1;i>=0;i--){
//     arr1.push(arr[i]);
//   }
// let palendrome = true
// for(let i =0;i<arr.length;i++){
//     if(arr[i] !== arr1[i]){
//       palendrome = false;
//       break;
//     }
//   }
//     if(palendrome){
//       console.log("palendrome")
  
//     }else{
//     console.log("not a palendrome");
//   }

// let arr = ["assfdafdg","apple","banana","sfsfdgdafdafcdf"];
// let longest = arr[0];
// for(let i = 0;i<arr.length;i++){
//   if(arr[i].length < longest.length){
//     longest = arr[i];
//   }
// }
// console.log(longest);
// console.log(arr.join("-").toString());

// let arr =[1,2,3,4,5];
// for(let i =0;i<arr.length;i++){
//   if(arr[i] % 2 !== 0){
//     console.log(arr[i]);
//   }
// }

//approach 2
// let palendrome=(arr) => {
//   for(let i=0;i<arr.length;i++){
//     if(arr[0] === arr[(arr.length-1-i)]){
//         console.log("Palendrome");
//         break;
//     }else {
//       console.log("Not a palendrome");
//       break;
//     }
//   }
// }
// (palendrome([4,1,4]));

// let arr =[1,2,[3,4]];
// let [] = arr;
// console.log(a);

// let arr = [3,2,1,5,6,4];
// let largest = arr[0];
// for(let i =0;i<arr.length;i++){
//   if(arr[i]>largest){
//     largest = arr[i];
//   }
// }
// console.log(largest);


// given target in a string to reverse and count its frequency

// let str = "the is Prem and the Prem of the Prem of the it Prem ok so Prem";
// let target = "Prem";
// let str1 = str.split(" ");
// let reverseTarget  = target.split("").reverse().join("")
// let count = 0;
// for(let i=0;i<str1.length;i++){
//     if(str1[i] === target){
//         count++;
//         str1[i] = reverseTarget;
//     }
// }
// let newStr = str1.join(" ")
// console.log(count); // 5
// console.log(newStr); // the is merP and the merP of the merP of the it merP ok so merP


// let str = "the is Prem and the Prem of the Prem of the it Prem ok so Prem";
// let newStr = str.split(" ");
// let count = {};
// for(let i=0;i<newStr.length;i++){
//     if(count[newStr[i]]){
//         count[newStr[i]]++;
//     }else{
//         count[newStr[i]] = 1;
//     }
// }
// console.log(count);

// var twoSum = function(nums, target) {
//     let ind = []
//     let sum = 0;
//     for(let i =0;i<nums.length;i++){
//         for(let j =i+1;j<nums.length;j++){
//             if(nums[i]+nums[j] === target){
//                 ind.push(i);
//                 ind.push(j);
//             }
//         }
//     }
//     return ind;
// }
//     console.log(twoSum([2,7,11,15],9));


// let l1 = [2,4,3];
// let l2 = [5,6,4];
// let sum = 0;
// let fin =[]
// for(let i=0;i<l1.length;i++){
//     for(let j=0;i<l2.length;i++){
//         sum+= l1[i]+l2[j];
//         fin.push(sum);
//     }

// }
// console.log(fin);


// function SubString(str,subStr){
//     let count =0;
//     for(let i=0;i<str.length;i++){
//         if((str.slice(i,i+subStr)).length == subStr){
//             count++;
//             console.log(str.slice(i,i+subStr));
//         }
//     }
//     return count;

// }
// console.log(SubString("Venkatesh",2));



// function midUpper(str){
//     let mid = Math.floor(str.length/2);
//     if((str.length/2) % 2 == 0){
//         console.log(str.slice(0,mid-1)+str[mid-1].toUpperCase()+str.slice(mid));
//     }else{
//         console.log(str.slice(0,mid)+str[mid].toUpperCase()+str.slice(mid+1));
//     }
// }
// midUpper("ahirrao");

// remove duplicate from string 

// let str = "ahirrao"
// let str1 = "";
// for(let i=0;i<str.length;i++){
//     if(!str1.includes(str[i])){
//         str1 += str[i];
//     }
// }
// console.log(str1);

//appraoach two with using includes();

// 

// function removeElement(nums, val) {
//     // nums[0] = val;
//     nums[1] = val;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]== val){
//             nums[i]= "_";
//             // nums.unshift(i);
//         }
//     }
//     console.log(nums);

// };
// removeElement([3,2,2,3],3);


// let str = "this world is so much polluted";
// let res =[];
// let str1 = " ";

// for(let words of str){
//     if(words == " "){
//         res.push(str1);
//     }else{
//         str1+= str[words];
//     }

// }
// console.log(res);

// let ch = 65;
// let n =5;
// for(let i=n;i>=1;i--){
//     let row = "";
//     for(let j=i;j<=n;j++){
//         row += String.fromCharCode(ch);
//     }
//     console.log(row);
//     ch++; 
// }

// let arr =  [10,18,15,0,20];
// arr.sort((a,b) => (b-a));
// console.log(arr[0],arr[1],arr[2]);

// let arr = [4 ,2, 3, 0, 1 ];
// function check(arr){
//     let res = [];

//     for(let i in arr){
//         res.push((arr[arr[i]]));
//     }
//     console.log(...res);
// }

// check([4 ,2, 3, 0, 1 ]);


// let arr = [{"name": "Band 1", "genre":"Rock","price" : 1000},
//     { "name":"Band 2","price" : 1000, "genre":"Pop"},{ "name":"Band 3", "genre":"Rock","price" : 1000}];
//     let result = [];
//     for(let i =0;i<arr.length;i++){
//         if(arr[i].genre == "Rock"){
//            console.log(arr[i].name, arr[i].genre);
//         }
//     }
//     // console.log(result);
//output : -Band 1 Rock
        // Band 3 Rock


//question on objects
// let arr = [ 
//   {
//     "title": "Bill Gates",
//     "author": "The Road Ahead",
//     "readingStatus": true
//   },
//   {
//     "title": "Steve Jobs",
//     "author": "Walter Isaacson",
//     "readingStatus": true
//   },
//   {
//     "title": "Mockingjay: The Final Book of The Hunger Games",
//     "author": "Suzanne Collins",
//     "readingStatus": false
//   }
// ];
// for(let i=0;i<arr.length;i++){
//     if(arr[i].readingStatus == false){
//       console.log(arr[i].title,arr[i].author);
//     }
//   }

  //output :- Mockingjay: The Final Book of The Hunger Games Suzanne Collins

//   let str = "acciojob";
//   let arr = [4,5,6,7,0,2,1,3];
//   let res = "";
//   for(let i = 0;i<str.length;i++){
//         res+= str[arr[i]];
//     }
//     console.log(res);

// function findLongestSubstring(s) {
//  let arr = s.split("");
//  let arr1 = [];
//   for(let i=0;i<arr.length;i++){
//     if(!arr1.includes(arr[i])){
//       arr1.push(arr[i]);
//     }
//   }
//       return arr1.length;
// }
// console.log(findLongestSubstring("aab"));
// console.log(findLongestSubstring("icpcprog"));
// console.log(findLongestSubstring("aakash"));
// console.log(findLongestSubstring("Ahirrao"));

// let person = {
//     firstName : "Prem",
//     surname : "Ahirrao",
//     skills : ["Node.js","React.js","python","MongoDB"]
// } 

//     if(person.skills.indexOf("MongoDB")){
//         console.log("yes");
// }else{
//     console.log(-1);
// }  

// let person = {
//   name : "Prem"
// }
// person.contactNo = 9657054741
// person.age = 23
// person.surName = "Ahirrao"
// console.log(person); //{ name: 'Prem', contactNo: 9657054741, age: 23, surName: 'Ahirrao' }
// delete person.age
// person.fullName = function(){
//    console.log("Dhule");
// }
// person.fullName(); //fullName: [Function (anonymous)]
// delete person.fullName;
// console.log(person); //{ name: 'Prem', contactNo: 9657054741, surName: 'Ahirrao' }

//  let person =[
// {
//     name:"Prem",
//     city:"Pune"
// },
// {
//     name:"Venkatesh",
//     city:"Dhule"
// },
// {
//     name:"Ketan",
//     city:"G Dhule"
// }

// ]
// for(i=0;i<person.length;i++){
//     console.log(person[i]["name"]);  
// }

// let person = [
//     {
//         name :"Prem",
//         age:23,
//         profession : "Mern developer"
//     },
//     {
//         name :"Prasad",
//         age:32,
//         profession : "Health department"
//     },
//     {
//         name :"venkatesh",
//         age:23,
//         profession : "Business-man"
//     }
// ]
// let NewBrother = {
//   name : "sonu",
//   age : 30,
//   profession : "farmer"
// }
// person.push(NewBrother);

// for (let i=0;i<person.length;i++){
//     console.log(`${person[i]["name"]}-${person[i]["profession"]}`);
// }

// let brother = [
//   {
//     name : "Prem",
//     profession : "Engineering"

//   },
//   {
//     name : "Ketan",
//     profession : "Engineering"
//   },
//   {
//     name : "venky",
//     profession : "Business"
//   },
//   {
//     name : "Prasad",
//     profession : "Govt"
//   }
// ];

// // add new object in array as dynamic
// let newBro = {
//   name : "sid",
//   profession : "Engineering"
// }
// brother.push(newBro);
// let len = [];
// // let obj = {};
// let longest = "";
// for(let i = 0 ;i<brother.length;i++){
//   if(brother[i].profession == "Engineering"){
//     len.push(brother[i].name);
  
//   }
//     // console.log(brother[i].name+" - "+brother[i].profession);

//     // find who name spelling is longest -------------------------
//     for(let j=0;j<len.length;j++){
//       // len.split("")
//       if(len[j].length > longest.length){
//         longest = len[j];
//       }
//     }
//   }
//   console.log(longest);
// // console.log(len);



// let str = "aakash";
// let strNew = str.split("").reverse().join("");
// console.log(strNew);

// aproach 2 
// let str = "madamgADFHGNHFNGDFDSBF";
// let strNew = str.split("");
// let final = "";
// for(let i = strNew.length-1 ;i>=0;i--){
//   // console.log(strNew[i]);
//   final += strNew[i];
  
// }
// console.log(final);

// console.log("a".charCodeAt());

// let str = "i";
// // console.log(str.charCodeAt());
//   if(str.charCodeAt() == 97 || str.charCodeAt() == 101 || str.charCodeAt() == 105 || str.charCodeAt() == 111 ||
//       str.charCodeAt() == 117 ){
//         console.log("lower vowel");
//     } else if(str.charCodeAt() == 65 || str.charCodeAt() == 69 || str.charCodeAt() == 73 || str.charCodeAt() == 79 ||
//       str.charCodeAt() == 85 ){
//         console.log("Upper vowel")
//     } else if (str.charCodeAt() > 97 && str.charCodeAt() <= 122){
//         console.log("lower consonant")
//     } 
//       else if (str.charCodeAt() > 65 && str.charCodeAt() <= 90) {
//         console.log("Upper consonant");
//     }

// console.log("U".charCodeAt());

// let library = {
//   name : "RCPIT",
//   Location : "DHULE",
//   class : [
//     {
//       name : "first year",
//       department : "all",
//        strength : {
//         divA : 50,
//         divB : 70
//        }
//     },
//     {
//       name : "Second year",
//       department : "ETC",
//        strength : {
//         divA : 50,
//         divB : 60
//        }
//     },
//     {
//       name : "third year",
//       department : "Comp",
//        strength : {
//         divA : 60,
//         divB : 65
//        }
//     },
//     {
//       name : "final year",
//       department : "Non Tech",
//       strength : {
//         divA : 55,
//         divB : 80
//       }
//     }
//   ]
// };
// // for(let i= 0;i<library.class.length;i++){

//   // print all name of class with departmemt
//   // console.log(library.class[i].name+" - "+library.class[i].department)

//   //add the princple name to all classes 
//   // library.class[i].principle = "J.B.PATIL"

//   // delete department from class array
//   // delete library.class[i].department;

// // }
// // console.log(library);

// for(let i=0;i<library.class.length;i++){
//   if(library.class[i].strength.divB > 60 && library.class[i].strength.divB < 100){
//     console.log(library.class[i].name+" - "+library.class[i].department);
//   }
// }


// let person = {
//     name: "Prem",
//     age: 23,
//     city: "Pune",
//     profession: "SDET"
// };
// for(let properties in person){
//   console.log(person[properties])
// }

// using for of loop and Object.key() method 
// for(let properties of Object.keys(person)){
//   console.log(properties);
// }

// let people = [
//     { name: "Prem", profession: "Engineering" },
//     { name: "Ketan", profession: "Business" },
//     { name: "Venky", profession: "Engineering" },
//     { name: "Prasad", profession: "Govt" },
//     { name: "Sid", profession: "Engineering" },
//     { name: "vijay",profession: "Sales" }
// ];
//To check the count of professions 
// let count= {};
// let count1 = [];
// for(i=0;i<people.length;i++){
//   let profession = people[i].profession
//   if(count[profession]){
//     count[profession]++;
//   }else{
//     count[profession] = 1;
//   }
// }
// // console.log(count);
// count1.push(count);
// console.log(count1);

// let people = [
//     { name: "Prem", profession: "Engineering" },
//     { name: "Ketan", profession: "Business" },
//     { name: "Venky", profession: "Engineering" },
//     { name: "Prasad", profession: "Govt" },
//     { name: "Sid", profession: "Engineering" },
//     { name: "BHAUSAHEB",profession: "Sales" }
// ];
// let longestName = "";
// for(let i = 0;i<people.length;i++){
//   if(people[i].name.length > longestName.length){
//     longestName = people[i].name;
//   }
// }
// console.log(longestName);  //BHAUSAHEB

//********************************************************************************************************** */
// let college = {
//   name : "RCPIT",
//   Location :"Dhule",
//   Department : [
//     {
//       name : "ETC",
//       avgStudents : 120
//     },
//     {
//       name : "ELECTRICAL",
//       avgStudents : 55
//     },
//     {
//       name : "CIVIL",
//       avgStudents : 60
//     },
//     {
//       name : "COMPUTER",
//       avgStudents : 180
//     }
//   ]
// };
// practice questions on this object *****************************************************************

//question 1 :- Find the department that has the highest avgStudents================================================
// let highest = college.Department[0]
// let result = [];
// for(let i =0;i<college.Department.length;i++){
//   if(college.Department[i].avgStudents > highest.avgStudents){
//     highest = college.Department[i];
//   }
// }
// console.log(highest);
// result.push(highest);
// console.log(result);


// question 2 :- count the department which has strength more than 100;========================================

// let count = 0;
// for(let i=0;i<college.Department.length;i++){
//   if(college.Department[i].avgStudents > 100){
//     count++
//   }
// }
// console.log(count);

// //question 3 :- create an new array which contain departments whose
// // avgStudents is more than 100 ;

// let newArr = [];
// for(let i=0;i<college.Department.length;i++){
//   if(college.Department[i].avgStudents > 100){
//     newArr.push(college.Department[i])
//   }
// }
// console.log(newArr);

// let products = [
//   {category : "Electronics",item:"laptop"},
//   {category : "Wooden",item:"cupboard"},
//   {category : "metal",item:"kadai"},
//   {category : "Electronics",item:"mobile"},
//   {category : "Wooden",item:"chair"}
// ];
// let obj = {};
// for(let product of products){
//   if(obj[product.category]){
//     obj[product.category].push(product.item);

//   }else{
//     obj[product.category] = [product.item];
//   }
// }
// console.log(obj);

// let products = [
//   {category : "Electronics",item:"laptop"},
//   {category : "Wooden",item:"cupboard"},
//   {category : "metal",item:"kadai"},
//   {category : "Electronics",item:"mobile"},
//   {category : "Wooden",item:"chair"}
// ];
// let obj = {};
//   for(let i=0;i<products.length;i++){
//     if(obj[products[i].category]){
//       obj[products[i].category].push(products[i].item)
//     }else {
//       obj[products[i].category] = [products[i].item];
//     }
//   }
// console.log(obj);
//**************************************************************************************************** */
// let students = [
//     { name: "Prem", department: "ETC" },
//     { name: "Ketan", department: "Computer" },
//     { name: "Venky", department: "ETC" },
//     { name: "Prasad", department: "Electrical" },
//     { name: "Sid", department: "Computer" }
// ];
// let obj = {};
// for(let i=0;i<students.length;i++){
//   if(obj[students[i].department]){
//       obj[students[i].department].push(students[i].name);
//   }else{
//     obj[students[i].department] = [students[i].name]
//   }
// }
// console.log(obj);
//*********************************************************************** */
// let products = [
//     { category: "Electronics", item: "Laptop", price: 50000 },
//     { category: "Furniture", item: "Chair", price: 3000 },
//     { category: "Electronics", item: "Mobile", price: 20000 },
//     { category: "Furniture", item: "Table", price: 5000 },
//     { category: "Electronics", item: "Mouse", price: 1000 }
// ];
// let obj = {};
// for(product of products){
//   if(obj[product.category]){
//       obj[product.category].push(product.item)
//   }else{
//     obj[product.category] = [product.item]
//   }
  
// }
// console.log(obj);


// access all keys in object*******************************
// let obj = {
//   name : "Prem",
//   age : 23
// };
// let key = "location";
// obj[key] = "Pune";
// console.log(obj); 
// console.log(Object.keys(obj)); 
// for(let keys in obj){
//   console.log(keys)
// }
//********************************** */
// access all values from object
// console.log(Object.values(obj));
// for(let values in obj){
//   console.log(obj[values]);
// }


// let products = [
//     { category: "Electronics", item: "Laptop", price: 50000 },
//     { category: "Furniture", item: "Chair", price: 3000 },
//     { category: "Electronics", item: "Mobile", price: 20000 },
//     { category: "Furniture", item: "Table", price: 5000 },
//     { category: "Electronics", item: "Mouse", price: 1000 }
// ];
// group category and in insert item in them================
// let obj = {};
// for(let i=0;i<products.length;i++){
//   if(!obj[products[i].category]){
//     obj[products[i].category] = [];
//   }
//   obj[products[i].category].push(products[i].item);
// } 
//console.log(obj);

// group category and tell the count of items in it=======================
// let products = [
//     { category: "Electronics", item: "Laptop", price: 50000 },
//     { category: "Furniture", item: "Chair", price: 3000 },
//     { category: "Electronics", item: "Mobile", price: 20000 },
//     { category: "Furniture", item: "Table", price: 5000 },
//     { category: "Electronics", item: "Mouse", price: 1000 },
//     { category: "metal", item: "rod", price: 1000 }
// ];
// let obj = {};
// for(let product of products){
//   if(!obj[product.category]){
//     obj[product.category] = 1;
//   }else{
//     obj[product.category]++;
//   }
// }
// console.log(obj);
// ==========================================================================================
// group by department and take the count ===========================
// let employees = [
//     { name: "Prem", department: "IT" },
//     { name: "Ketan", department: "HR" },
//     { name: "Venky", department: "IT" },
//     { name: "Prasad", department: "Finance" },
//     { name: "Sid", department: "IT" },
//     { name: "Jay", department: "HR" }
// ];
// let obj = {};
// for(let i=0;i<employees.length;i++){
//   if(obj[employees[i].department]){
//     obj[employees[i].department]++;
//   }else{
//     obj[employees[i].department] = 1;
//   }
// }
// console.log(obj);

// =======================================================================
// group by department and print all empolyee details in it 
// let employees = [
//     { name: "Prem", department: "IT", salary: 30000 },
//     { name: "Ketan", department: "HR", salary: 25000 },
//     { name: "Venky", department: "IT", salary: 40000 },
//     { name: "Prasad", department: "Finance", salary: 35000 },
//     { name: "Sid", department: "IT", salary: 45000 }
// ];
// let obj = {};
// for(let i =0;i<employees.length;i++){
//   if(obj[employees[i].department]){
//     obj[employees[i].department].push(employees[i]);
//   }else {
//     obj[employees[i].department] = [employees[i]];
//   }
// }
// console.log(obj);


let user = [
  {
    name : "Prem",
    age : 23,
    address : {
      city : 'pune'
    }
  },
  {
    name : "ketan",
    age : 23,
    address : {
      city : 'dhule'
    }
  },
  {
    name : "sid",
    age : 23,
    address : {
      city : 'dhule'
    }
  },
  {
    name : "venky",
    age : 23,
    address : {
      city : 'pune'
    }
  }
];
//return all users who arein city pune in an array 

// function searchUser (user){
//   for(let i =0;i<user.length;i++){
//   if(user[i].address.city == "pune"){
//     console.log(user[i].name);
//     } 
//   }
// }
// searchUser(user);


// let arr = [1,2,3,4];
// // console.log(arr.splice(2,1));
// arr.splice(4,0,5);
// console.log(arr);

// let arr = [4,3,5,7];
// let n = 5;
// for(let i=n;i>=1;i--){
//   arr.splice(4,0,i);
// }
// console.log(arr);

//appraoch 2 :- 
// let arr = [4,3,5,7,8];
// let n = 6;
// let newArr = [];
// for(let i=1;i<=n;i++){
//   newArr.push(i);
// }
// arr.splice(4,0,...newArr);
// console.log(arr);

//approach 3 :-
// let arr = [4,3,5,7,8];
// let n = 5;
// for(let i =1 ;i<=n;i++){
//   arr.splice(3+i-1 ,0,i)
// }
// console.log(arr);

// function searchIng(arr){
//   let target = 4;
//   let count = 0;
//   for(let i =0;i<arr.length;i++){
//     if(arr[i] == target){
//       count++;
//       console.log("Yes target exists")
//     }
//   }
//   console.log(count);
//   console.log("NO doesnt");
// }
// searchIng([1,2,5,4,4]);

// let arr = [1,2,2,3,4,4,5,6,7,8];
// let obj = {};
// // let count = 1;
// let newArr = [];
// for(let i =0;i<arr.length;i++){
//   if(obj[arr[i]]){
//     // count++;
//     obj[arr[i]]++;
//      }else {
//     obj[arr[i]] = 1;
//   }
//   if(Object.values(obj) > 1){
//     newArr.push(Object.values(obj));
//   }
// }
// console.log(obj);
// console.log(newArr);

// let isPalindrome = function(str){
//   let str1 = "";
  
//     str1 =str.split("").reverse().join("");
//     if(str == str1){
//       return "Palindrome";
//     }else {
//       return "Not a Palindrome"
//     }
//   }

// console.log(isPalindrome("121"));
// console.log(isPalindrome("prem"));
// console.log(isPalindrome("madam"));

// isPalindrome = (arr) => {
//   let flag = false;
//   let arr1 = []
//   for(let i = arr.length-1;i>=0;i--){
//     arr1.push(arr[i]);
//   }
//   if(arr == arr1){
//     return "Palindrome"
//   }else {
//     return "Not Palindrome"
//   }
// }
// console.log(isPalindrome([1,2,1]))

// function Find(arr){
//   let obj = {};
//   for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//       obj[arr[i]]++
//     }else{
//       obj[arr[i]] = 1;
//     }
//   }
//   let newArr = [];
//   for(let key of Object.keys(obj)){
//     if(obj[key] > 1){
//       newArr.push(key);
//     }
//   }
//   console.log(newArr);
// }
// Find([5,5,4,1,1]);


// let students = [
//     {name: "Amit", marks: 75},
//     {name: "Riya", marks: 88},
//     {name: "Karan", marks: 64},
//     {name: "Neha", marks: 91},
//     {name: "Raj", marks: 82}
// ];
// function Stats(students){
//   let topper = students[0].marks
//   let lower = students[0].marks
//   let total = 0;
//   let aboveAvg = [];
//   for(let i = 0;i<students.length;i++){
//     total += students[i].marks
//     if(students[i].marks > topper){
//       topper =students[i].name+"-"+students[i].marks;
//     }
//     if(students[i].marks < lower){
//       lower =students[i].name+"-"+students[i].marks
//     }
//   }
//   console.log("Topper",topper);
//   console.log("Lower",lower);
// }
// Stats(students);


// let arr = ["apple",'banana','kiwi','mango'];
// let item = arr.indexOf("kiwi");
// // console.log(item);
// arr.splice(item,1,'watermelon','rose');
// console.log(arr);


// let names = ["Prem", "Akash", "Rohan", "Amit"];
// function comp (a,b){
//   return b.localeCompare(a);
// }
// names.sort(comp);
// // console.log(names);

// let arr = [5,4,6,8,7,2];
// function comp(a,b){
//   return a-b;
// }
// arr.sort(comp);
// console.log(arr);
// console.log(arr
// var a = 10;
// console.log(a);
// var a = 15;
// console.log(a);

// {
//   const a = 15
  
// }
// console.log(a);
// console.log(0||1&&2);

// let students = [
//   {name :"amit",math : 78 ,science : 82 ,english : 90},
//   {name :"sneha",math : 88 ,science : 75 ,english : 86},
//   {name :"ravi",math : 92 ,science : 90 ,english : 85}
// ];
// let total = 0;
// for(let i=0;i<students.length;i++){
//   total =(students[i].math+students[i].science+students[i].english);
//   // console.log(total);
//   // console.log("Average".total/students.length);
//   let Average = (total/students.length).toFixed(2)
//   console.log(students[i].name+"-"+"total",total+"-"+"Average",Average);
// }

// let empolyee = [
//   {name: "A",salary : 50,exprience : 3},
//   {name: "B",salary : 60,exprience : 2},
//   {name: "C",salary : 55,exprience : 4},
//   {name: "D",salary : 70,exprience : 5},
// ]
// function comp(a,b){
//   return b.exprience-a.exprience
// }
// empolyee.sort(comp);
// console.log(empolyee);


// let n = 4
// let res = ""
// for(let i=1;i<=n;i++){
//   for(let j=i;j<=i;j++){
//     res += "*"
//   }
//   console.log(res);
// }

// find the largest and smallest element form the array*************************************************************

// let arr = [10, 45, 23, 67, 12, 67, 34];
// function comp(a,b){
//   return a-b
// }
// arr.sort(comp);
// console.log("Smallest Element -",arr[0]);
// console.log("Largest Element -",arr[arr.length-1]);

//  Find largest and secondLargest elements************************************************************

// let arr = [10, 45, 23, 67, 12, 67, 34, 90, 101];
// let largest = -Infinity;
// let secondLargest = -Infinity;

// for(let i=0;i<arr.length;i++){
//   if(arr[i]>largest && arr[i] > secondLargest){
//     secondLargest = largest;
//     largest = arr[i];
//   }
  
// }
// console.log("secondLargest Element -",secondLargest);
// console.log("Largest Element -",largest);

// check frequency of the elements from the array *****************************************************************
// let arr = [1, 2, 2, 3, 1, 2, 4, 3];
// let obj = {};
// function Freq(arr){
//   for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]){
//       obj[arr[i]]++;
//     }else{
//       obj[arr[i]] = 1;
//     }
//   }
//   return obj;
// }
// console.log(Freq(arr));

// check whether the key exist or not *************************************************************************
// const student = {
//     name: "Rahul",
//     age: 20,
//     course: "JavaScript"   
// }
// let flag = false;
// for(let key in student){
//   if(key == "marks"){
//     flag = true;
//     break;
//   }
// }
// if(flag){
//   console.log("Exist")
// }else{
//   console.log("Does not exist");
// };

// print all the key name from the object********************************************************************
// const student = {
//     name: "Rahul",
//     age: 20,
//     course: "JavaScript",
//     marks: 85
// }
// for(let key in student){
//   // console.log(key);
//   console.log(student[key]);
// }
