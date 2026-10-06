//String searching and manipulation **************************************

//given and string is palendrome or not

//approach 1 :-
// let str = "rar";
// let rev = str.split("").reverse().join("");
// let final = (str === rev)? "palendrome" : "Not palendrome";
// console.log(final);


//appraoch 2 using function------------------------------- 

// function isPalindrome(str){
//     let rev = "";
//     for(let i=str.length-1;i>=0;i--){
//         rev += str[i];
//     }
//     if(str === rev){
//         return "palindrome";
//     }else{
//         return "Not a palindrome";
//     }
// }
// console.log(isPalindrome("rar"));
// console.log(isPalindrome("Prem"));
// console.log(isPalindrome("madam"));

// for of loop****************************************************************************
//  let str = "Prem";
//  for(let ch of str){
//     console.log(ch);  
//  }


//escape character and esacpe sequence******************************************************
//  console.log(`\`hello`); //`hello

//  console.log("He\`l\"l\`o"); //He`l"l`o
 

// esacpe sequnce----------------------

// \n -> new line 
// \t -> tab
// \r -> carriage

// \n -> new line
// console.log("Hello \nworld");

// \t -> tab 
// console.log("hello \tworld"); //hello   world

// \r -> carriage
// console.log("Hello\rma"); mallo

//store a multi line string----------------------------

//using back tick (``)
// let str = `hello
// i am 
// prem`
// console.log(str);

//string searching and manipulation*******************************************

// indexOf() --> (searchChar,fromindex)*********************************************************
//Returns the position of the first occurrence of a substring, or -1 if it is not present.

// let str ="Prem";
// console.log(str.indexOf("m"));

// return the index of first space 
// let str = "Hello world";
// console.log(str.indexOf(" ")); 5

// lastIndexOf() -->****************************************************************************
//Returns the last occurrence of a substring in the string, or -1 if it is not present.
// let  str = ("Hello world");
// console.log(str.lastIndexOf("o")); 7



// includes()******************************************************************
//Returns true if searchString appears as a substring 
// let str = "check";
// console.log(str.includes("e")); true

//startWith(matchsequence,position ?) default value of position*************************************************

// let str = "Hello";
// console.log(str.startsWith("He")); true
// console.log(str.startsWith("el",1)); true
// console.log(str.startsWith("el",2)); false

//endsWith(matchsequence,endposition ?)****************************************************************
// let str = "Hello";
// console.log(str.endsWith("el",1)); //false
// console.log(str.endsWith("lo"));  true


//slice ->(star,end) -> returns the part of the string from start to end(excluded);
//default end -> str.length 

// let str = "check"
// console.log(str.slice(0,2)) // ch
// console.log(str.slice(0)) // check

//slice ->supports negative index 

// let str = "check";
// console.log(str.slice(-2)); //ck

//substring ******************************************************************************

// let str = "check";
// console.log(str.substring(0,2)); ch 


// substring  --> if start is greater then end it automatically swaps it 

// let str = "check";
// console.log(str.substring(3,0)); //che


//approach 1 :-
// function subString(str,subStr){
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(str.substring(i,i+subStr.length) === subStr){

//             count++;
//         }
//     }
//     return count;
// }
// console.log(subString("ecoecaec","ec"));
// console.log(subString("ecoecaec","oe"));
// console.log(subString("ecoecaec","ae"));




// toUpperCase() and toLowerCase()*****************************************************************

//toUpperCase() --> it converts all the letters to Upper case

// let str = "check";
// console.log(str.toUpperCase()); //CHECK


//toLowerCase() --> it converts all the letters to Lower case

// let str1 = "CHECK";
// console.log(str1.toLowerCase()); //check
 

// abhishek 
//convert first charactet to uppercase and all others in lowers case

//approach 1:- with three variable
// let str = "abhishek"
// let str1 = str[0].slice().toUpperCase();
// let str2 = str.slice(1);
// console.log(str1+str2); // Abhishek

//approach 2:- with 2 variable

// let str = "abhishek";
// let newstr = str[0].slice().toUpperCase()+str.slice(1);
// console.log(newstr);  //Abhishek


// practice question ;----------------------------

// function check(fileType){
//     return fileType.endsWith(".pdf");
// }
// console.log(check("prem.pdf")); //true


// *****************************************************************************************
// function countSubstring(str,subStr){
//     let count =0;
//     for(let i=0;i<str.length;i++){
//         if(str.slice(i,i+subStr).length === subStr){
//             count++;
//             console.log(str.slice(i,i+subStr));
//         }
//     }
//     return `total count of all subString is ${count}`;

// }
// console.log(countSubstring("validate",2))


// convert the middle character to upper case

// let str = "check";
// let mid  = Math.floor(str.length/2)
// console.log(str.slice(0,mid)+str[mid].toUpperCase()+str.slice(mid+1));

// incase of even convert first middle to upper case ;
// let str = "chec";
// let mid = Math.floor(str.length/2);
// console.log(str.slice(0,mid-1)+str[mid-1].toUpperCase()+str.slice(mid));

//using if else statement***********************************************
// let str = "checky";
// let mid = Math.floor(str.length/2);
// if(str.length % 2 === 0){
//     console.log(str.slice(0,mid-1)+str[mid-1].toUpperCase()+str.slice(mid));

// }else {
//      console.log(str.slice(0,mid)+str[mid].toUpperCase()+str.slice(mid+1));

// }