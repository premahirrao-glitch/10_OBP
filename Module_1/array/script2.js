
// Day 2*******************************************

//slice(start,end)********************************************************
//it returns the part if array from the start index to end index  (excluded)

// let arr = [1,2,3,4,5,6];
// console.log(arr.slice(0,3)); //[ 1, 2, 3 ]

// let arr = [1,2,3,4,5,6];
// console.log(arr.slice(1,3)); //[ 2, 3 ]

//if end is not passed 
//default value is arr.length

// let arr = [1,2,3,4,5,6];
// console.log(arr.slice(2)); //[ 3, 4, 5, 6 ] it return from start index to arr.length****

// if we dont pass start it will return whole arr (dafault value of start is whole arr)

// let arr = [1,2,3,4,5,6];
// console.log(arr.slice(2));   //[ 1, 2, 3, 4, 5, 6 ]

// console.log(arr); [ 1, 2, 3, 4, 5, 6 ] (slice does not change the original array)


//**********************************************
//splice (start,deleteCount?,....items) **********************************************
//Removes elements from an array and if ,necessary,
//insert new elements in their place ,returning
//the deleted elements 

// let arr = [ 1, 2, 3, 4];
// arr.splice(1,2);
// console.log(arr); // [ 1, 4 ]



//eg) ->delete 2 items from the start--
// let arr = [1,2,3,4,5];
// arr.splice(0,2);
// console.log(arr);  //[ 3, 4, 5 ]


//delete 2 item from the start and insert 8,9 item in place of them

// let arr = [2,3,4,5,4];
// //remove 2 items 
// arr.splice(0,2,8,9);
// console.log(arr);   //[ 8, 9, 4, 5, 4 ]

//delete 3 from the array and insert 10 on the place of 3;
// let arr = [9,7,3,4,2];
// arr.splice(2,1,10);
// console.log(arr);     //[ 9, 7, 10, 4, 2 ] 

//insert 3 and 4 after 9 
// let arr = [9,7,3,4,2];
// arr.splice(1,0,4,3);
// console.log(arr);


//indexOf funcation*******************************************************************

//indexOF (searchELment,fromIndex ?)/
//return the index of first occurance of  the searchELment in the array
// if not present return -1;

// let arr = [1,2,3,4];
// console.log(arr.indexOf(2));  // 1


// let arr = [1,2,2,1,3,4,5];
// console.log(arr.indexOf(2)); //1 (beacuse it returns the first index of occurance)

// let arr = [1,2,2,1,3,4,5];
// console.log(arr.indexOf(8));  //-1 ( 8 is not present in array)


//practice -->
// given an array and two numbers
// find the numbers of items btw two values in the array


//approach 1------------------------------------------
// let arr = [1,3,4,6,9,10];
// let a = 4;
// let b = 10;
// let count = 0;
// let arr1 = []
// let first = arr.indexOf(a);
// let last = arr.indexOf(b);
// for(let i=0;i<arr.length;i++){
//      if(i >first && i < last){
//          count++;
//         arr1.push(arr[i]);
//         }
    
// }
// console.log(count);
// console.log(arr1);


//approach 2------------------------------------------------------------

// let arr = [1,3,4,6,9,10];
// let a = 4;
// let b = 10;
// let firstIndex = arr.indexOf(a);
// let lastIndex = arr.indexOf(b);
// console.log(lastIndex-firstIndex-1);    // 2


//lastIndexOf******************************************************************************





//includes(searchElements,fromIndex ?)--> returns true if  searchElement is present 
//otherwise false

// let arr = [1,2,3,4,5];
// console.log(arr.includes(7));  false

// console.log(arr.includes(1));  true


//concat() *****************************************************************************************
// it can be used to for merging two arrays
//returns new array of merged elements or items

// let arr = [1,2,3,4];
// let arr1 = [5,6,7,8];
// console.log(arr.concat(arr1));


//we can also merge items in the same array----------------

// console.log(arr.concat(5,6));  //[ 1, 2, 3, 4, 5, 6 ]


//Reverse function()********************************************************************
// it reverse the array and returns the same array in reverse form 
// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr);


//given an array check if it is palendrome or not 

//approach 1 ----- using function and single loop while comparing
//  first element and last element


// let palendrome =(arr) => {
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

//approach 2 *********************************************
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

// Nested arrays **********************************************************

let arr = [[1,2,3,4],[4,5,6],[7,8,9]];
console.log(arr[-1]);