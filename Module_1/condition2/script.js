// IF  ELSE STATEMENT ( CONDIOTNAL STATEMENT)***************************************
// SYNTAX 
// if(// condition){
//     // write or code here
// }
// else {
//     //write your code
// }

// given a age variable if age is greater than 18 print 
// eligible other wise print not eligible

// let age = 20 ;
// if(age >= 18){
//     console.log("Eligible");
// }else {
//     console.log("Not Eligible");
// }
// Eligible


// given a variable n if it is even then print "even" otherwise " odd"

// let n = 11;
//     if(n % 2 == 0){
//         console.log("Even");
// }   else {
//         console.log("Odd");
// }


// givwn a number id its negative print "negatice number" and if it   is positive print
//"positive number" and if it is xer oprint zero


//approch 1 ***********  using else if codition 
// let n = -1;
// if(n == 0){
//     console.log("n is zero");
// }else if (n > 0 ){
//     console.log("n is positive number")
// }else {
//     console.log("n is negative number");
// }
// appproch 2  ---- basic using only if block
// let n = 0;
// if( n = 0){
//     console.log(" n is zero");
// }
// if ( n > 0){
//     console.log("n is positive");
// }
// if(n < 0){
//     console.log("n is negative");
// }


// given marks of student 
// mark --> 90-> grade A+
// mark --> 80 <=marks < 90-> grade A+
// mark --> 70 <=marks < 80-> grade B+
// mark --> 60 <=marks < 70-> grade B
//marks <60 -> fail

// let marks = 59;
// if(marks < 60){
//     console.log("Fail");
// }else if (marks >= 60 && marks < 70){
//     console.log("B")
// }else if(marks >= 70 && marks < 80){
//     console.log("B+");
// }else if(marks >= 80 && marks < 90){
//     console.log("A");
// }else {
//     console.log("A+")
// }

// print name of days for 
// 1st day -->  sunday 
// 2nd day --> monday  so on...........
// given a variable day having value 1 to 7 ans show the name of day

// let n = 7;
//     if(n > 7){
//         console.log("invalid input");
// }   else if (n == 1){
//      console.log("Sunday");
// }   else if (n == 2){
//      console.log("Monday");
// }   else if(n ==3){
//         console.log("Tuesday");
// }   else if (n == 4){
//         console.log("Wednesday");
// }   else if( n == 5){
//         console.log(" Thrusday");
// }   else if (n == 6){
//         console.log("Friday");
// }   else  {
//         console.log("Saturday");
// }


// nested if ***************************************************************************
// so if a person is only eligilble to drive if he is greater than 18 years old 
//having driving licence so print eligible to drive if is he is eligible oherwise not eligible

// let age = 19 ;
// let Dl = true;
// if (age > 18 ){
//     if(Dl == true){
//         console.log("eligible to drive")
//     }else {
//         console.log("not eligible to drive");
//     }

// }else {
//     console.log("not eligible");
// }
 

//approch 2 
// let age = 18;
// let Dl = true
// if(age >= 18 && Dl == true){
//     console.log("eligible to drive");
// }else {
//     console.log("not eligible to drive");
// }

// homework *************************************************************************
