// All notion practice question 

// find temparture in celcius-----------------------------------
// function temp(C){
//   let F = ((C * 9/5)+32);
//   if(F >= 100){
//     console.log(`${F.toFixed(1)} - Very hot `)
//   }else if(F >= 70){
//     console.log(`${F.toFixed(1)} - Warm`);
//   }else if (F >= 50){
//     console.log(`${F.toFixed(1)} - Pleasant`);
//   }else {
//     console.log(`${F.toFixed(1)} - cold`);
//   }
// }
// temp(37)
// temp(40)
// temp(10)
// temp(0)


// find sum ,average and count of array using loop------------------
// function Find (arr){
//   let sum = 0,count = 0;
//   for(let i=0;i<arr.length;i++){
//     sum+= arr[i];
//     count++;
//    }
//    avg = sum/count;
//    console.log(`Sum: ${sum},Average: ${avg}, Count: ${count}`)
// }
// Find([5,15,25]);
// Find([10,20,30,40,50]);
// Find([100]);


// reverse string using string methods-------------------
// let ReverseString = (str) =>{
//  return str.split("").reverse().join("");
// }
// console.log(ReverseString("hello"));
// console.log(ReverseString("JavaScript"));
// console.log(ReverseString("12345"));

//approach 2 :- using loop-----------------------------------

// let ReverseString =(str) =>{
//     let Newstr = "";
//     for(let i = str.length-1;i>=0;i--){
//         Newstr += str[i];
//     }
//     console.log(Newstr);
// }
// ReverseString("hello");
// ReverseString("12345");
// ReverseString("JavaScript");

//Count Vowel in string -----------------------------------
// let CountOfVowel =(str) =>{
//     let count = 0;
//     let i = 0;
//     while(i < str.length) {
//         if (
//             str[i] == "a" ||
//             str[i] == "e" ||
//             str[i] == "i" ||
//             str[i] == "o" || 
//             str[i] == "u" || 
//             str[i] == "A" ||
//             str[i] == "E" ||
//             str[i] == "I" ||
//             str[i] == "O" ||
//             str[i] == "U" 
//         ) {
//             count++;
//         }
//         i++;
//     }
//     console.log(count);
// }
// CountOfVowel("hello");
// CountOfVowel("JavaScript");
// CountOfVowel("aeiou");


// sum of key values of object------------------------------------
// let student = {
//     math: 85,
//     science: 90,
//     english: 78,
//     hindi: 88
// }
// student.math = 50;
// student.science = 60;

// let Total = student.math + student.science;
// // for(let value of Object.values(student)){
// //     Total += value;
// // }


// console.log(Total);

// Grade Calculator and Multiple conditons----------------

// let student = {
//     name: "Ram",
//     marks: 75,
//     attendance: 70
// };
// // if attendace < 75% "Detained" (no grade);
// // else grade grade based on marks 
// if(student.attendance < 75){
//     console.log('Detained');
// } else if (student.marks >= 90){
//     console.log("A Grade - Excellent");
// }else if (student.marks >= 75){
//      console.log("B Grade - Good Job!")
// }else if (student.marks >= 50){
//      console.log("C Grade - Pass")
// }else {
//      console.log("F Grade - Fail");
// }

// find which appears more than onces 

// let FindDuplicates = (arr) => {
//     let obj = {}
//     for(let i =0;i<arr.length;i++){
//         if(obj[arr[i]]){
//              obj[arr[i]]++
//         }else{
//             obj[arr[i]] = 1
//         }
//     }
//     let newArr = []
//     for(let key of  Object.keys(obj)){
//         if(obj[key] > 1){
//             newArr.push(key);
//         }
//     }
//     console.log(newArr)
// }
// // FindDuplicates([1, 2, 3, 2, 4, 3]);
// FindDuplicates([,1,2,4]);


// passWord Validator ===========================================
// check wether pass length is 8 and has atleast 1 uppercase char and 1 lowercase char

// function validPass(str){
//     let length = str.length >= 8;
//     let hasUpper = false;
//     let number = false;
//     for(let i=0;i<str.length;i++){
//         if(str[i] >= "A" && str[i]<= "Z"){
//             hasUpper = true;
//             // break;
//         }
//         if(str[i] >= "0" && str[i] <= "9"){
//             number = true;
//             // break;
//         }
//     }
//     if(length && hasUpper && number){
//         console.log("Valid Password");
//     }else{
//         console.log("Invalid Password");
//     }
// }
// validPass("premA1234");


// function finalBill (arr){
//     let total = 0;
//     for(let i=0;i<arr.length;i++){
//         total += (arr[i].price * arr[i].quantity);
//     }
//     let Discount = total/10;
//     if(total > 2000){
//         total = total - Discount;
        
//     }
//     let GST = total*0.18;
//     let final = total+GST;

//     console.log(Math.floor(final));
    
// }
// finalBill([
//     {name: "Shirt", price: 500, quantity: 2},
//     {name: "Pant", price: 800, quantity: 1},
//     {name: "Shoes", price: 1200, quantity: 1}
// ]);


