// / Nested loop ************************************************************************
// let n = 5;
// let str = ""
// for(let i=0;i<n;i++){
//     str += "*"
// }
// console.log(str);
// output : -
//  *****


// print 5 star in 3 row each ================================================================
//  let n = 3;
//  for(let row = 1;row <=n;row++){
//     let str = "";
//     for(let col=1;col<=5;col++){
//         str+= "*"
//     }
//     console.log(str);
//  } 
// output : -
// *****
// *****
// *****

// let n = 4;
// let str = "";
// for(let i=1;i<=n;i++){
//     str+= "*";
//     console.log(str);
// }

//approach 2 :-==============================================================
// let n = 4;
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let col=1;col<=i;col++){
//         str+= "*";
//     }
//     console.log(str);
// }
// output : -
// *
// **
// ***
// ****

//================================================
// Odd and even star pattern =================================================================
// for odd col = 2*i-1
// let n = 4;
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let col=1;col<=2*i-1;col++){
//         str+= "*";
//     }
//     console.log(str);
// }
// output:-
// *
// ***
// *****
// *******

// for even pattern col = 2*i
// let n = 4;
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let j=1;j<=2*i;j++){
//         str+= "*";
//     }
//     console.log(str);
// }
// output : -
// **
// ****
// ******
// ********

// print right angled triangle staring from right side========================================

// let n = 5;
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let j=1;j<=n-i+1;j++){
//         str+= "*";
//     }
//     console.log(str);
// }

// let n =3;
// for(let i=0;i<n;i++){
//     let str = "";
//     for(let j=0;j<2*(n-i-1)+1;j++){
//         str+= "*";
//     }
//     console.log(str);
// }

// reverse star in triangle form and odd numbers=====================================
// let n = 3 ;
// for(let i =1;i<=n;i++){
//     let str = "";
//     for(let j=1;j<=2*(n-i+1)-1;j++){
//         str+="*";
//     }
//     console.log(str);
// }
// output :-
// *****
// ***
// *


// print even stars==========================================
// let n =5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=2*i;j++){
//         str+="*";
//     }
//     console.log(str);
// }

// triangled from right to left================================================
// let n =2;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let j=1;j<=2*(n-i);j++){
//         str+=" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         str+="*";
//     }
//     console.log(str);
// }

//appraoch 2 :-

// let n = 3;
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let j=1;j<=2*(n-i+1)-2;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         str+="*";
//     }
//     console.log(str);
// }
// output:-
//     *
//   ***
// ***** 

// print even series in reverse from left to right====================================
// let n =4;
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(j=1;j<=2*i-2;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=2*(n-i+1);k++){
//         str+="*";
//     }
//     console.log(str);
// }
// output:-
// ******
//   ****
//     **

// odd reverse from left to right and even space

// let n =3;
// for(let i=1;i<=n;i++){
//     let str = "";
//     for(let j=1;j<=2*i-2;j++){
//         str+=" ";
//     }
//     for(let k=1;k<=2*(n-i+1)-1;k++){
//         str+="*";
//     }
//     console.log(str);
// }
// output:-
// *****
//   ***
//     *


// print triangle of numbers 
// let n =4
// for(let i=1;i<=n;i++){
//     let str = '';
//     for(let j=1;j<=i;j++){
//         str+= j
//     }
//     console.log(str);
// }
// output:-
// 1
// 12
// 123
// 1234


// print pattern ABC===============================================================================
// let n = 4;
// for(let i = 1;i<=n;i++){
//     let str = "";
//     for(let j=1;j<=i;j++){
//         str+= String.fromCharCode(65+j-1);
//     }
//     console.log(str);
// }
//output:-
// A
// AB
// ABC
// ABCD


// print pyramid star pattern =================================================================
// let n = 4;
// for(let i=1;i<=n;i++){
//     let str ='';
//     for(let j=1;j<=n-i;j++){
//         str+= " ";
//     }
//     for(let k=1;k<=2*i-1;k++){
//         str+="*";
//     }
//     console.log(str);
// }
// output:-
//    *
//   ***
//  *****
// *******

// let n = 5;
// for(let i=)