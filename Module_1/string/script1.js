// sequence of character***************
//string literal -->('') , (""), (``);
//string is a primitive data type

// let str = 'Prem';
// console.log(str);  // Prem

// let str1 = "Prem";
// console.log(str1); //Prem

// let str2 = `Prem`;
// console.log(str2); //Prem

// Number,letter and special character 

// let str = "123";
// console.log(str); //123

//acess the character from string 

//approach 1 :-
// let str = "check";
// console.log(str[0]); //c
// console.log(str[2]); // e

//approach 2:- (using charAt()) method------------------------------------------------

// charAt()

// let str1 = "check";
// console.log(str1.charAt(2));  //e


//length of string***********************************************************
//length 

// let str = "check";
// console.log(str.length); // 5

// template literal ***********************************************************
// the string that is created backtics instead of 
// double quote and single quote in template literal

// let s = `My name is Prem`;
// console.log(s);  //My name is Prem


// string interpolation
// let age = 20;

// let str = `The average age of the class is ${age}`;
// console.log(str); // The average age of the class is 20


//question -----
// given a string str print the value
//of the variable marks inside the string

// let marks = 90;
// let str = `My score is : ${marks}`;
// console.log(str); //My score is : 90

// immutability*********************************************************

//for array-- (array's are mutable)
// let arr = [1,2,3,4,5];
// arr[1] = 8;
// console.log(arr); // [ 1, 8, 3, 4, 5 ]

// for String -----------------------------------------------------------------
// the string is javascript is not immutable

// let str = "check";
// str[1] = "t";
// console.log(str); //check (no change in the string)

// empty string**********************************************
// let str ="";
// console.log(str); (it will print empty space)


//string concatenation********************************************************

// let str1 = "abc";
// let str2 = "def";
// console.log(str1+str2); //abcdef

// let str1 = "123";
// let str2 = "456";
// console.log(str1+str2); 123456

// concate empty space with string

// let str1 = "123";
// let str2 = " ";
// console.log(str1+str2); //(123 ) 


//Type Coercion:-
//manual Type Coercion -> when we do the convertion of one datatype to another by ourself

//Automatic Type Coercion -> one datatype is converted to another
// automatically by complier

//string + Number --> number is converted in string

// let str1 ="123";
// let str2 = 45;
// console.log(str1+str2); 12345

//string - number -->string is converted into number 

// let str = "123";
// let str1 = 11;
// console.log(str-str1); //112

//string with  Boolean********************************************************
// console.log("abc"+true); 
// console.log("123"+true); 
// console.log("123"-true); 

// string with undefined*****************************************************

// console.log(d+"abc");
// let d; // error  (undefined) here d is hoisted but wecannot acces it after console

// console.log(a+"123");
// var a; // undefined (beacuse is hoisted and can be access after console)


//string with loops****************************
// let str = "Prem";
// for(let i=0;i<str.length;i++){
//    console.log(str[i]);
// }


//approach 1-->
// let str1 = "check";
// for(let i = str1.length-1;i>=0;i--){
//     console.log(str1[i]);
// }


//appraoch 2 -->
// let str1 = "check";
// let str = "";
// for(let i = str1.length-1;i>=0;i--){
//      str += str1[i];
// }
// console.log(str);  //kcehc

//appraoch 3--> using function

// function reverseString(str){
//     let reverse ="";
//     for(let i = str.length-1;i>=0;i--){
//         reverse += str[i];
//     }
//         return reverse;
// }
// console.log(reverseString("prem")); //merp
// console.log(reverseString("Ahirrao")); //oarrihA

function Halfequal(str){
    let str1="";
    let str2 ="";
    for(let i=0;i<str.length/2;i++){
        str1+= str[i];
    }
    
    for(let i=str.length/2;i<str.length;i++){
        str2 += str[i];
    }
    console.log(`str1:"${str1}" , str2:"${str2}"`);

}
Halfequal("manual");   //str1:"man" , str2:"ual"
Halfequal("manualy");   //str1:"man" , str2:"ual"