// Print numbers to Words==================================================================================
// function ToWords(n){
//     // array for 0 - 9
//     let ones = ["zero",'one','two','three','four','five','Six','seven','eight',
//         'nine'];

//     let Ten_19 = ['ten','Eleven','Twelve','Thirteen','fourteen',
//             'fifteen','sixteen','seventeen','eighteen','nineteen'
//         ];

//     let tens = ["","",'twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];    
    
//         if( n >= 0 && n <= 9){
//             return ones[n];
//         }else if(n > 9 && n<= 19) {
//             return Ten_19[n-10]
//         }else if(n > 19 && n <= 99){
//             return (tens[Math.floor(n/10)])+" "+ones[n%10];
//         }
// } 
// console.log(ToWords(88));
// console.log(ToWords(2));
// console.log(ToWords(19));
// console.log(ToWords(99));
// console.log(ToWords(12));

// student Rank calculator=======================================================================================
// let arr = [
//     {name: "Ram", marks: 85},
//     {name: "Sita", marks: 92},
//     {name: "Krishna", marks: 78}
// ];
// function Stats (arr){
//     let topper = arr[0].marks;
//     let lowest = arr[0].marks;
//     let total = 0;
//     let average = 0;
//     let aboveAvg = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].marks > topper){
//             topper = arr[i].name+"-"+arr[i].marks;
//         }
//         if(arr[i].marks < lowest){
//             lowest = arr[i].name+"-"+arr[i].marks;
//         }
//         total+=arr[i].marks;
//         average = total/arr.length;
//         if(arr[i].marks > average){
//             aboveAvg.push(arr[i].name+"-"+arr[i].marks)
//         }
//     }
//     console.log(topper);
//     console.log(lowest);
//     console.log("Average",average);
//     console.log(aboveAvg);
// }
// Stats(arr);

// Create a data structrue====================================================================

// let Comapanies = [
//    {
//     Name : "Accio",
//     Departemt : [
//         {
//             name : "Tech",
//             empolyeeNo : 10,
//             HOD : "Akash",
//             CreatedAt : "12/9/2004"

//         },
//         {
//             name : "HR",
//             empolyeeNo : 4,
//             HOD : "Himesh",
//             CreatedAt : "14/9/2004"
//         },
       
//     ]
//    },
//    {
//     Name : "ABC",
//     Departemt : [
//         {
//             name : "Tech",
//             empolyeeNo : 7,
//             HOD : "Vishal",
//             CreatedAt : "17/9/2004"
//         },
//         {
//             name : "HR",
//             empolyeeNo : 2,
//             HOD : "Divyesh",
//             CreatedAt : "18/9/2004"
//         }
//     ]
//    }
// ];
// function Print(Comapanies){
//     for(let i = 0;i<Comapanies.length;i++){

//     }
// }

// let students = [
//     {
//         name : "Brijesh",
//         age : 20,
//         address : {
//             city : "Pune"
//         }
//     },
//     {
//         name : "Akash",
//         age : 20,
//         address : {
//             city : "Delhi"
//         }
//     },
//     {
//         name : "Mahesh",
//         age : 30,
//         address : {
//             city : "Pune"
//         }
//     },
// ]
// function Group(students){
//     let obj = {}
//     for(let i = 0;i<students.length;i++){
//         if(obj[students[i].address["city"]]){
//             obj[students[i].address["city"]].push(students[i].name);
//         }else{
//             obj[students[i].address["city"]] = [students[i].name]
//         }
//     }
//     console.log(obj);
// }
// Group(students);

// find the largest and second largest from the array==========================================================================

// function Find(arr){
//     let largest = arr[0];
//     let secondLargest = arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > largest ){
//             largest = arr[i];
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > secondLargest && arr[i] < largest){
//             secondLargest = arr[i];
//         }
//     }
    
    
//     console.log("largest",largest);
//     console.log("secondLargest",secondLargest);
// }

// Find([1,2,3,4,5]);


// approach 2:- ========================================================================
// function find(arr){
//     let largest = -Infinity ;
//     let secondLargest = -Infinity;
//    for(let i =0;i<arr.length;i++){
//     if(arr[i] > secondLargest){
//         if(arr[i] > largest){
//             secondLargest = largest;
//             largest = arr[i];
//         }else{
//             secondLargest = arr[i];
//         }
//     }
//    }
//    console.log(largest);
//    console.log(secondLargest);
// }
// find([1,2,3,4,5]);

// find the second most frequent number from the array ==============================================================
function secondFreq (arr){
    let obj = {};
   for(let i=0;i<arr.length;i++){ 
        if(obj[arr[i]]){
             obj[arr[i]]++;
    }   else{
            obj[arr[i]] = 1
    }
}
let highest = -Infinity;
let secondMost = -Infinity;
for(let key of Object.keys(obj)){
    if(obj[key] > secondMost){
        if(obj[key] > highest){
            secondMost = highest
            highest = obj[key];
        }else{
            secondMost = obj[key];
        }
    }
}
    console.log(obj);
    console.log(highest);
    console.log(secondMost);
}
// secondFreq([1,2,4,4,5,3,3,3])
secondFreq([1,2,4,4,5,3,3,3,7,7,7,7])