// 12 months revision question
// month 1-> jan
// month 2-> feb

// let n = 12;
// if(n == 1){
//     console.log("jan");
// }else if (n == 2){
//     console.log("feb");
// }else if (n == 3){
//     console.log("MAR");
// }else if (n == 4){
//     console.log("APR");
// }else if (n == 5){
//     console.log("MAY");
// }else if (n == 6){
//     console.log("JUN");
// }else if (n == 7){
//     console.log("JUL");
// }else if (n == 8){
//     console.log("AUG");
// }else if (n == 9){
//     console.log("SEPT");
// }else if (n == 10){
//     console.log("OCT");
// }else if (n == 11){
//     console.log("NOV");
// }else{
//     console.log("DEC");
// }


// SWITCH CASE *********************************************************************************

// let month = 1;
// switch(month){
//         case 1:
//         console.log("JAN");
//         break;
//        case 2:
//         console.log("feb");
//         break;
//          case 3:
//         console.log("mar");
//         break;
//          case 4:
//         console.log("apr");
//         break;
//     default:
//         console.log("NOT a valid input");
// }    


// switch case without break key word************************

// let check = 2;
// switch(check){
//     case 1:
//         console.log("1");
//     case 2:
//         console.log("1");
//     case 3:
//         console.log("1");  
//     default :
//         console.log("Prem");      
// }
// NOTE----> Dont use switch conditon without break condition

// if no is 1 or 2 then print no is either 1 or 2
// if no is 1 or 2 or 3 then print no is either 2 or 3


//when we need to perform dame action on different values
// let check = 1;
// switch(check){
//     case 1:
//     case 2 :    
//         console.log("no is either 1 or 2 ");
//         break;
   
//     case 3:
//     case 4:    
//         console.log("no is either 3 or 4");
//         break;
       
//     default :
//         console.log("No is not valid");    

// }   

// output question-********************

// in switch case it follows strict equality === and cases are in number and input is in string so 
//default condtion will execute


// let month = "1";
// switch(month){
//         case 1:
//         console.log("JAN");
//         break;
//        case 2:
//         console.log("feb");
//         break;
//          case 3:
//         console.log("mar");
//         break;
//          case 4:
//         console.log("apr");
//         break;
//     default:
//         console.log("NOT a valid input");
// }  
 //op --->NOT a valid input------


//  let a = 1;
//  let b = 2;
// switch(a+b){
//         case 1:
//         console.log("JAN");
//         break;
//        case 2:
//         console.log("feb");
//         break;
//          case 3:
//         console.log("mar");
//         break;
//          case 4:
//         console.log("apr");
//         break;
//     default:
//         console.log("NOT a valid input");
// }  


//ternary operator**************************************************************************
//simplified version of (if else)condition

//given if ahe is greater than 18 print eligible othewise not eligible

// let age = 18;
// if(age >= 18){
//     console.log("eligible");
// }else{
//     console.log("not eligible");
// }

// now similar with ternary operator

//approch 1
// console.log(age >= 18 ? "Eligible" : "Not Eligible"); //Eligible


//approch 2
// let result = (age >= 18 ? "Eligible" : "Not Eligible"); 
// console.log(result);  // Eligible


//check even or add using ternary operator
// let num = 4100;
// let EvenOrodd = num % 2 == 0 ? "EVEN" : "ODD";
// console.log(EvenOrodd);

// console.log(num % 2 == 0 ? console.log("even") : console.log("odd"));
/*even
undefined*/


//Nested ternary condtion*****************************

//if age is greater than 18 and if person is holding dl then
//print eligible to drive otherwise not eligible to drive

// let age = 18;
// let dl = true;
// if(age >= 18){
//     if(dl == true){
//         console.log("eligible to drive")
//     }else{
//         console.log("not eligible to drive")
//     }
// }else{
//     console.log("Not eligible")
// }

//approch 2 using ternary operator
// let age = 18, dl = true;
// let canDrive = age >= 18? dl ? "eligible" : "not eligible" :"not eligible";
// console.log(canDrive);


//approach 3 using && operator
// let age = 10, dl = true;
// console.log(age >= 18 && dl == true ? "Eligible" : "Not Eligible"); //Not Eligible



//questions 
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


// use switch case********
// marks > 90 -> print grade A 
// marks > 70 -> print grade B 
// marks >= 50 -> print grade C
// marks < 50 -> print fail 

// let marks = 91;
// switch(true){
//     case (marks > 90) :
//         console.log("Grade A");
//             break;
//      case (marks > 70 ):
//         console.log("Grade B");
//             break;
//     case (marks >= 50) :
//         console.log("Grade C");
//             break;
//     default :
//         console.log("fail");
//             break;
// }       



//QUESTION 2 OF AGE AND DL USING SWTICH CASE ***
// let age = 20;
// let dl = false;
// switch(true){
//     case age > 18 && dl:
//         console.log("Eligible");
//         break;
     
//     default:
//         console.log("not eligible");
//         break;       
// }                                            //***not eligible****//                               


//print quater 1 --> if 4 <= months <= 6
            //quater 2 - if 7<=months <=9
            //quater 3 -if 10<= motnhs <=12  
            //quater 4 -if 1<= motnhs <=3
            
let month = 3;
switch(true){
    case month >=4 && month <= 6:
        console.log("Quater 1")
            break;
    case month >=7 && month <= 9:
        console.log("Quater 2")
            break; 
    case month >=10 && month <= 12:
        console.log("Quater 3")
            break;
    case month >=1 && month <= 3:
        console.log("Quater 4")
            break;        
    default:
        console.log("Not a valid input")
            break;                       
}            