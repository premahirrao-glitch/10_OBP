
//comparision operator (== . ===, !=,!==,<,>,<=,>=)

// == (loose equality) **************************************************************************
//type coercion -> when two values of different data type are cpmpared
//one is automativally converts another.

// comsole.log( 2 == 2); //true

//string with number -> string is coverted into number
// console.log(8 == "8") //true

//line 1  
// console.log(1234 == "1234"); // true

//line 2
// console.log(0 == ""); true

//boolean with some other type 
// console.log(true == 1); //true

// console.log(true == 2 ); //false

// console.log(0 ==false); //true

// console.log("1" == false); //false
//-> "1" == 0
//-> 1 == 0 
// false


// console.log(a == a); //error

//line 2
// console.log("sk" == "sk"); //true

// console.log( 523 == 523.0); //true 


// Strict eqaulity  ===   *************************************************************
/* it check data type as well as values both */

// console.log( "2" == 2); //false  
// console.log (true === 1); //false 

// != loose not equal to *********************************************************
//-> only check the value if they are eqaul then true otherwise false

// console.log(1 != "1"); //false

// console.log(1 != 1); //false

// console.log(true != 0); //true

// console.log(false != 1); //true

//  !== strict not equal to *****************************************************

// console.log(true !== 1); //true

// console.log("1" !== 1); //true

// console.log(1 !== 1); //false

// console.log(1 !== 1); //false

//question 1 :-
// // let ans = 2!== "2"
// console.log(ans);   // true




// less then operator < **********************************************

// console.log(5 < 2); //false 

// console.log(10.5 < "9.6"); //true

//greater than > *****************************************************************

// console.log(4>2);//true

// console.log(6>"8");//false 

// less than or equal to <= *********************************************************
// console.log(5<= 10); true

// console.log(5<= 10); false 

// console.log(5<= 5); true

//greater than or equla to >= ***************************************************************
// console.log(10>= 2);//true

// console.log(10>= "10.0");  //true

// console.log(true >= 1); //true

// console.log(5>= true); //ture

// falsy values 
/*   0
    false
    ""
    null 
    undefined
    NaN
    */

    // console.log(Boolean(null)); //false 
    // console.log(Boolean(undefined)); //false 
    // console.log(Boolean(undefined)); //false 
    // console.log(Boolean("")); //false 

    //truthy values *****************************************************
    // console.log({});


// logical operators ******************************************************************
//           && ,|| , !

//And operator (&&)*************
//And operator returns the false value if no false value present returns the last true value

// a&&b only true id both a and b idog type true

// console.log(a && b);

// console.log([] && {});  //{}
 
//Questions 
// console.log( 6 && 5 && undefined); // undefined

// console.log( 3 && 2 && false && 1); // false 

// console.log( 3 && 2 && 8); // 8


// OR operator ( || )********************************************************************
// return the first truth value and if there is no true value than returns last false value


// console.log( 2 || 0); // 2

// console.log( 0 || 2); // 2

// console.log( 0 || false || 1); // 1

// console.log( undefined || false || NaN); // NaN


// ! operator  (Not operator)*********************************************************
//true -> false 
//false -> true

// console.log(!false); //true

// console.log(!{}); //false *** curly bracess are of truthy type

// console.log(!1); //false 

//Line 1

// console.log( !(2 && 3) ); //false

// //Line 1
// console.log({} && ![]); // false 

// //Line 1
// console.log(2 && 3 || 4); // 3

// short circuit ***************************************************************************************
// when a expression contain logical operator like  && || then we stop the evaluation 
//expression oonce result is known 

// let ans = 2 && 0 && 3 && 4 ;
// console.log(ans);  // 0


// let ans = 2 || 0 || 3 && 4 ;
// console.log(ans);    //2







 




