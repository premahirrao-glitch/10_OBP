
// repalace --> first occurance of the search value and returns new string
// ***********************************************************************************
// let str = "validate";
// console.log(str.replace("l","e")); //vaeidate

// let str = "Hello world!"
// console.log(str.replace("Hello","world")); world world!

// replace all --> it replace all occurance of the search value and new string
// ***************************************************************************************
// let str = "hello world hello";
// console.log(str.replaceAll("hello","world")); world world world

// let str = "hello";
// console.log(str.replaceAll("l","t")); hetto


//split("")*********************************************************************************
// split a string into subString using the
// 
// let str = "check";
// let res = str.split("");
// console.log(res); [ 'c', 'h', 'e', 'c', 'k' ]

// let str = "My name is Prem";
// let res = str.split(" ");
// console.log(res); //[ 'My', 'name', 'is', 'Prem' ]


// let str = "My name is Prem";
// let res = str.split("");
// let count = 0
// for(let i=0;i<res.length;i++ ){
//     if(str[i] == " "){
//         count ++
//     }
// }
// console.log(count);

// print only first two words=====================================
// let str = "this world is do polluted";
// console.log(str.split(" ",2)); //[ 'this', 'world' ]

// reverse the string-----------------------------------------------
// let  str = "this world is so much polluted";
// let res = str.split(" ").reverse();
// let  ans = "";
// for(let i = 0;i<res.length;i++){
//     ans += res[i]+ " ";
// }
// console.log(ans.trim()); //polluted much so is world this

// appraoch 2 :-
// let str = "this world is so much polluted";
// let words = str.split(" ");
// let rev = words[words.length-1];
// for(let i=words.length-2;i>=0;i--){
//     rev+=" "+words[i];
// }
// console.log(rev); //polluted much so is world this


// join(separator)**********************************************************************************
// converts array into a string and join based on separator
// default separator is comma


// let res = ["hello","i","am","prem"];
// // let fin = res.join();
// console.log(fin); hello,i,am,prem (here default separator is comma)

// let res = ["hello","i","am","prem"];
// let fin = res.join(" ");
// console.log(fin); //hello i am prem

// trim() --> trim the space from the begging and end from the string *******************************
//************************************************************

// let str = " check ";
// console.log(str.trim());

// trimStart()--> remove the space from start***********************************
// let str = "   check ";
// console.log(str.trimStart());

//trimEnd()--> remove the space from end *******************************************
// let str = "   check    ";
// console.log(str.trimEnd()); //  "  check"

//padStart(targetLength,padString)**********************************************
//add pad string in the start of string untill
// it is equal to target length

// let str = "check";
// let ev = str.padStart("8","a");
// console.log(ev); //aaacheck

// question-------------
// let str = "check";
// let ev = str.padStart("10","aa");
// console.log(ev); //aaaaacheck


//padEnd(target.padString) ->>>>
//if the target length is less than the actual string length no character is added
//adds padString at the end of the string and complete the target length

// let str = "check";
// let ev = str.padEnd("8","a");
// console.log(ev); /checkaaa

// let str = "check";
// let ev = str.padEnd("10","aa");
// console.log(ev); //checkaaaaa

//*********************************************************************************** */
//ASCII code --> American code for information interchange************************************************

//(a-z) --> 97 - 122
//(A-Z) --> 65 - 90
//digits(0-9) --> 48-57


//********************************************************************************** */
//charCodeAt().fromCharCode()**********************************************************

// console.log("A".charCodeAt()); // 65
// console.log("g".charCodeAt()); // 103

// console.log("Prem".charCodeAt(2));

// charCodeAT()******************************************************************

// default index is zero 
// console.log("ABC".charCodeAt());
// console.log("ABC".charCodeAt());

//  fromCharCode() --> 65 - A---------------------------------------------------------------
// return character from its unicode value

// console.log(String.fromCharCode(65)); A
// console.log(String.fromCharCode(98)); b


//print the alphabet from b to f

// let start = 97;
// let end = 101;
// let str ="";
// for(let i = start;i<end;i++){
//     str+= String.fromCharCode(i);
// }

// console.log(str); //abcd

//print the alphabet in reverse order from G to A;
// let start = 71;
// let end = 65;
// let str ="";
// for(let i = start;i>=end;i--){
//     str+= String.fromCharCode(i);
// }
// console.log(str);   //GFEDCBA


// question to reverse the string and also the its words---------------------------------------

//approach 1 :-
// let str0 = "tiger is running";
// let str2 = "";
// for(let i=str0.length-1;i>=0;i--){
//     str2 += str0[i];
// }
// console.log(str2);  //gninnur si regit


//approach 2 :-
// let str = "tiger is running";
// let str1 = str.split("").reverse().join("");
// console.log(str1); //gninnur si regit

// question 2 :- ************************************************************************************
let str = "tiger is running";
let str1 = str.split(" ");
for(let i=0;i<str1.length;i++){
    str1[i] = str1[i].split("").reverse("").join("");
}
console.log(str1.join(" "));




